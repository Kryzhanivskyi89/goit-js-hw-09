!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n={intervalId:null,isActive:!1,start:function(){this.isActive=!0,this.intervalId=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)},stop:function(){clearInterval(this.intervalId),this.isActive=!1}};t.startButton.addEventListener("click",(function(){n.start()})),t.stopButton.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=01-color-switcher.e89e30e6.js.map
