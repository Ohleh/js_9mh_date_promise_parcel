const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let startInterval;

const onButtonStart = () => {
  buttonStart.disabled = true;
  startInterval = setInterval(() => {
    bodyRef.style.background = `${getRandomHexColor()}`;
  }, 1000);
};

const onButtonStop = () => {
  clearInterval(startInterval);
  buttonStart.disabled = false;
};

buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
