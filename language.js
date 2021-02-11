const texts = {
  es: {
    navbar: ["Inicio", "Descargar CV", "Mi trabajo", "Contactame!"],
    contactBtn: "Escríbeme!",
    about:
      "Desde que soy muy chico siempre me gusto jugar creando cosas. Empecé a usar Photoshop cuando tenía 13 y cree mi primer web a los 16. Me apasiona la tecnología y las oportunidades que esta brinda a nuestra sociedad. También me encanta hacer música, sacar fotos y dibujar.",
    cta: ["DESCARGAR CV", "MIRÁ MI TRABAJO"],
    works: [
      "Tienda de cremas faciales, velas e indumentaria. Diseño del branding y desarrollo web responsive.",
      "Tienda de articulos musicales. Diseño del branding, desarrollo front-end en React y desarrollo back-end en nodeJS.",
      "Proyecto personal para familiarizarme con el flujo en React. Secuenciador de beats dinámico. Manejo de pulso, tiempos y sonidos.",
    ],
  },
  en: {
    navbar: ["Home", "Resume", "Mi work", "Contact me!"],
    contactBtn: "Get in touch!",
    about:
      "Since i was a little kid I always liked to play around creating things. I began to use Photoshop when I was 13 years old and made my first website with HTML and CSS when I was 15 years old. Then I started learning Javascript and now I have experience with React, Redux, NodeJS, PostgreSQL and other technologies. I also love making music, shooting photos and drawing.",
    cta: ["DOWNLOAD RESUME", "CHECK MY WORK"],
    works: [
      "Tienda de cremas faciales, velas e indumentaria. Diseño del branding y desarrollo web responsive.",
      "Tienda de articulos musicales. Diseño del branding, desarrollo front-end en React y desarrollo back-end en nodeJS.",
      "Proyecto personal para familiarizarme con el flujo en React. Secuenciador de beats dinámico. Manejo de pulso, tiempos y sonidos.",
    ],
  },
};

const page = window.location.pathname.split("/").pop();
const lang = window.navigator.language || window.navigator.browserLanguage;
let spanish = localStorage.getItem("spanish");
if (!spanish) {
  localStorage.setItem("spanish", lang.includes("es"));
}
spanish = JSON.parse(spanish);

const switcher = document.querySelector("#language");

const getTexts = (spanish) => {
  switch (page) {
    case "index.html":
      const about = document.querySelector("p");
      const cta = document.querySelectorAll(".cta");
      const contactBtn = document.querySelector(".btn_text");
      about.innerText = texts[spanish ? "es" : "en"].about;
      cta[0].innerText = texts[spanish ? "es" : "en"].cta[0];
      cta[1].innerText = texts[spanish ? "es" : "en"].cta[1];
      contactBtn.innerText = texts[spanish ? "es" : "en"].contactBtn;
    // case "mywork.html":
    //   const works = document.querySelectorAll()
  }

  const nav = document.querySelectorAll(".item_txt");

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
