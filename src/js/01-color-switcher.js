const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  body:document.querySelector("body"),
};

const changeColor = {
  intervalId: null,
  isActive: false,
  start() {
    // isActive = true;
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
  },
  stop() {
    clearInterval(intervalId);
    isActive = false;
  },
};

refs.startButton.addEventListener('click', () => {  
  changeColor.start();  
  refs.startButton.setAttribute('disabled', '');
});

refs.stopButton.addEventListener('click', () => {  
   changeColor.stop();  
   refs.startButton.removeAttribute('disabled', '');
});

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

