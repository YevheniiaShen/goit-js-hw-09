!function(){var t,e=document.querySelector("#start-btn"),n=document.querySelector("#stop-btn");e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.b0088059.js.map
