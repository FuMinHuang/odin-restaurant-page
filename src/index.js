import { addHeader } from "./addHeader";
import { addSidebar} from "./addSidebar";
import { addBodyContent } from "./addBodyContent";

import { homePageLoad } from "./home";
import { menuPageLoad } from "./menu";

function initalPageLoad() {
    addHeader();
    addSidebar();
    addBodyContent();
};

initalPageLoad();

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", function() {homePageLoad()});

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", function() {menuPageLoad()});

console.log("Test");