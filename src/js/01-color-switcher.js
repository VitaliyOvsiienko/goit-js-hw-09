function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const DELAY = 1000;

const refs = {
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
}

let changeColor = 0;

refs.btnStart.addEventListener('click', startColorChange);
refs.btnStop.addEventListener('click', stopColorChange);

function startColorChange() {
    refs.btnStart.disabled = true;
    changeColor = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
}

function stopColorChange() {
    refs.btnStart.disabled = false;
    clearInterval(changeColor)
}
