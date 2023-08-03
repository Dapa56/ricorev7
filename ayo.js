document.addEventListener("DOMContentLoaded", function () {
  // Menghilangkan opasitas sebelum mengarahkan pengguna ke halaman baru
  document.body.style.opacity = "100";

  // Saat semua elemen dimuat, kembalikan opasitas menjadi normal
  setTimeout(function () {
    document.body.style.opacity = "3";
  }, 500); // Waktu yang sama dengan durasi transisi dalam milidetik
});
