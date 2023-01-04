import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget;

  for (i = 0; i < Number(amount.value); i += 1) {
    createPromise((i += 1), Number(delay.value), Number(step.value));
  }
}

function createPromise(position, delay, step) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      console.log(' resolve position', position);
    } else {
      console.log('reject');
      console.log(' reject position', position);
      console.log('reject delay', delay);
    }
  });
}
