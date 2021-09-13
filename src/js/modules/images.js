"use strict";
import { calcScroll } from "./modal";

export function images(parentSelector, styleAnimation, styleChild, styleWrapper) {
    const imgPopup = document.createElement("div");
    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    const bigIMG = document.createElement("img");
    bigIMG.classList.add(styleAnimation);
    imgPopup.appendChild(bigIMG);

    const parentIMG = document.querySelector(parentSelector);
    parentIMG.appendChild(imgPopup);

    parentIMG.addEventListener("click", (event) => {
        event.preventDefault();
         if(event.target && event.target.classList.contains(styleChild)) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${calcScroll()}px`;
            imgPopup.classList.add(styleWrapper);
             bigIMG.src = event.target.parentElement.href;
             bigIMG.style.width = "600px";
             bigIMG.style.height = "500px";
             imgPopup.style.display = "flex";
         }

         if(event.target && event.target.classList.contains(styleWrapper)) {
            document.body.style.marginRight = `0px`;
            imgPopup.classList.remove(styleWrapper);
            document.body.style.overflow = "";
            bigIMG.src = "";
            imgPopup.style.display = "none";
         }
    });
}//images