!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStart.addEventListener("click",(function(){if(o)return;o=!0,t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval(e,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(n),document.body.style.backgroundColor="white",o=!1}));var n=null,o=!1;function e(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));return document.body.style.backgroundColor=t,o}}();
//# sourceMappingURL=01-color-switcher.559bcfeb.js.map
