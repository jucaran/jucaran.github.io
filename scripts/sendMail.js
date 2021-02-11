const form = document.querySelector("form");
const inputs = document.querySelectorAll(".form_input");
const result = document.querySelector(".api_response");
const mailLoading = document.querySelector(".mail_loading");

const sendMail = async (e) => {
  e.preventDefault();
  let formData = {};
  form.style.display = "none";
  mailLoading.classList.add("active");

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
    mailLoading.classList.remove("active");
    result.innerText = spanish
      ? "Gracias, tu mensaje fue enviado correctamente!"
      : "Thank You, Your message was delivered succesfully!";
  } else {
    mailLoading.classList.remove("active");
    result.innerText = spanish
      ? "Algo anduvo mal :("
      : "Something went wrong :(";
  }
};

form.addEventListener("submit", sendMail);
