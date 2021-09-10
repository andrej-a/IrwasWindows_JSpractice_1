"use strict";
import { openModal, closeModal, postDataFormToServer } from "../service/service";
import {message} from "./forms";

export function calculate() {

    const clientOreder = {};

    const btnPrice = document.querySelectorAll(".glazing_price_btn");
    

    const popupCalc = document.querySelector(".popup_calc");
    const inputs = popupCalc.querySelectorAll("input");
    const icons = popupCalc.querySelectorAll(".balcon_icons_img");
    const bigIMG = popupCalc.querySelectorAll(".big_img img");
    

    const popupCalcButton = document.querySelector(".popup_calc_button");

    
    const popupCalcProfile = document.querySelector(".popup_calc_profile");
    const selectProfile = popupCalcProfile.querySelector("select");
    const checkboxes = popupCalcProfile.querySelectorAll("label > input");


    const popupCalcProfileButton = popupCalcProfile.querySelector(".popup_calc_profile_button");


    const popupCalcEnd = document.querySelector(".popup_calc_end");
    const form = popupCalcEnd.querySelector(".formOreder");

    closeModalWithDelegir(popupCalc, ".popup_calc", ".popup_calc_close strong");
    closeModalWithDelegir(popupCalcProfile, ".popup_calc_profile", ".popup_calc_profile_close strong");
    closeModalWithDelegir(popupCalcEnd, ".popup_calc_end", ".popup_calc_end_close strong");

    btnPrice.forEach((btn) => {     //1
        btn.addEventListener("click", () => { 
            openModal(popupCalc); 
            toggleIcons(icons, bigIMG);

            inputs.forEach((input) => {
                input.addEventListener("input", () => { input.value = input.value.replace(/\D/g, ""); });
            });
            
        });
    });

    popupCalcButton.addEventListener("click", () => {       //2
        getSize(inputs);
        checkboxes[0].defaultChecked = true;
        clientOreder['Вид остекления'] = checkboxes[0].parentElement.innerText.replace(/\s/g, "");
        getChecboxes();
        //inputs.forEach(input => input.value = "");
        closeModal(popupCalc);
        popupCalc.classList.add("closed");
        openModal(popupCalcProfile);
        
    });

    popupCalcProfileButton.addEventListener("click", () => {    //3
        clientOreder['Остекление'] = selectProfile.options[selectProfile.selectedIndex].text;
        closeModal(popupCalcProfile);
        openModal(popupCalcEnd);
    });

        

    form.addEventListener("submit", (event) => {

        event.preventDefault();
        clientOreder['Имя'] = popupCalcEnd.querySelectorAll("input")[0].value;
        clientOreder['Номер телефона'] = popupCalcEnd.querySelectorAll("input")[1].value;

        document.body.style.overflow = "hidden";
    
        const box = document.createElement("div");
        box.classList.add("status");
        form.appendChild(box);

        const json = JSON.stringify(clientOreder);

        postDataFormToServer("http://localhost:3000/orders", json, box, message.waiting)
        .then(result => {
            console.log(result);
            box.innerText = message.done;
        }).catch(() => {
            box.innerText = message.error;
        }).finally(() => {
            setTimeout(() => {
                document.body.style.overflow = "";
                form.removeChild(box);
                form.reset();
                closeModal(popupCalcEnd);
            }, 3000);
        });
    });
        
    function getChecboxes() {
        popupCalcProfile.addEventListener("change", (e) => {
            checkboxes.forEach(ch => {
                ch.checked = false;
            });
            e.target.checked = true;
            clientOreder['Вид остекления'] = e.target.parentElement.innerText;
        });
    }

    function getSize(array) {
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