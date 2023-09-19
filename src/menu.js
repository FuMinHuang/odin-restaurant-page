export function menuPageLoad() {
    let bodyContent = document.querySelector(".bodyContent");

    while (bodyContent.firstChild) {
        bodyContent.removeChild(bodyContent.firstChild);
    };
    
    let menuHero = document.createElement("div");
    menuHero.classList.add("menuHero");

    let img = document.createElement("img");
    img.src = "../src/menuhero.jpg";
   
    menuHero.append(img);


    let descriptionBox = document.createElement("div");
    descriptionBox.setAttribute("class", "descriptionBox");

    let descriptionBoxContentLeft = document.createElement("p");
    descriptionBoxContentLeft.setAttribute("class", "descriptionBoxContentLeft");
    descriptionBoxContentLeft.append("Captivating Cuisine by the Lakeside");

    let descriptionBoxContentRight = document.createElement("p");
    descriptionBoxContentRight.setAttribute("class", "descriptionBoxContentRight");
    descriptionBoxContentRight.append("From the land, we offer legendary cuts of beef, meticulously sourced and prepared to perfection. Our menu boasts Specially Aged Prime-Graded Steaks that are a symphony of flavor and tenderness, and our Famous Slow-Roasted Prime Rib is a testament to time-honored tradition.   From the sea, we embrace the freshness of the waters that surround us. Dive into a world of Pacific Swordfish, Scottish Salmon, Northern Alaskan Halibut, Australian Lobster Tail, and New England Diver Scallops. Each dish reflects the purity of the ocean and the artistry of our chefs.")

    descriptionBox.append(descriptionBoxContentLeft, descriptionBoxContentRight);

    bodyContent.append(menuHero, descriptionBox);
};