function panggilObject() {
  var karyawan = {
    nama: "Ahmad Muhbit",
    umur: 32,
    bagian: "E-Channel App Programmer",
    lantai: 3,
  }
  for(var x in karyawan)
  console.log(karyawan[x])
}

panggilObject()
