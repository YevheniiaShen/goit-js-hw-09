const t={body:document.querySelector("body"),startrBtn:document.querySelector("[data-start]"),stoptrBtn:document.querySelector("[data-stop]")};let r=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startrBtn.addEventListener("click",(function(){t.body.style.backgroundColor=e(),r=setInterval((()=>{t.body.style.backgroundColor=e()}),1e3),t.startrBtn.setAttribute("disabled",!0)})),t.stoptrBtn.addEventListener("click",(function(){clearInterval(r),t.startrBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.e3d449bb.js.map
