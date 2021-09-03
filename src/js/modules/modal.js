"use strict";
export function modalWindow({buttonOpenSelectorItem, modalSelectorItem, buttonCloseSelectorItem, timerNumber}) {

const buttonsPopup = document.querySelectorAll(buttonOpenSelectorItem);
const modalWindow = document.querySelector(modalSelectorItem);
const parentModalWindow = document.querySelector(modalSelectorItem);
let timer = null;

openModalScroll();

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


function openModal(element) {
    document.body.style.overflow = "hidden";
    element.style.display = "block";
    element.classList.add("opened");
}

function closeModal(element) {
    document.body.style.overflow = "";
    element.style.display = "none";
}

function openModalScroll() {
    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > (document.documentElement.clientHeight * 2) && !modalWindow.classList.contains("opened")) {
            openModal(modalWindow);
            clearTimeout(timer);
        }
    });

function openModalTimer(){
    timer = setTimeout(() => {
        if ( !modalWindow.classList.contains("opened") ) {
            openModal(modalWindow);
        }
    }, timerNumber);
}

openModalTimer();

}




}//modalWindow

















