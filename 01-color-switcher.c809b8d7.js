!function(){var t=document.querySelector("[data-stop]"),e=document.querySelector("[data-start]"),n=0;e.addEventListener("click",(function(){e.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.c809b8d7.js.map