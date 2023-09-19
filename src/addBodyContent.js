import { addHero} from "./addHero";
import { addDescription1} from "./addDescription1";
import { addDescription2} from "./addDescription2";

export function addBodyContent() {
    let content = document.getElementById("content");
    let bodyContent = document.createElement("div");
    bodyContent.classList.add("bodyContent");

    content.append(bodyContent);
    addHero();
    addDescription1();
    addDescription2();
}