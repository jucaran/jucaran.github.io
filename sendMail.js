// import axios from "axios";

const form = document.querySelector("#contact_form");

const sendMail = (e) => {
  e.preventDefault();
  console.log(e);
};

form.addEventListener("submit", sendMail);
