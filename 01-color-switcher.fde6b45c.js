!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=function(){intervalId=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)},o=function(){clearInterval(intervalId),isActive=!1};t.startButton.addEventListener("click",(function(){n(),t.startButton.setAttribute("disabled","")})),t.stopButton.addEventListener("click",(function(){o(),t.startButton.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.fde6b45c.js.map