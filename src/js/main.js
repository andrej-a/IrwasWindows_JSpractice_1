import "./slider";
import {modalWindow} from "./modules/modal";

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



});//window
