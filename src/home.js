import { addHero} from "./addHero";
import { addDescription1} from "./addDescription1";
import { addDescription2} from "./addDescription2";

export function homePageLoad() {
    let bodyContent = document.querySelector(".bodyContent");

    while (bodyContent.firstChild) {
        bodyContent.removeChild(bodyContent.firstChild);
    };
    
    if (bodyContent.innerHTML === "") {
        addHero();
        addDescription1();
        addDescription2();
    }
}