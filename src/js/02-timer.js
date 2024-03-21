import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const dataStart = document.querySelector('[data-start]');
dataStart.disabled = true;

let dateNow;
let dateStart;
let difference;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateNow = new Date();
    dateStart = selectedDates[0];
    difference = dateStart - dateNow;
    if (difference <= 0) {
      return alert('Please choose a date in the future');
    }
    if (difference > 0) {
      convertMs(difference);
      dataStart.disabled = false;
    }
  },
};
flatpickr(inputRef, options);

dataStart.addEventListener('click', onButtonStart);

function onButtonStart() {
  if (dateStart > dateNow) {
    timer = setInterval(() => {
      convertMs((difference -= 1000));
      if (difference <= 999) {
        clearInterval(timer);
      }
    }, 1000);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  //   console.log(days, hours, minutes, seconds);

  dataDays.textContent = days < 10 ? `0${days}` : days;
  dataHours.textContent = hours < 10 ? `0${hours}` : hours;
  dataMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
  dataSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
