function whatsapp() {
  var name = document.getElementById("Nama").value;
  var tanggal = document.getElementById("Tanggal").value;
  var tanggal2 = document.getElementById("Nama-buat").value;
  var tanggal3 = document.getElementById("Nama-paket").value;
  var tanggal4 = document.getElementById("Wa").value;
  var tanggal5 = document.getElementById("Lagu-video").value;
  var tanggal6 = document.getElementById("Checkbox").value;
  // Ambil data lainnya sesuai dengan id elemen yang sesuai

  var sambutan =
    "Halo " +
    name +
    ", terima kasih telah mengisi formulir pemesanan kami. Berikut adalah detail pemesanan Anda:\n\n";
  // Menggunakan window.encodeURIComponent untuk mengkodekan tanda baca khusus
  var url = `https://wa.me/6283114852113?text=${window.encodeURIComponent(
    sambutan
  )}Nama : ${window.encodeURIComponent(
    name
  )}%0aTanggal : ${window.encodeURIComponent(
    tanggal
  )} : %0aNama-buat${window.encodeURIComponent(
    tanggal2
  )} : %0aNama-paket${window.encodeURIComponent(
    tanggal3
  )} : %0aWa${window.encodeURIComponent(
    tanggal4
  )} : %0aLagu-video${window.encodeURIComponent(
    tanggal5
  )} :%0aCheckbox${window.encodeURIComponent(tanggal6)}`;

  // Tambahkan data lainnya sesuai dengan format yang diinginkan
  // Contoh: url += `%0aNomer HP : ${window.encodeURIComponent(nomerHP)}`;

  // Buka link WhatsApp di tab baru
  window.open(url, "_blank").focus();
}

// function whatsapp() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("tanggal").value;
//   var phone = document.getElementById("name-dibuat").value;
//   var date = document.getElementById("paket").value;
//   var message = document.getElementById("Nomor-wa").value;
//   var message1 = document.getElementById("lagu").value;
//   var message2 = document.getElementById("tema").value;

//   var url = `https://wa.me/6283114852113?text=*name :* ${name}%0a*tanggal :* ${email}%0a*name-dibuat :* ${phone}%0a*paket :* ${date}%0a*Nomor-wa :* ${message}%0a*lagu :* ${message1}%0a`;
//   "*tema :* " + message2;

//   window.open(url, "_blank").focus();
// }
