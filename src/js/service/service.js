"use strict";

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
    element.style.display = "none";
}