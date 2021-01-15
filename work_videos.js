//----Grid changes functionality
const workItems = document.querySelectorAll(".work_item");
const workItemsHandlers = document.querySelectorAll(".event_handler");
const grid = document.querySelector(".my_work");

const changeLogoColors = (position, isMouseIn) => {
  const [logoLight, logoDark] = document.querySelectorAll(
    `.item_logo.${position}`
  );
  logoLight.style.opacity = isMouseIn ? 0 : 1;
  logoDark.style.opacity = isMouseIn ? 1 : 0;
};

const changeGrid = (e, isMobile) => {
  const [, position] = e.target.className.split(" ");
  if (isMobile) e.preventDefault();

  //Changing the sizes of the workItems
  workItems.forEach((item) => {
    const [, itemPosition] = item.className.split(" ");
    const isMouseIn = itemPosition === position;
    item.className = `work_item ${itemPosition}`;
    item.classList.add(isMouseIn ? "active" : "inactive");
    changeLogoColors(itemPosition, isMouseIn);
  });

  //Disabling event handler when is active
  workItemsHandlers.forEach((handler) => {
    const [, handlerPosition] = handler.className.split(" ");
    const isMouseIn = handlerPosition === position;
    handler.className = `event_handler ${handlerPosition} ${
      isMouseIn ? "active" : "inactive"
    }`;
  });
};

//Adding events listenners
workItemsHandlers.forEach((el) => {
  el.addEventListener("touchstart", (e) => changeGrid(e, true));
  el.addEventListener("mouseenter", changeGrid);
  el.addEventListener("mouseleave", changeGrid);
});

//----Video functionality
const videos = document.querySelectorAll(".work_video");
const videosPreview = document.querySelectorAll(".work_video_preview");
const videoHandler = document.querySelector(".video_controller");
const modalBkg = document.querySelector(".modal_bkg");

let isVideoActive = false;
let activeVideo = null;

const showVideo = (e) => {
  //Check item position
  const [, position] = e.target.className.split(" ");

  //Add active styles
  videoHandler.classList.add("active");
  modalBkg.classList.add("active");
  videos.forEach((el) => {
    if (el.className.split(" ")[1] === position) {
      el.classList.add("active");
      activeVideo = el;
    }
  });

  //Set active variable
  isVideoActive = true;
};

const hideVideo = () => {
  if (isVideoActive) {
    //Remove active styles
    activeVideo.classList.remove("active");
    modalBkg.classList.remove("active");
    videoHandler.classList.remove("active");

    //Pause and reset video
    activeVideo.currentTime = 0;
    activeVideo.pause();

    //Reset active variable
    isVideoActive = false;
    activeVideo = null;
  }
};

const playVideo = () => {
  if (isVideoActive) {
    activeVideo.play();
    videoHandler.classList.remove("active");
  }
};

//Adding events listeners
modalBkg.addEventListener("click", hideVideo);
videoHandler.addEventListener("click", playVideo);
videosPreview.forEach((el) => el.addEventListener("click", showVideo));
window.addEventListener("keydown", (e) =>
  e.key === "Escape" ? hideVideo() : null
);
