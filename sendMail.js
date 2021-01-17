const body = document.querySelector("body");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".form_input");
const result = document.querySelector(".api_response");

let mailSending = false;

const sendMail = async (e) => {
  e.preventDefault();
  let formData = {};
  body.classList.remove("loaded");

  inputs.forEach((e) => {
    formData[e.name] = e.value;
  });

  const response = await fetch("https://jucaran-api.herokuapp.com/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    body.classList.add("loaded");
    result.innerText = "Thank you, your message was delivered!";
    form.style.display = "none";
  } else {
    body.classList.add("loaded");
    result.innerText = "Something went wrong :(";
    form.style.display = "none";
  }
};

form.addEventListener("submit", sendMail);
