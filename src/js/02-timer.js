import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startButton: document.querySelector('button[data-start]'),
  initialElem: document.querySelector('#datetime-picker'),
  clockFace: document.querySelector('.timer'),
}

const initialDate = flatpickr(refs.initialElem, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  }
});

const timer = {
  intervalId:null,
  isActive:false,
  start() {
    const targetTime = initialDate;
    const startTime = new Date;
    if (this.isActive) {
      return;
    };    
    this.isActive = true;    
    this.intervalId = setInterval(() => {     
      const startTime = new Date;      
      const deltaTime = targetTime.selectedDates[0] - startTime;
      const time = convertMs(deltaTime);
      updateClockFace(time)      
    }, 1000);
    if (targetTime.selectedDates[0] <= startTime) {
       clearInterval(this.intervalId);
      this.isActive = false;
      return window.alert("Please choose a date in the future")
    };    
    const deltaTime = targetTime.selectedDates[0] - startTime;
    function stopInterval() {
      if ( deltaTime < 0) {
        clearInterval(this.intervalId);        
        this.isActive = false;
      };
    };     
    stopInterval();
  }, 
};

refs.startButton.addEventListener('click', () => {
  timer.start()
  });

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.clockFace.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}