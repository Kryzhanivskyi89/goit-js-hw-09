const form = document.querySelector(".form");
const refs = {
  firstDelay: form.firstChild.parentNode[0],
  delayStep: form.firstChild.parentNode[1],
  amount: form.firstChild.parentNode[2],  
  sudmitBtn: document.querySelector("button")
};

refs.sudmitBtn.addEventListener('click', () => {  
  for (let i = 1; i <= refs.amount; i += 1) {  
    let position = i;
    let delay = refs.firstDelay += refs.delayStep;
      createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });  
  };  
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
     if (shouldResolve) {
       position = { position, delay };
  } else {
       position = { position, delay };
  };
  }, delay); 
};




// console.log()
// for (let i = 1; i <= 4; i += 1) {  
//   let positionObject = {
//   position: `${i}`,
//   delay: `${refs.firstDelay += refs.delayStep}`,
//   };  
//   console.log(positionObject);
  
// //   };
// console.log()
  
// const position = () => {
//   for (let i = 1; i <= refs.amount; i += 1) {  
//   let positionObject = {
//   position: `${i}`,
//   delay: `${refs.firstDelay, refs.firstDelay += refs.delayStep}`,
//   };  
//   console.log(positionObject);  
//   };  
// };
