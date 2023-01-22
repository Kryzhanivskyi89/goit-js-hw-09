const form = document.querySelector(".form");
const refs = {
  firstDelay: form.firstChild.parentNode[0],
  delayStep: form.firstChild.parentNode[1],
  amount: form.firstChild.parentNode[2],  
  sudmitBtn: document.querySelector("button")   
};
refs.sudmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let delay = refs.firstDelay.value; 
  for (let i = 1; i <= refs.amount.value; i += 1) {
    let position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay = Number(delay) + Number(refs.delayStep.value);
  };
});
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({ position, delay });
      } else {
        reject ({ position, delay });
      };
    }, delay);
  });     
};
