import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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
   
});

const datetimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;
const timerDisplay = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
};

let countdownInterval;
let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate < new Date()) {
            iziToast.error({
                title: "Error",
                message: "Please choose a date in the future",
            });
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },
};

flatpickr(datetimePicker, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
        days: Math.floor(ms / day),
        hours: Math.floor((ms % day) / hour),
        minutes: Math.floor(((ms % day) % hour) / minute),
        seconds: Math.floor((((ms % day) % hour) % minute) / second),
    };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function updateTimer() {
    const now = new Date();
    const diff = userSelectedDate - now;
    
    if (diff <= 0) {
        clearInterval(countdownInterval);
        iziToast.success({
            title: "Done",
            message: "Time's up!",
        });
        startBtn.disabled = true;
        datetimePicker.disabled = false;
        timerDisplay.days.textContent = "00";
        timerDisplay.hours.textContent = "00";
        timerDisplay.minutes.textContent = "00";
        timerDisplay.seconds.textContent = "00";
        return;
    }
    
    const timeLeft = convertMs(diff);
    timerDisplay.days.textContent = addLeadingZero(timeLeft.days);
    timerDisplay.hours.textContent = addLeadingZero(timeLeft.hours);
    timerDisplay.minutes.textContent = addLeadingZero(timeLeft.minutes);
    timerDisplay.seconds.textContent = addLeadingZero(timeLeft.seconds);
}

startBtn.onclick = function () {
    if (countdownInterval) clearInterval(countdownInterval);
    datetimePicker.disabled = true;
    startBtn.disabled = true;
    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
};
