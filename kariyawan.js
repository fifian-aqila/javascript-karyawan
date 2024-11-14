// OBJECT
const daftarKariyawan = [
    {
      nama: "Devyn Ramirez",
      masaKeerja: "10",
      nomorInduk: "3244",
      gaji:"Rp.7.000.000",
  
    },

    {
      nama: "Harmony Duncan",
      masaKeerja: "5",
      nomorInduk: "6534",
      gaji:"Rp.4.000.000",
    },

    {
      nama: "Clarissa Burgess",
      masaKeerja: "8",
      nomorInduk: "7654",
      gaji:"Rp.7.000.000",
    },
    {
       nama: "Reilly Blanchard",
      masaKeerja: "8",
      nomorInduk: "7654",
      gaji:"Rp.7.000.000",
    },
    
  ]
  let mode ='tambah'
  

  // READ
  const tampilkanKariyawan = () => {
    const tblKariyawan = document.getElementById(`tblKariyawan`)
    tblKariyawan.innerHTML = '<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>Nomor Induk</th><th>Gaji</th><th>hapus</th></tr>'
  
    for (let idx in daftarKariyawan) {
      console.log(`${parseInt(idx) + 1}. ${daftarKariyawan[idx].nama} Masa Kerja${daftarKariyawan[idx].masaKeerja} Nomor Induk nya ${daftarKariyawan[idx].nomorInduk} Gaji nya ${daftarKariyawan[idx].gaji} `)
  
       // menambah isinya 
      tblKariyawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKariyawan[idx].nama}</td><td>${daftarKariyawan[idx].masaKeerja}</td><td>${daftarKariyawan[idx].nomorInduk}</td><td>${daftarKariyawan[idx].gaji}</td><td><button class="btn btn-warning" onclick="editKariyawan('${daftarKariyawan[idx].nama}')">Edit</button</td><td><button class="btn btn-danger" onclick="hapusKariyawan('${daftarKariyawan[idx].nama}')">Delete</button></td></tr>`
    }
  }
  
  // CREATE
  const tambahKariyawan = () => {
    const nama = document.getElementById('txt-nama').value;
    const masaKeerja = document.getElementById('txt-masaKerja').value;
    const nomorInduk = document.getElementById('txt-nomorInduk').value;
    const gaji = document.getElementById('txt-gaji').value;
  
    const kariyawanBaru = {
      nama: nama,
      masaKeerja: masaKeerja,
      nomorInduk: nomorInduk,
      gaji: gaji,
    }

    if (mode == 'tambah'){
      daftarKariyawan.push(kariyawanBaru)
    } else{
      //jika di edit
      daftarKariyawan[mode] = kariyawanBaru
    }

    document.getElementById('txt-nama').value = ""
    document.getElementById('txt-masaKerja').value = ""
    document.getElementById('txt-nomorInduk').value = ""
    document.getElementById('txt-gaji').value = ""

    tampilkanKariyawan()
  }
  
  
  const cariIndex = (nama) => {
    for(let i = 0; i<daftarKariyawan.length; i++) {
      if (daftarKariyawan[i].nama == nama) {
        return i
      }
    }
    
  }
  

  //Delete
  const hapusKariyawan = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus Kariyawan
    if (indexDihapus !== -1) {
       daftarKariyawan.splice(indexDihapus, 1)
       tampilkanKariyawan();
    } 

    document.getElementById('txt-nama').value = ""
    document.getElementById('txt-masaKerja').value = ""
    document.getElementById('txt-nomorInduk').value = ""
    document.getElementById('txt-gaji').value = ""

    tampilkanKariyawan()
  


    //jika cancle
    if (mode == 'cancle') {
      daftarKariyawan.push(kariyawanBaru)
    } else {
      //jika edit
      daftarKariyawan[mode] = kariyawanBaru
    }
  }

  //edit
  const editKariyawan = (target) => {
    const indexEdit = cariIndex(target)
    console.log(target)
    console.log(indexEdit)
    console.log(daftarKariyawan[indexEdit])

    const kariyawaDiedit = daftarKariyawan[indexEdit]

    document.getElementById('txt-nama').value = kariyawaDiedit.nama
    document.getElementById('txt-masaKerja').value = kariyawaDiedit.masaKeerja
    document.getElementById('txt-nomorInduk').value = kariyawaDiedit.nomorInduk
    document.getElementById('txt-gaji').value = kariyawaDiedit.gaji

    mode = indexEdit
 
  }
    
    
  
  