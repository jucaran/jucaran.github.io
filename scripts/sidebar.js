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

  if (window.location.pathname.split("/").pop() === "mywork.html") {
    const gridItems = document.querySelectorAll(".work_item");
    const [activeItem] = [...gridItems].filter((el) =>
      el.classList.contains("active")
    );
    const [, activePosition] = activeItem && activeItem.classList;

    if (activePosition) {
      const [workLogoLight, workLogoDark] = document.querySelectorAll(
        `.item_logo.${activePosition}`
      );
      workLogoLight.style.opacity = darkMode ? 0 : 1;
      workLogoDark.style.opacity = darkMode ? 1 : 0;
    }
  }

  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  menuOpen && toggleMenu();
};
