"use strict";
import { openModal, closeModal } from "../service/service";
export function calculate() {

    const clientOreder = {
    
    };

    const btnPrice = document.querySelectorAll(".glazing_price_btn");
    
    const popupCalc = document.querySelector(".popup_calc");
    const inputs = popupCalc.querySelectorAll("input");
    const icons = popupCalc.querySelectorAll(".balcon_icons_img");
    const bigIMG = popupCalc.querySelectorAll(".big_img img");
    

    const popupCalcButton = document.querySelector(".popup_calc_button");

    const popupCalcProfile = document.querySelector(".popup_calc_profile");
    const selectProfile = popupCalcProfile.querySelector("select");
    closeModalWithDelegir(popupCalc, ".popup_calc", ".popup_calc_close strong");
    closeModalWithDelegir(popupCalcProfile, ".popup_calc_profile", ".popup_calc_profile_close strong");

    btnPrice.forEach((btn) => {
        btn.addEventListener("click", () => { 
            openModal(popupCalc); 
            toggleIcons(icons, bigIMG);
            
        });
    });

    popupCalcButton.addEventListener("click", () => {
        getSize(inputs);
        //inputs.forEach(input => input.value = "");
        console.log(clientOreder);
        closeModal(popupCalc);
        openModal(popupCalcProfile);
        console.log(selectProfile.options[selectProfile.selectedIndex].text);
        
    });

    function getSize(array) {
        array.forEach((input) => {
                input.addEventListener("input", () => { input.value = input.value.replace(/\D/g, ""); });
            });
        
        clientOreder['Квадратных метров всего:'] = (+array[0].value / 1000) * (+array[1].value / 1000);
    }

    function toggleIcons(arrayIcon, arrayBigIMG) {
        
        if (!popupCalc.classList.contains("closed")) {
            arrayBigIMG[0].style.display = "block";
            arrayBigIMG[0].style.marginLeft = "80px";

            arrayIcon[0].classList.add("do_image_more");
        }
        
        arrayIcon.forEach((icon, i) => {
            icon.style.cursor= "pointer";
            icon.addEventListener("click", () => {
                
                arrayIcon.forEach(e => {
                    e.classList.remove("do_image_more");
                });
                arrayIcon[i].classList.add("do_image_more");


                arrayBigIMG.forEach(big => {
                    big.style.display = "none";
                    big.style.marginLeft = "80px";
                });
                arrayBigIMG[i].style.display = "block";
            });
        });
    }


    function closeModalWithDelegir(modalWindow, parentSelector, childSelector) {
        modalWindow.addEventListener("click", (e) => {
            if (e.target.matches(parentSelector) || e.target.matches(childSelector)) {
                closeModal(modalWindow);
                modalWindow.classList.remove("opened");
                modalWindow.classList.add("closed");            }
        });
    }


}   //calculate