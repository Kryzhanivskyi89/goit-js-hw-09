!function(){var o=document.querySelector(".form"),t={firstDelay:o.firstChild.parentNode[0],delayStep:o.firstChild.parentNode[1],amount:o.firstChild.parentNode[2],sudmitBtn:document.querySelector("button")};function e(o,t){var e=Math.random()>.3;return new Promise((function(n,i){setTimeout((function(){e?n({position:o,delay:t}):i({position:o,delay:t})}),t)}))}t.sudmitBtn.addEventListener("click",(function(o){o.preventDefault();for(var n=1;n<=4;n+=1){var i=n,c=t.firstDelay;console.log(c),console.log(i),e(i,c).then((function(o){var t=o.position,e=o.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(e,"ms"))})).catch((function(o){var t=o.position,e=o.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(e,"ms"))})),c+=t.delayStep}}))}();
//# sourceMappingURL=03-promises.9432e8cc.js.map
