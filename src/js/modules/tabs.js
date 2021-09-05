"use strict";
const clientOreder = {
    "Выбор рамы": null,
};

export function tabs({blockSelector, contentSelector, classActiveSelector, targetActiveClass}) {
const blocks = document.querySelectorAll(blockSelector);
const content = document.querySelectorAll(contentSelector);

    blocks.forEach((elem, i) => {
        elem.addEventListener("click", (event) => {
            if (event.target.matches("a") || event.target.matches("img")) {
                event.preventDefault();
                setActiveClass(targetActiveClass, i);
                toggleContent(i);
                clientOreder["Выбор рамы"] = ( blocks[i].innerText.replace(/\n/gi, " ") );
            }
        });
    });

    function setActiveClass(array, i = 0) {
        array.forEach((item) => {
            item.classList.remove(classActiveSelector);
        });
        array[i].classList.add(classActiveSelector);
    } 

    function toggleContent(i = 0) {
        content.forEach((e) => {
            e.style.display = "none";
        });
        content[i].style.display = "block";
    }

}//tabs