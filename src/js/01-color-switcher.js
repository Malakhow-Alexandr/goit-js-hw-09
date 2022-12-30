const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

let intervalId = null;
let isActive = false;

function onStartClick() {
  if (isActive) {
    return;
  }
  isActive = true;

  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    return isActive;
  }, 1000);
}

function onStopClick() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = 'white';
  isActive = false;
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
