document.addEventListener("DOMContentLoaded", function () {
  const showPopupBtn = document.getElementById("showPopupBtn");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const popup = document.getElementById("popup");
  const orderButton = document.getElementById("orderButton");

  showPopupBtn.addEventListener("click", function () {
    popup.style.display = "block";
    popup.style.animation = "fadeIn 0.3s forwards";
  });

  closePopupBtn.addEventListener("click", function () {
    popup.style.display = "none";
    popup.style.animation = "fadeOut 0.3s forwards";

    setTimeout(function () {
      popup.style.display = "none";
      popup.style.animation = "";
    }, 300);
    const video = popup.querySelector("video");
    if (!video.paused) {
      video.pause(); // Mematikan video jika sedang diputar
    }
  });

  orderButton.addEventListener("click", function () {
    window.location.href = "halaman_pemesanan.html";
  });
});
