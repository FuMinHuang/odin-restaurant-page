export function addMenuDetails() {
    let bodyContent = document.querySelector(".bodyContent");

    let menuBox = document.createElement("div");
    menuBox.setAttribute("class", "menuBox");

    let menu = document.createElement("div");
    menu.setAttribute("class", "menu");

    let menuHeader = document.createElement("div");
    menuHeader.setAttribute("class", "menuHeader");
    menuHeader.append("FRESH SEAFOOD, PASTA & MARY'S FREE-RANGE CHICKEN");


    menu.append(menuHeader);
    menuBox.append(menu);
    bodyContent.append(menuBox);
}