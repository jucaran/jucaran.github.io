const canvas = document.getElementById("canvas");
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

canvas.width = pageWidth;
canvas.height = pageHeight;
canvas.style.zIndex = "-10";

console.log(canvas.width);

const ctx = canvas.getContext("2d");

const circle1 = {
  x: canvas.height / 10 + 20,
  y: 200,
  size: canvas.height / 10,
  dx: canvas.width / 250,
  dy: canvas.width / 300,
  // dx: 5,
  // dy: 4,
};

const circle2 = {
  x: canvas.width - canvas.height / 15,
  y: canvas.height / 15 + 50,
  size: canvas.height / 15,
  dx: (canvas.width / 250) * -1,
  dy: (canvas.width / 300) * -1,
  // dx: -5,
  // dy: -4,
};

function drawCircles() {
  ctx.beginPath();
  ctx.arc(circle1.x, circle1.y, circle1.size, 0, Math.PI * 2);
  ctx.fillStyle = "#e36571";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(circle2.x, circle2.y, circle2.size, 0, Math.PI * 2);
  ctx.fillStyle = "#8edbd8";
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircles();

  // change position
  circle1.x += circle1.dx;
  circle1.y += circle1.dy;
  circle2.x += circle2.dx;
  circle2.y += circle2.dy;

  // Detect side walls for each circle
  if (circle1.x + circle1.size > canvas.width || circle1.x - circle1.size < 0) {
    circle1.dx *= -1;
  }
  if (circle2.x + circle2.size > canvas.width || circle2.x - circle2.size < 0) {
    circle2.dx *= -1;
  }

  // Detect top and bottom walls for each circle
  if (
    circle1.y + circle1.size > canvas.height ||
    circle1.y - circle1.size < 0
  ) {
    circle1.dy *= -1;
  }
  if (
    circle2.y + circle2.size > canvas.height ||
    circle2.y - circle2.size < 0
  ) {
    circle2.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();
