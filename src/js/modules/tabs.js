"use strict";

export function tabs({blockSelector, contentSelector, classActiveSelector, targetActiveClass}) {
const blocks = document.querySelectorAll(blockSelector);
const content = document.querySelectorAll(contentSelector);

setActiveClass(targetActiveClass);
toggleContent(content);

    blocks.forEach((elem, i) => {
        elem.addEventListener("click", (event) => {
            if (event.target.matches("a") || event.target.matches("img") || event.target.matches("div")) {
                event.preventDefault();
                setActiveClass(targetActiveClass, i);
                toggleContent(content, i);
            }
        });
    });

    function setActiveClass(array, i = 0) {
        array.forEach((item) => {
            item.classList.remove(classActiveSelector);
        });
        array[i].classList.add(classActiveSelector);
    } 

    function toggleContent(array, i = 0) {
        array.forEach((e) => {
            e.style.display = "none";
        });
        array[i].style.display = "block";
    }

}//tabs