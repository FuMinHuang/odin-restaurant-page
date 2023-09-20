export function addDescription1() {
    let bodyContent = document.querySelector(".bodyContent");
    let description1 = document.createElement("div");
    description1.classList.add("description1");
    
    let header = document.createElement("div");
    header.classList.add("header");
    header.append("Proud to champion a tradition of legendary lakeside restaurant dining.");

    let boxContainer = document.createElement("div");
    boxContainer.classList.add("boxContainer");

    let box1 = document.createElement("div");
    let box2 = document.createElement("div");
    let box3 = document.createElement("div");

    box1.classList.add("box");
    box2.classList.add("box");
    box3.classList.add("box");
  
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");

    img1.classList.add("icon");
    img2.classList.add("icon");
    img3.classList.add("icon");

    img1.src = "../src/star-solid.svg";
    img2.src = "../src/shrimp-solid.svg";
    img3.src = "../src/wine-glass-solid.svg";

    let box1P1 = document.createElement("div");
    let box1P2 = document.createElement("div");
    let box2P1 = document.createElement("div");
    let box2P2 = document.createElement("div");
    let box3P1 = document.createElement("div");
    let box3P2 = document.createElement("div");

    box1P1.classList.add("p1");
    box2P1.classList.add("p1");
    box3P1.classList.add("p1");
    box1P2.classList.add("p2");
    box2P2.classList.add("p2");
    box3P2.classList.add("p2");

    box1P1.append("Savor the Ocean");
    box1P2.append("Savor the taste of locally sourced, expertly prepared seafood dishes that melt in your mouth, a true tribute to the lake's bounty.");
    box2P1.append("Farm-to-Table Perfection");
    box2P2.append(" Experience the freshness of our farm-to-table ingredients in every bite, carefully selected to deliver the essence of the season to your plate.");
    box3P1.append("Signature Cocktails");
    box3P2.append("Enjoy handcrafted cocktails created by our skilled mixologists, as you watch the sun dip below the horizon, casting a warm, golden glow over the water.");

    bodyContent.append(description1);
    description1.append(header, boxContainer);
    boxContainer.append(box1, box2, box3);
    box1.append(img1, box1P1, box1P2);
    box2.append(img2, box2P1, box2P2);
    box3.append(img3, box3P1, box3P2);
}