!function(){var t=document.querySelector(".form"),o={firstDelay:t.firstChild.parentNode[0],delayStep:t.firstChild.parentNode[1],amount:t.firstChild.parentNode[2],sudmitBtn:document.querySelector("button")};function e(t,o){Math.random();setTimeout((function(){t={position:t,delay:o}}),o)}o.sudmitBtn.addEventListener("click",(function(){for(var t=1;t<=o.amount;t+=1){e(t,o.firstDelay+=o.delayStep).then((function(t){var o=t.position,e=t.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(e,"ms"))})).catch((function(t){var o=t.position,e=t.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(e,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.4ac9b58c.js.map
