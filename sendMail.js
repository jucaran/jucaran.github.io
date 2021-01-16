const form = document.querySelector("form");
const inputs = document.querySelectorAll(".form_input");
const result = document.querySelector(".api_response");

const sendMail = async (e) => {
  e.preventDefault();
  let formData = {};

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

  // const final = await response.json();
  // console.log("final", final);
  console.log("response", response);
  console.log("response status", response.ok);

  if (response.ok) {
    result.innerText = "Thank you, your message was delivered!";
    form.style.display = "none";
  } else {
    result.innerText = "Something went wrong :(";
    form.style.display = "none";
  }
};

form.addEventListener("submit", sendMail);
