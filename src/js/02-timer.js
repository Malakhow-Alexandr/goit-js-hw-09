import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

refs.startBtn.addEventListener('click', onStartClick);

makeDisabledBtn();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] < currentDate) {
      alert('Please choose a date in the future');
      return;
    }
    takeOfDisabledBtn();
    const timeForTimer = selectedDates[0] - currentDate;
    return timeForTimer;
  },
};

const fp = flatpickr(refs.input, options);

function makeDisabledBtn() {
  refs.startBtn.disabled = true;
}
function takeOfDisabledBtn() {
  refs.startBtn.disabled = false;
}
function onStartClick() {}
