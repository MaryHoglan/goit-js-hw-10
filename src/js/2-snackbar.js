import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
    position: 'topRight',  
    timeout: 5000,         
    closeOnEscape: true,  
    progressBar: true,     
    theme: 'dark',        
    transitionIn: 'fadeIn', 
    transitionOut: 'fadeOut', 
    pauseOnHover: true,
    balloon: true,
    icon: 'fa fa-info-circle',
});




document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const delay = Number(form.elements.delay.value);
        const state = form.elements.state.value;

      

   

        new Promise((resolve, reject) => {
            setTimeout(() => {
                state === "fulfilled" ? resolve(delay) : reject(delay);
            }, delay);
        })
        .then((delay) => {
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay}ms`,
            });
        });
    });
});
