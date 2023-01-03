import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysField: document.querySelector('span[data-days]'),
  hoursField: document.querySelector('span[data-hours]'),
  minutesField: document.querySelector('span[data-minutes]'),
  secondsField: document.querySelector('span[data-seconds]'),
};

makeDisabledBtn();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] < currentDate) {
      makeDisabledBtn();
      alert('Please choose a date in the future');
      return;
    }
    takeOfDisabledBtn();
    const selectedTime = selectedDates[0].getTime();

    refs.startBtn.addEventListener('click', onStartBtnClick(selectedTime));
  },
};

function onStartBtnClick(selectedTime) {
  const inervalId = setInterval(() => {
    const currentTime = Date.now();
    referenceTime = currentTime - selectedTime;

    const { days, hours, minutes, seconds } = convertMs(referenceTime * -1);

    refs.daysField.textContent = days;
    refs.hoursField.textContent = hours;
    refs.minutesField.textContent = minutes;
    refs.secondsField.textContent = seconds;
    if ((referenceTime = 0)) {
      clearInterval(intervalId);
    }
  }, 1000);
}

const fp = flatpickr(refs.input, options);

function makeDisabledBtn() {
  refs.startBtn.disabled = true;
}
function takeOfDisabledBtn() {
  refs.startBtn.disabled = false;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
