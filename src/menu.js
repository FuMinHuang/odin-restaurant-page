import { addMenuHero } from "./addMenuHero";
import { addMenuDetails } from "./addMenuDetails";

export function menuPageLoad() {
    let bodyContent = document.querySelector(".bodyContent");

    while (bodyContent.firstChild) {
        bodyContent.removeChild(bodyContent.firstChild);
    };

    addMenuHero();
    addMenuDetails();
};