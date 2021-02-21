const sidebar = document.querySelector(".sidebar");
const sidebarCloser = document.querySelector(".sidebar_closer");

let menuOpen = false;

const toggleMenu = () => {
  if (!menuOpen) {
    sidebar.classList.add("active");
    sidebarCloser.classList.add("active");
    menuOpen = !menuOpen;
  } else {
    sidebar.classList.remove("active");
    sidebarCloser.classList.remove("active");
    menuOpen = !menuOpen;
  }
};
