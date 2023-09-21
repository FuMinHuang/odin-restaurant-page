import { addMenuHero } from "./addMenuHero";

export function menuPageLoad() {
    let bodyContent = document.querySelector(".bodyContent");

    while (bodyContent.firstChild) {
        bodyContent.removeChild(bodyContent.firstChild);
    };

    addMenuHero();
};