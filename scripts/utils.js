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
const layout = [document.querySelector("body"), document.querySelector(".background")];

if (darkMode) {
  layout.forEach(x => (x ? x.classList.add("dark") : null));
}

const toggleMode = () => {
  if (!darkMode) {
    layout.forEach(x => (x ? x.classList.add("dark") : null));
  } else {
    layout.forEach(x => (x ? x.classList.remove("dark") : null));
  }

  if (window.location.pathname.split("/").pop() === "mywork.html") {
    const gridItems = document.querySelectorAll(".work_item");
    const [activeItem] = [...gridItems].filter(el => el.classList.contains("active"));
    const [, activePosition] = activeItem && activeItem.classList;

    if (activePosition) {
      const [workLogoLight, workLogoDark] = document.querySelectorAll(`.item_logo.${activePosition}`);
      workLogoLight.style.opacity = darkMode ? 0 : 1;
      workLogoDark.style.opacity = darkMode ? 1 : 0;
    }
  }

  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  menuOpen && toggleMenu();
};
