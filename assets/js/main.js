// main.js

// Toggle Navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger");

// Navbar toggle
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar elemen untuk close dropdown/modal
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shopping.contains(e.target)) {
    shopping.classList.remove("active");
  }
});

// Modal Box Detail Produk
const itemDetail = document.querySelector("#item-detail-modal");
const itemButtons = document.querySelectorAll(".item-detail-btn");

// Buka modal saat tombol detail diklik
itemButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});

// Tutup modal saat tombol close diklik
document.querySelector(".modal .close").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault();
};

// Tutup modal saat klik di luar konten modal
window.onclick = (e) => {
  if (e.target === itemDetail) {
    itemDetail.style.display = "none";
  }
};

// // Animasi Text dengan TypeIt
// document.addEventListener("DOMContentLoaded", () => {
//   new TypeIt(".paragrap", {
//     speed: 200,
//   }).go();
// });

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

