import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as d,f as l}from"./assets/vendor-BbbuE1sJ.js";d.settings({position:"topRight",timeout:5e3,closeOnEscape:!0,progressBar:!0,theme:"dark",transitionIn:"fadeIn",transitionOut:"fadeOut",pauseOnHover:!0,balloon:!0});const i=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");n.disabled=!0;const t={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let s,u;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){u=e[0],u<new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};l(i,m);function f(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%864e5%36e5/6e4),seconds:Math.floor(e%864e5%36e5%6e4/1e3)}}function r(e){return String(e).padStart(2,"0")}function c(){const a=u-new Date;if(a<=0){clearInterval(s),d.success({title:"Done",message:"Time's up!"}),n.disabled=!0,i.disabled=!1,t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00";return}const o=f(a);t.days.textContent=r(o.days),t.hours.textContent=r(o.hours),t.minutes.textContent=r(o.minutes),t.seconds.textContent=r(o.seconds)}n.onclick=function(){s&&clearInterval(s),i.disabled=!0,n.disabled=!0,c(),s=setInterval(c,1e3)};
//# sourceMappingURL=1-timer.js.map
