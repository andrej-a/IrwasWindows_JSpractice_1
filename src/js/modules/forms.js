"use strict";
import {postDataFormToServer, closeModal} from "../service/service";

export function forms(formSelector, formInputSelector) {

    const message = {
        done: "Ваша заявка отправлена! Мы обязательно перезвоним вам.",
        waiting: "Запрос отправляется...",
        error: "Произошла ошибка. Пожалуйста, попробуйте снова."
    };

    const formsArray = document.querySelectorAll(formSelector);
    const inputsArray = document.querySelectorAll(formInputSelector);
    formsArray.forEach((elem) => {
        sendForms(elem);
    });

    inputsArray.forEach(input => {
        input.addEventListener("input", (event) => {
            if (event.target.name === "user_phone") {
                event.target.value = event.target.value.replace(/\D/, "");
            }
        });
    });

    function sendForms(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

                document.body.style.overflow = "hidden";
        
                const box = document.createElement("div");
                box.classList.add("status");
                form.appendChild(box);

            const formData = new FormData(form);

            const json = JSON.stringify( Object.fromEntries( formData.entries() ) );

            postDataFormToServer("http://localhost:3000/callingMaster", json, box, message.waiting)
            .then(result => {
                console.log(result);
                box.innerText = `${result.user_name}, спасибо! ${message.done}` ;
            }).catch(() => {
                box.innerText = message.error;
            })
            .finally(() => {
                setTimeout(() => {
                    if (event.target.matches(".buttonFormEngineer")) {
                        closeModal(document.querySelector(".popup_engineer"));
                    } else if (event.target.matches(".buttonForm")) {
                        closeModal(document.querySelector(".popup"));
                    }
                }, 3000);
                resetTimer(form, box);
            });
        });
    }

    const resetTimer = function(resetForm, removeBox) {
        setTimeout(() => {
            resetForm.reset();
            resetForm.removeChild(removeBox);
            document.body.style.overflow = "";
        }, 3000);
    }; 


}   //forms