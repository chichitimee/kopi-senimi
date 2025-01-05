//toggle kelas aktif

const navbarNav = document.querySelector(".navbar-nav");
//ketika nasgor menu diklik
document.querySelector("#nasgor-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar utk menghilangkan nav

const nasgor = document.querySelector("#nasgor-menu");

document.addEventListener("click", function (e) {
  if (!nasgor.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
