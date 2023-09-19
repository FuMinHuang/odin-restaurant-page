export function addHero() {
    let bodyContent = document.querySelector(".bodyContent");
    let hero = document.createElement("div");
    hero.classList.add("hero");

    let img = document.createElement("img");
    img.src = "../src/restaurant.jpg";

    bodyContent.append(hero);
    hero.append(img);    
}