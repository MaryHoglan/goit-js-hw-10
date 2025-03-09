import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const delay = Number(form.delay.value);
    const state = form.state.value;

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                title: "✅ Success",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "❌ Error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        });

    form.reset();
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            state === "fulfilled" ? resolve(delay) : reject(delay);
        }, delay);
    });
}