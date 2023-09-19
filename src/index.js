function addHeader() {
    let content = document.getElementById("content");
    let header = document.createElement("div");
    header.classList.add("header");

    let headline1 = document.createElement("div");
    let headline2 = document.createElement("div");
    headline1.classList.add("headline1");
    headline2.classList.add("headline2");
    headline1.append("Lakeside Serenity Restaurant - Indulge in Nature's Finest Flavors");
    headline2.append("Welcome to Lakeside Serenity Restaurant, where every meal is a journey into culinary excellence set against the backdrop of breathtaking natural beauty.");

    content.append(header);
    header.append(headline1, headline2);
}

function addSidebar() {
    let content = document.getElementById("content");
    let sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    let menu = document.createElement("div");
    let contact = document.createElement("div");
    menu.classList.add("menu");
    contact.classList.add("contact");
    menu.append("menu");
    contact.append("contact");

    content.append(sidebar);
    sidebar.append(menu, contact);
}

function addHero() {
    let content = document.getElementById("content");
    let hero = document.createElement("div");
    hero.classList.add("hero");

    let img = document.createElement("img");
    img.src = "../src/restaurant.jpg";

    content.append(hero);
    hero.append(img);    
}

function addDescription1() {
    let content = document.getElementById("content");
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

    img1.src = "../src/stars.png";
    img2.src = "../src/shrimp.png";
    img3.src = "../src/wine.png";

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

    content.append(description1);
    description1.append(header, boxContainer);
    boxContainer.append(box1, box2, box3);
    box1.append(img1, box1P1, box1P2);
    box2.append(img2, box2P1, box2P2);
    box3.append(img3, box3P1, box3P2);
}

function addDescription2() {
    let content = document.getElementById("content");
    let description2 = document.createElement("div");
    description2.classList.add("description2");

    let p = document.createElement("p");
    p.append("Our menu is a culinary ode to the region's bountiful treasures. We source the finest ingredients from local artisans, farmers, and fishermen who share our commitment to quality and sustainability. Our talented chefs transform these ingredients with unwavering passion into dishes that are not only delicious but also a visual masterpiece. Each plate is a work of art, a symphony of flavors and textures that will leave a lasting impression on your taste buds and your heart.");

    content.append(description2);
    description2.append(p);
}


addHeader();
addSidebar();
addHero();
addDescription1();
addDescription2();