const texts = {
  es: {
    navbar: ["Inicio", "Descargar CV", "Mi trabajo", "Contactame!"],
    contactBtn: "Escríbeme!",
    about:
      "Desde que era muy chico siempre me gusto jugar creando cosas. Empecé a usar Photoshop cuando tenía 13 y cree mi primer web con HTML y CSS cuando tenia 15. Después empecé a aprender Javascript y hoy tengo experiencia con React, Redux, NodeJS y PostgreSQL, entre otras tecnologías. También me encanta hacer música, sacar fotos y dibujar.",
    cta: ["CURRICULUM VITAE", "MIRÁ MI TRABAJO"],
    works: [
      "Tienda de cremas faciales, velas e indumentaria. Diseño del branding y desarrollo web responsive.",
      "Tienda de articulos musicales. Diseño del branding, desarrollo front-end en React y desarrollo back-end en nodeJS.",
      "Proyecto personal para familiarizarme con el flujo en React. Secuenciador de beats dinámico. Manejo de pulso, tiempos y sonidos.",
    ],
    contactLabels: ["Nombre:", "Email:", "Mensaje:"],
    contactPlaceholders: ["Su nombre...", "Su email...", "Su mensaje..."],
    contactTitle: "Pongamonos en contacto!",
    contactSubmit: "Enviar!",
    contactSending: "Tu mensaje está siendo enviado!",
  },
  en: {
    navbar: ["Home", "My resume", "My work", "Contact me!"],
    contactBtn: "Get in touch!",
    about:
      "Since i was a little kid I always liked to play around creating things. I began to use Photoshop when I was 13 years old and made my first website with HTML and CSS when I was 15 years old. Then I started learning Javascript and now I have experience with React, Redux, NodeJS, PostgreSQL and other technologies. I also love making music, shooting photos and drawing.",
    cta: ["CHECK MY RESUME", "CHECK MY WORK"],
    works: [
      "Cosmetics, creams, candles and clothing store. I've worked in the branding design and in the responsive web development.",
      "Music instruments and merch web store. I've worked in the branding design, front-end development with React and back-end development with NodeJS.",
      "Personal proyect to get used to React's flow. Dinamic beat sequencer. Pulse, times and sounds control.",
    ],
    contactLabels: ["Name:", "Email:", "Message:"],
    contactPlaceholders: ["Your name...", "Your email...", "Your message..."],
    contactTitle: "Let's get in touch!",
    contactSubmit: "Send!",
    contactSending: "Your message is being delivered!",
  },
};

const page = window.location.pathname.split("/").pop();
const lang = window.navigator.language || window.navigator.browserLanguage;
const switcher = document.querySelector("#language");
let spanish = localStorage.getItem("spanish");
if (!spanish) {
  localStorage.setItem("spanish", lang.includes("es"));
}
spanish = JSON.parse(spanish);

const getTexts = (spanish) => {
  switch (page) {
    default:
      const about = document.querySelector("p");
      const cta = document.querySelectorAll(".cta");
      const contactBtn = document.querySelector(".btn_text");
      about.innerText = texts[spanish ? "es" : "en"].about;
      cta[0].innerText = texts[spanish ? "es" : "en"].cta[0];
      cta[1].innerText = texts[spanish ? "es" : "en"].cta[1];
      contactBtn.innerText = texts[spanish ? "es" : "en"].contactBtn;
      break;

    case "mywork.html":
      const works = document.querySelectorAll(".work_description");
      works.forEach(
        (item, i) => (item.innerText = texts[spanish ? "es" : "en"].works[i])
      );
      break;

    case "contact.html":
      const title = document.querySelector("#form_title");
      const labels = document.querySelectorAll("label");
      const inputs = document.querySelectorAll(".form_input");
      const submitBtn = document.querySelector(".submit_btn");
      const sending = document.querySelector("#form_sending");
      title.innerText = texts[spanish ? "es" : "en"].contactTitle;
      labels.forEach(
        (item, i) =>
          (item.innerText = texts[spanish ? "es" : "en"].contactLabels[i])
      );
      inputs.forEach(
        (item, i) =>
          (item.placeholder =
            texts[spanish ? "es" : "en"].contactPlaceholders[i])
      );
      submitBtn.innerText = texts[spanish ? "es" : "en"].contactSubmit;
      sending.innerText = texts[spanish ? "es" : "en"].contactSending;
      break;
  }

  const nav = document.querySelectorAll(".item_txt");
  const resumeLinks = document.querySelectorAll(".resume_link");

  resumeLinks.forEach(
    (el) =>
      (el.href = `Juan_Castro_Arancibia_CV${spanish ? "es.pdf" : "en.pdf"}`)
  );

  nav.forEach((el, i) => {
    el.innerText = texts[spanish ? "es" : "en"].navbar[i];
  });
};

switcher.addEventListener("click", () => {
  localStorage.setItem("spanish", !spanish);
  spanish = !spanish;
  getTexts(spanish);
});

getTexts(spanish);
