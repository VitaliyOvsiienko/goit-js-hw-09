function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const DELAY = 1000;
const stopBtn = document.querySelector("[data-stop]");
const startBtn =  document.querySelector("[data-start]");
let changeColor = 0;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
    startBtn.disabled = true;
    changeColor = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
}

function stopColorChange() {
    startBtn.disabled = false;
    clearInterval(changeColor)
}