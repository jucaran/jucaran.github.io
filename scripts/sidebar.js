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

// Dark Mode
let darkMode = localStorage.getItem("darkMode");
if (darkMode === null) {
  localStorage.setItem("darkMode", false);
  darkMode = false;
}

darkMode = JSON.parse(darkMode);

if (darkMode) {
  document.querySelector("body").classList.add("dark");
}

const toggleMode = () => {
  if (!darkMode) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  toggleMenu();
};
