const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  body:document.querySelector("body"),
};

const changeColor = {
  intervalId: null,
  isActive: false,
           
  start() {
    // if (isActive) {
    //   return;
    // };
    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
  },

  stop() {
    clearInterval(this.intervalId); 
    this.isActive = false;
  }

}
  
refs.startButton.addEventListener('click', () => {  
  changeColor.start();  
});

 refs.stopButton.addEventListener('click', () => {  
  changeColor.stop();  
});

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// refs.startButton.addEventListener('click', changeColor);

// function getRandomHexColor() {  
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// let intervalId = null;
// function changeColor() {
  
//   intervalId = setInterval(() => {
//       refs.body.style.backgroundColor = getRandomHexColor(); 
//     }, 1000)
// }
      
// refs.stopButton.addEventListener('click', () => {  
//   clearInterval(intervalId);  
// });
