const sidebar = document.querySelector(".sidebar");

let menuOpen = false;

const toggleMenu = () => {
  if (!menuOpen) {
    sidebar.classList.add("active");
    menuOpen = !menuOpen;
  } else {
    sidebar.classList.remove("active");
    menuOpen = !menuOpen;
  }
};
