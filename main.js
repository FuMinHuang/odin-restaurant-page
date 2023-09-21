/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addBodyContent.js":
/*!*******************************!*\
  !*** ./src/addBodyContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBodyContent: () => (/* binding */ addBodyContent)
/* harmony export */ });
/* harmony import */ var _addHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addHero */ "./src/addHero.js");
/* harmony import */ var _addDescription1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDescription1 */ "./src/addDescription1.js");
/* harmony import */ var _addDescription2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDescription2 */ "./src/addDescription2.js");




function addBodyContent() {
    let content = document.getElementById("content");
    let bodyContent = document.createElement("div");
    bodyContent.classList.add("bodyContent");

    content.append(bodyContent);
    (0,_addHero__WEBPACK_IMPORTED_MODULE_0__.addHero)();
    (0,_addDescription1__WEBPACK_IMPORTED_MODULE_1__.addDescription1)();
    (0,_addDescription2__WEBPACK_IMPORTED_MODULE_2__.addDescription2)();
}

/***/ }),

/***/ "./src/addDescription1.js":
/*!********************************!*\
  !*** ./src/addDescription1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDescription1: () => (/* binding */ addDescription1)
/* harmony export */ });
function addDescription1() {
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

/***/ }),

/***/ "./src/addDescription2.js":
/*!********************************!*\
  !*** ./src/addDescription2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDescription2: () => (/* binding */ addDescription2)
/* harmony export */ });
function addDescription2() {
    let bodyContent = document.querySelector(".bodyContent");
    let description2 = document.createElement("div");
    description2.classList.add("description2");

    let p = document.createElement("p");
    p.append("Our menu is a culinary ode to the region's bountiful treasures. We source the finest ingredients from local artisans, farmers, and fishermen who share our commitment to quality and sustainability. Our talented chefs transform these ingredients with unwavering passion into dishes that are not only delicious but also a visual masterpiece. Each plate is a work of art, a symphony of flavors and textures that will leave a lasting impression on your taste buds and your heart.");

    bodyContent.append(description2);
    description2.append(p);
}

/***/ }),

/***/ "./src/addHeader.js":
/*!**************************!*\
  !*** ./src/addHeader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHeader: () => (/* binding */ addHeader)
/* harmony export */ });
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

/***/ }),

/***/ "./src/addHero.js":
/*!************************!*\
  !*** ./src/addHero.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHero: () => (/* binding */ addHero)
/* harmony export */ });
function addHero() {
    let bodyContent = document.querySelector(".bodyContent");
    let hero = document.createElement("div");
    hero.classList.add("hero");

    let img = document.createElement("img");
    img.src = "../src/restaurant.jpg";

    bodyContent.append(hero);
    hero.append(img);    
}

/***/ }),

/***/ "./src/addMenuHero.js":
/*!****************************!*\
  !*** ./src/addMenuHero.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMenuHero: () => (/* binding */ addMenuHero)
/* harmony export */ });
function addMenuHero() {
    let bodyContent = document.querySelector(".bodyContent");

    // while (bodyContent.firstChild) {
    //     bodyContent.removeChild(bodyContent.firstChild);
    // };   
    
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
}

/***/ }),

/***/ "./src/addSidebar.js":
/*!***************************!*\
  !*** ./src/addSidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSidebar: () => (/* binding */ addSidebar)
/* harmony export */ });
function addSidebar() {
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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad)
/* harmony export */ });
/* harmony import */ var _addHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addHero */ "./src/addHero.js");
/* harmony import */ var _addDescription1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDescription1 */ "./src/addDescription1.js");
/* harmony import */ var _addDescription2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDescription2 */ "./src/addDescription2.js");




function homePageLoad() {
    let bodyContent = document.querySelector(".bodyContent");

    while (bodyContent.firstChild) {
        bodyContent.removeChild(bodyContent.firstChild);
    };
    
    if (bodyContent.innerHTML === "") {
        (0,_addHero__WEBPACK_IMPORTED_MODULE_0__.addHero)();
        (0,_addDescription1__WEBPACK_IMPORTED_MODULE_1__.addDescription1)();
        (0,_addDescription2__WEBPACK_IMPORTED_MODULE_2__.addDescription2)();
    }
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)
/* harmony export */ });
/* harmony import */ var _addMenuHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMenuHero */ "./src/addMenuHero.js");


function menuPageLoad() {
    let bodyContent = document.querySelector(".bodyContent");

    while (bodyContent.firstChild) {
        bodyContent.removeChild(bodyContent.firstChild);
    };

    (0,_addMenuHero__WEBPACK_IMPORTED_MODULE_0__.addMenuHero)();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addHeader */ "./src/addHeader.js");
/* harmony import */ var _addSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addSidebar */ "./src/addSidebar.js");
/* harmony import */ var _addBodyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addBodyContent */ "./src/addBodyContent.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







function initalPageLoad() {
    (0,_addHeader__WEBPACK_IMPORTED_MODULE_0__.addHeader)();
    (0,_addSidebar__WEBPACK_IMPORTED_MODULE_1__.addSidebar)();
    (0,_addBodyContent__WEBPACK_IMPORTED_MODULE_2__.addBodyContent)();
};

initalPageLoad();

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", function() {(0,_home__WEBPACK_IMPORTED_MODULE_3__.homePageLoad)()});

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", function() {(0,_menu__WEBPACK_IMPORTED_MODULE_4__.menuPageLoad)()});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNnQjtBQUNBOztBQUU1QztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQU87QUFDWCxJQUFJLGlFQUFlO0FBQ25CLElBQUksaUVBQWU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNETztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUJPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1DO0FBQ2dCO0FBQ0E7O0FBRTVDO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQU87QUFDZixRQUFRLGlFQUFlO0FBQ3ZCLFFBQVEsaUVBQWU7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0Qzs7QUFFckM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5REFBVztBQUNmOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNDO0FBQ1M7O0FBRVo7QUFDQTs7QUFFdEM7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVTtBQUNkLElBQUksK0RBQWM7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEMsbURBQVksR0FBRzs7QUFFN0Q7QUFDQSw4Q0FBOEMsbURBQVksR0FBRyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkQm9keUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkRGVzY3JpcHRpb24xLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZERlc2NyaXB0aW9uMi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkSGVyby5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRNZW51SGVyby5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRTaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEhlcm99IGZyb20gXCIuL2FkZEhlcm9cIjtcbmltcG9ydCB7IGFkZERlc2NyaXB0aW9uMX0gZnJvbSBcIi4vYWRkRGVzY3JpcHRpb24xXCI7XG5pbXBvcnQgeyBhZGREZXNjcmlwdGlvbjJ9IGZyb20gXCIuL2FkZERlc2NyaXB0aW9uMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQm9keUNvbnRlbnQoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2R5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiYm9keUNvbnRlbnRcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZChib2R5Q29udGVudCk7XG4gICAgYWRkSGVybygpO1xuICAgIGFkZERlc2NyaXB0aW9uMSgpO1xuICAgIGFkZERlc2NyaXB0aW9uMigpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGREZXNjcmlwdGlvbjEoKSB7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5Q29udGVudFwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbjEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uMVwiKTtcbiAgICBcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuYXBwZW5kKFwiUHJvdWQgdG8gY2hhbXBpb24gYSB0cmFkaXRpb24gb2YgbGVnZW5kYXJ5IGxha2VzaWRlIHJlc3RhdXJhbnQgZGluaW5nLlwiKTtcblxuICAgIGxldCBib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94Q29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGJveDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBib3gxLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgYm94Mi5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgIGJveDMuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgXG4gICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICAgIGltZzEuc3JjID0gXCIuLi9zcmMvc3Rhci1zb2xpZC5zdmdcIjtcbiAgICBpbWcyLnNyYyA9IFwiLi4vc3JjL3NocmltcC1zb2xpZC5zdmdcIjtcbiAgICBpbWczLnNyYyA9IFwiLi4vc3JjL3dpbmUtZ2xhc3Mtc29saWQuc3ZnXCI7XG5cbiAgICBsZXQgYm94MVAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94MVAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94MlAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94MlAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94M1AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94M1AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJveDFQMS5jbGFzc0xpc3QuYWRkKFwicDFcIik7XG4gICAgYm94MlAxLmNsYXNzTGlzdC5hZGQoXCJwMVwiKTtcbiAgICBib3gzUDEuY2xhc3NMaXN0LmFkZChcInAxXCIpO1xuICAgIGJveDFQMi5jbGFzc0xpc3QuYWRkKFwicDJcIik7XG4gICAgYm94MlAyLmNsYXNzTGlzdC5hZGQoXCJwMlwiKTtcbiAgICBib3gzUDIuY2xhc3NMaXN0LmFkZChcInAyXCIpO1xuXG4gICAgYm94MVAxLmFwcGVuZChcIlNhdm9yIHRoZSBPY2VhblwiKTtcbiAgICBib3gxUDIuYXBwZW5kKFwiU2F2b3IgdGhlIHRhc3RlIG9mIGxvY2FsbHkgc291cmNlZCwgZXhwZXJ0bHkgcHJlcGFyZWQgc2VhZm9vZCBkaXNoZXMgdGhhdCBtZWx0IGluIHlvdXIgbW91dGgsIGEgdHJ1ZSB0cmlidXRlIHRvIHRoZSBsYWtlJ3MgYm91bnR5LlwiKTtcbiAgICBib3gyUDEuYXBwZW5kKFwiRmFybS10by1UYWJsZSBQZXJmZWN0aW9uXCIpO1xuICAgIGJveDJQMi5hcHBlbmQoXCIgRXhwZXJpZW5jZSB0aGUgZnJlc2huZXNzIG9mIG91ciBmYXJtLXRvLXRhYmxlIGluZ3JlZGllbnRzIGluIGV2ZXJ5IGJpdGUsIGNhcmVmdWxseSBzZWxlY3RlZCB0byBkZWxpdmVyIHRoZSBlc3NlbmNlIG9mIHRoZSBzZWFzb24gdG8geW91ciBwbGF0ZS5cIik7XG4gICAgYm94M1AxLmFwcGVuZChcIlNpZ25hdHVyZSBDb2NrdGFpbHNcIik7XG4gICAgYm94M1AyLmFwcGVuZChcIkVuam95IGhhbmRjcmFmdGVkIGNvY2t0YWlscyBjcmVhdGVkIGJ5IG91ciBza2lsbGVkIG1peG9sb2dpc3RzLCBhcyB5b3Ugd2F0Y2ggdGhlIHN1biBkaXAgYmVsb3cgdGhlIGhvcml6b24sIGNhc3RpbmcgYSB3YXJtLCBnb2xkZW4gZ2xvdyBvdmVyIHRoZSB3YXRlci5cIik7XG5cbiAgICBib2R5Q29udGVudC5hcHBlbmQoZGVzY3JpcHRpb24xKTtcbiAgICBkZXNjcmlwdGlvbjEuYXBwZW5kKGhlYWRlciwgYm94Q29udGFpbmVyKTtcbiAgICBib3hDb250YWluZXIuYXBwZW5kKGJveDEsIGJveDIsIGJveDMpO1xuICAgIGJveDEuYXBwZW5kKGltZzEsIGJveDFQMSwgYm94MVAyKTtcbiAgICBib3gyLmFwcGVuZChpbWcyLCBib3gyUDEsIGJveDJQMik7XG4gICAgYm94My5hcHBlbmQoaW1nMywgYm94M1AxLCBib3gzUDIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGREZXNjcmlwdGlvbjIoKSB7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5Q29udGVudFwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbjIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uMlwiKTtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5hcHBlbmQoXCJPdXIgbWVudSBpcyBhIGN1bGluYXJ5IG9kZSB0byB0aGUgcmVnaW9uJ3MgYm91bnRpZnVsIHRyZWFzdXJlcy4gV2Ugc291cmNlIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgZnJvbSBsb2NhbCBhcnRpc2FucywgZmFybWVycywgYW5kIGZpc2hlcm1lbiB3aG8gc2hhcmUgb3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgc3VzdGFpbmFiaWxpdHkuIE91ciB0YWxlbnRlZCBjaGVmcyB0cmFuc2Zvcm0gdGhlc2UgaW5ncmVkaWVudHMgd2l0aCB1bndhdmVyaW5nIHBhc3Npb24gaW50byBkaXNoZXMgdGhhdCBhcmUgbm90IG9ubHkgZGVsaWNpb3VzIGJ1dCBhbHNvIGEgdmlzdWFsIG1hc3RlcnBpZWNlLiBFYWNoIHBsYXRlIGlzIGEgd29yayBvZiBhcnQsIGEgc3ltcGhvbnkgb2YgZmxhdm9ycyBhbmQgdGV4dHVyZXMgdGhhdCB3aWxsIGxlYXZlIGEgbGFzdGluZyBpbXByZXNzaW9uIG9uIHlvdXIgdGFzdGUgYnVkcyBhbmQgeW91ciBoZWFydC5cIik7XG5cbiAgICBib2R5Q29udGVudC5hcHBlbmQoZGVzY3JpcHRpb24yKTtcbiAgICBkZXNjcmlwdGlvbjIuYXBwZW5kKHApO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRIZWFkZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaGVhZGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaGVhZGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZTEuY2xhc3NMaXN0LmFkZChcImhlYWRsaW5lMVwiKTtcbiAgICBoZWFkbGluZTIuY2xhc3NMaXN0LmFkZChcImhlYWRsaW5lMlwiKTtcbiAgICBoZWFkbGluZTEuYXBwZW5kKFwiTGFrZXNpZGUgU2VyZW5pdHkgUmVzdGF1cmFudCAtIEluZHVsZ2UgaW4gTmF0dXJlJ3MgRmluZXN0IEZsYXZvcnNcIik7XG4gICAgaGVhZGxpbmUyLmFwcGVuZChcIldlbGNvbWUgdG8gTGFrZXNpZGUgU2VyZW5pdHkgUmVzdGF1cmFudCwgd2hlcmUgZXZlcnkgbWVhbCBpcyBhIGpvdXJuZXkgaW50byBjdWxpbmFyeSBleGNlbGxlbmNlIHNldCBhZ2FpbnN0IHRoZSBiYWNrZHJvcCBvZiBicmVhdGh0YWtpbmcgbmF0dXJhbCBiZWF1dHkuXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRsaW5lMSwgaGVhZGxpbmUyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkSGVybygpIHtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlDb250ZW50XCIpO1xuICAgIGxldCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IFwiLi4vc3JjL3Jlc3RhdXJhbnQuanBnXCI7XG5cbiAgICBib2R5Q29udGVudC5hcHBlbmQoaGVybyk7XG4gICAgaGVyby5hcHBlbmQoaW1nKTsgICAgXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZE1lbnVIZXJvKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG5cbiAgICAvLyB3aGlsZSAoYm9keUNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICBib2R5Q29udGVudC5yZW1vdmVDaGlsZChib2R5Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAvLyB9OyAgIFxuICAgIFxuICAgIGxldCBtZW51SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUhlcm8uY2xhc3NMaXN0LmFkZChcIm1lbnVIZXJvXCIpO1xuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IFwiLi4vc3JjL21lbnVoZXJvLmpwZ1wiO1xuICAgXG4gICAgbWVudUhlcm8uYXBwZW5kKGltZyk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25Cb3hcIik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3hDb250ZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudExlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvbkJveENvbnRlbnRMZWZ0XCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudExlZnQuYXBwZW5kKFwiQ2FwdGl2YXRpbmcgQ3Vpc2luZSBieSB0aGUgTGFrZXNpZGVcIik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3hDb250ZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbkJveENvbnRlbnRSaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uQm94Q29udGVudFJpZ2h0XCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudFJpZ2h0LmFwcGVuZChcIkZyb20gdGhlIGxhbmQsIHdlIG9mZmVyIGxlZ2VuZGFyeSBjdXRzIG9mIGJlZWYsIG1ldGljdWxvdXNseSBzb3VyY2VkIGFuZCBwcmVwYXJlZCB0byBwZXJmZWN0aW9uLiBPdXIgbWVudSBib2FzdHMgU3BlY2lhbGx5IEFnZWQgUHJpbWUtR3JhZGVkIFN0ZWFrcyB0aGF0IGFyZSBhIHN5bXBob255IG9mIGZsYXZvciBhbmQgdGVuZGVybmVzcywgYW5kIG91ciBGYW1vdXMgU2xvdy1Sb2FzdGVkIFByaW1lIFJpYiBpcyBhIHRlc3RhbWVudCB0byB0aW1lLWhvbm9yZWQgdHJhZGl0aW9uLiAgIEZyb20gdGhlIHNlYSwgd2UgZW1icmFjZSB0aGUgZnJlc2huZXNzIG9mIHRoZSB3YXRlcnMgdGhhdCBzdXJyb3VuZCB1cy4gRGl2ZSBpbnRvIGEgd29ybGQgb2YgUGFjaWZpYyBTd29yZGZpc2gsIFNjb3R0aXNoIFNhbG1vbiwgTm9ydGhlcm4gQWxhc2thbiBIYWxpYnV0LCBBdXN0cmFsaWFuIExvYnN0ZXIgVGFpbCwgYW5kIE5ldyBFbmdsYW5kIERpdmVyIFNjYWxsb3BzLiBFYWNoIGRpc2ggcmVmbGVjdHMgdGhlIHB1cml0eSBvZiB0aGUgb2NlYW4gYW5kIHRoZSBhcnRpc3RyeSBvZiBvdXIgY2hlZnMuXCIpXG5cbiAgICBkZXNjcmlwdGlvbkJveC5hcHBlbmQoZGVzY3JpcHRpb25Cb3hDb250ZW50TGVmdCwgZGVzY3JpcHRpb25Cb3hDb250ZW50UmlnaHQpO1xuICAgIGJvZHlDb250ZW50LmFwcGVuZChtZW51SGVybywgZGVzY3JpcHRpb25Cb3gpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRTaWRlYmFyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcblxuICAgIGhvbWUuYXBwZW5kKFwiSE9NRVwiKTtcbiAgICBtZW51LmFwcGVuZChcIk1FTlVcIik7XG4gICAgY29udGFjdC5hcHBlbmQoXCJDT05UQUNUXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmQoc2lkZWJhcik7XG4gICAgc2lkZWJhci5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG59IiwiaW1wb3J0IHsgYWRkSGVyb30gZnJvbSBcIi4vYWRkSGVyb1wiO1xuaW1wb3J0IHsgYWRkRGVzY3JpcHRpb24xfSBmcm9tIFwiLi9hZGREZXNjcmlwdGlvbjFcIjtcbmltcG9ydCB7IGFkZERlc2NyaXB0aW9uMn0gZnJvbSBcIi4vYWRkRGVzY3JpcHRpb24yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZUxvYWQoKSB7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5Q29udGVudFwiKTtcblxuICAgIHdoaWxlIChib2R5Q29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNoaWxkKGJvZHlDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgXG4gICAgaWYgKGJvZHlDb250ZW50LmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgICBhZGRIZXJvKCk7XG4gICAgICAgIGFkZERlc2NyaXB0aW9uMSgpO1xuICAgICAgICBhZGREZXNjcmlwdGlvbjIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgYWRkTWVudUhlcm8gfSBmcm9tIFwiLi9hZGRNZW51SGVyb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG5cbiAgICB3aGlsZSAoYm9keUNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDaGlsZChib2R5Q29udGVudC5maXJzdENoaWxkKTtcbiAgICB9O1xuXG4gICAgYWRkTWVudUhlcm8oKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRIZWFkZXIgfSBmcm9tIFwiLi9hZGRIZWFkZXJcIjtcbmltcG9ydCB7IGFkZFNpZGViYXJ9IGZyb20gXCIuL2FkZFNpZGViYXJcIjtcbmltcG9ydCB7IGFkZEJvZHlDb250ZW50IH0gZnJvbSBcIi4vYWRkQm9keUNvbnRlbnRcIjtcblxuaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSBcIi4vbWVudVwiO1xuXG5mdW5jdGlvbiBpbml0YWxQYWdlTG9hZCgpIHtcbiAgICBhZGRIZWFkZXIoKTtcbiAgICBhZGRTaWRlYmFyKCk7XG4gICAgYWRkQm9keUNvbnRlbnQoKTtcbn07XG5cbmluaXRhbFBhZ2VMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtob21lUGFnZUxvYWQoKX0pO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7bWVudVBhZ2VMb2FkKCl9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=