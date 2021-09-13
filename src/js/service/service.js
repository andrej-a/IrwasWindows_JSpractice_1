"use strict";
import {calcScroll} from "../modules/modal";

export const postDataFormToServer = async function(url, targetBody, message, value) {
    message.innerText = value;
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: targetBody
    });

    return await result.json();
};

export function closeModal(element) {
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
    element.style.display = "none";
}


export function openModal(element) {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${calcScroll()}px`;
    element.style.display = "block";
    element.classList.add("opened");
}