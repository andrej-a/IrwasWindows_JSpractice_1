"use strict";

export function timer(deadlineString, selector) {
    const timerItems = document.querySelector(selector);
    setTimer(timerItems);
    
    function getDistanceMS() {
        const beetwen = new Date(deadlineString) - new Date();
        return beetwen;
    }

    function setTimer(timer) {
        const resultMS = +getDistanceMS();

        const seconds = Math.floor((resultMS / 1000) % 60),
            minutes = Math.floor((resultMS / 1000 / 60) % 60),
            hours = Math.floor(((resultMS / (1000 * 60 * 60)) % 24)),
            days = Math.floor((resultMS / (1000 * 60 * 60 * 24)));

        timer.innerHTML = `
        <p><h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4></p>
        <div class="container1">
            <div class="numbers1"><div><span id="days">${days < 10 ? '0' + days : days}</span></div><div class="description1">Дней</div></div>
            <div class="numbers1"><div><span id="hours">${hours < 10 ? '0' + hours : hours}</span></div><div class="description1">Часов</div></div>
            <div class="numbers1"><div><span id="minutes">${minutes < 10 ? '0' + minutes : minutes}</span></div><div class="description1">Минут</div></div>
            <div class="numbers1"><div><span id="seconds">${seconds < 10 ? '0' + seconds : seconds}</span></div><div class="description1">Секунд</div></div>      
        </div>
        `;
        
        if (+resultMS < 1000) {
            clearInterval(updateTime);

            timer.innerHTML = `
        <p><h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4></p>
        <div class="container1">
            <div class="numbers1"><div><span id="days">00</span></div><div class="description1">Дней</div></div>
            <div class="numbers1"><div><span id="hours">00</span></div><div class="description1">Часов</div></div>
            <div class="numbers1"><div><span id="minutes">00</span></div><div class="description1">Минут</div></div>
            <div class="numbers1"><div><span id="seconds">00</span></div><div class="description1">Секунд</div></div>      
        </div>
        `;
        }
    }//setTimer

    let updateTime = setInterval(function () {
        setTimer(timerItems);
    }, 1000);

}//timer