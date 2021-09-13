"use strict";

import {closeModal, openModal} from "../service/service";

export function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollWidth;
}

export function modalWindow({buttonOpenSelectorItem, modalSelectorItem, buttonCloseSelectorItem, timerNumber}) {

const buttonsPopup = document.querySelectorAll(buttonOpenSelectorItem);
const modalWindow = document.querySelector(modalSelectorItem);
const parentModalWindow = document.querySelector(modalSelectorItem);
let timer = null;

openModalScroll();
openModalTimer();


buttonsPopup.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();

        openModal(modalWindow);
    } );
});

parentModalWindow.addEventListener("click", (e) => {
    if (e.target.matches(modalSelectorItem) || e.target.matches(buttonCloseSelectorItem) ) {
        closeModal(modalWindow);
    }
});

function openModalScroll() {
    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > (document.documentElement.clientHeight * 2) && !modalWindow.classList.contains("opened")) {
            openModal(modalWindow);
            clearTimeout(timer);
        }
    });
}

function openModalTimer(){
    timer = setTimeout(() => {
        if ( !modalWindow.classList.contains("opened") ) {
            openModal(modalWindow);
        }
    }, timerNumber);
}

}//modalWindow

















