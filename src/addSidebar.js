export function addSidebar() {
    let content = document.getElementById("content");
    let sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    let home = document.createElement("button");
    let menu = document.createElement("button");
    let contact = document.createElement("button");

    home.setAttribute("id", "home");
    menu.setAttribute("id", "menu");
    contact.setAttribute("id", "contact");

    home.append("HOME");
    menu.append("MENU");
    contact.append("CONTACT");

    content.append(sidebar);
    sidebar.append(home, menu, contact);
}