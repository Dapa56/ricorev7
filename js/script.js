//toggle class active untuk humberger menu

const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const seacrhForm = document.querySelector(".search-form");
const seacrhBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  seacrhForm.classList.toggle("active");
  seacrhBox.focus();
  e.preventDefault();
};

//klik dluar elemen

const menu = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#cart-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !seacrhForm.contains(e.target)) {
    seacrhForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// toggle class active untuk shopping cart

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// modal box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal1 = document.querySelector("#item-detail-modal-1");
const itemDetailButton = document.querySelectorAll(".item-detail-button");
const itemDetailButton1 = document.querySelectorAll(".item-detail-button-1");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar model
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
