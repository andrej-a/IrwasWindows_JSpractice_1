import "./slider";
import {modalWindow} from "./modules/modal";
import {tabs} from "./modules/tabs";
import {forms} from "./modules/forms";
import {calculate} from "./modules/calculate";

window.addEventListener("DOMContentLoaded", () => {
    
    modalWindow( //popupEngineerButton
        {
            buttonOpenSelectorItem: ".popup_engineer_btn",
            modalSelectorItem: ".popup_engineer",
            buttonCloseSelectorItem: ".popup_close strong",

        }
    );

    modalWindow( //backCallButton
        {
            buttonOpenSelectorItem: ".phone_link",
            modalSelectorItem: ".popup",
            buttonCloseSelectorItem: ".popup_close strong",
            timerNumber: 60000,
        }
    );



    tabs({
        blockSelector: ".glazing_block",
        contentSelector: ".glazing_content",
        classActiveSelector: "active",
        targetActiveClass: document.querySelectorAll(".glazing_slider a"),
    });

    tabs({
        blockSelector: ".no_click",
        contentSelector: ".decoration_content > div > div",
        classActiveSelector: "after_click",
        targetActiveClass: document.querySelectorAll(".no_click"),
    });



    forms(".formEngineer", ".form_input");


    calculate();

}); //window
