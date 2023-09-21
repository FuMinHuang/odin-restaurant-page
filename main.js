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

    img1.src = "./images/star-solid.svg";
    img2.src = "./images/shrimp-solid.svg";
    img3.src = "./images/wine-glass-solid.svg";

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
    img.src = "./images/restaurant.jpg";

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
    img.src = "./images/menuhero.jpg";
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNnQjtBQUNBOztBQUU1QztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQU87QUFDWCxJQUFJLGlFQUFlO0FBQ25CLElBQUksaUVBQWU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNETztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUJPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1DO0FBQ2dCO0FBQ0E7O0FBRTVDO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQU87QUFDZixRQUFRLGlFQUFlO0FBQ3ZCLFFBQVEsaUVBQWU7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0Qzs7QUFFckM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5REFBVztBQUNmOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNDO0FBQ1M7O0FBRVo7QUFDQTs7QUFFdEM7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVTtBQUNkLElBQUksK0RBQWM7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEMsbURBQVksR0FBRzs7QUFFN0Q7QUFDQSw4Q0FBOEMsbURBQVksR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZEJvZHlDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZERlc2NyaXB0aW9uMS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGREZXNjcmlwdGlvbjIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkSGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZEhlcm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkTWVudUhlcm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRIZXJvfSBmcm9tIFwiLi9hZGRIZXJvXCI7XG5pbXBvcnQgeyBhZGREZXNjcmlwdGlvbjF9IGZyb20gXCIuL2FkZERlc2NyaXB0aW9uMVwiO1xuaW1wb3J0IHsgYWRkRGVzY3JpcHRpb24yfSBmcm9tIFwiLi9hZGREZXNjcmlwdGlvbjJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvZHlDb250ZW50KCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9keUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJvZHlDb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmQoYm9keUNvbnRlbnQpO1xuICAgIGFkZEhlcm8oKTtcbiAgICBhZGREZXNjcmlwdGlvbjEoKTtcbiAgICBhZGREZXNjcmlwdGlvbjIoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb24xKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24xLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbjFcIik7XG4gICAgXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmFwcGVuZChcIlByb3VkIHRvIGNoYW1waW9uIGEgdHJhZGl0aW9uIG9mIGxlZ2VuZGFyeSBsYWtlc2lkZSByZXN0YXVyYW50IGRpbmluZy5cIik7XG5cbiAgICBsZXQgYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJveENvbnRhaW5lclwiKTtcblxuICAgIGxldCBib3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYm94MS5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgIGJveDIuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICBib3gzLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gIFxuICAgIGxldCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgIGltZzMuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5cbiAgICBpbWcxLnNyYyA9IFwiLi9pbWFnZXMvc3Rhci1zb2xpZC5zdmdcIjtcbiAgICBpbWcyLnNyYyA9IFwiLi9pbWFnZXMvc2hyaW1wLXNvbGlkLnN2Z1wiO1xuICAgIGltZzMuc3JjID0gXCIuL2ltYWdlcy93aW5lLWdsYXNzLXNvbGlkLnN2Z1wiO1xuXG4gICAgbGV0IGJveDFQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDFQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDJQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDJQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDNQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDNQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBib3gxUDEuY2xhc3NMaXN0LmFkZChcInAxXCIpO1xuICAgIGJveDJQMS5jbGFzc0xpc3QuYWRkKFwicDFcIik7XG4gICAgYm94M1AxLmNsYXNzTGlzdC5hZGQoXCJwMVwiKTtcbiAgICBib3gxUDIuY2xhc3NMaXN0LmFkZChcInAyXCIpO1xuICAgIGJveDJQMi5jbGFzc0xpc3QuYWRkKFwicDJcIik7XG4gICAgYm94M1AyLmNsYXNzTGlzdC5hZGQoXCJwMlwiKTtcblxuICAgIGJveDFQMS5hcHBlbmQoXCJTYXZvciB0aGUgT2NlYW5cIik7XG4gICAgYm94MVAyLmFwcGVuZChcIlNhdm9yIHRoZSB0YXN0ZSBvZiBsb2NhbGx5IHNvdXJjZWQsIGV4cGVydGx5IHByZXBhcmVkIHNlYWZvb2QgZGlzaGVzIHRoYXQgbWVsdCBpbiB5b3VyIG1vdXRoLCBhIHRydWUgdHJpYnV0ZSB0byB0aGUgbGFrZSdzIGJvdW50eS5cIik7XG4gICAgYm94MlAxLmFwcGVuZChcIkZhcm0tdG8tVGFibGUgUGVyZmVjdGlvblwiKTtcbiAgICBib3gyUDIuYXBwZW5kKFwiIEV4cGVyaWVuY2UgdGhlIGZyZXNobmVzcyBvZiBvdXIgZmFybS10by10YWJsZSBpbmdyZWRpZW50cyBpbiBldmVyeSBiaXRlLCBjYXJlZnVsbHkgc2VsZWN0ZWQgdG8gZGVsaXZlciB0aGUgZXNzZW5jZSBvZiB0aGUgc2Vhc29uIHRvIHlvdXIgcGxhdGUuXCIpO1xuICAgIGJveDNQMS5hcHBlbmQoXCJTaWduYXR1cmUgQ29ja3RhaWxzXCIpO1xuICAgIGJveDNQMi5hcHBlbmQoXCJFbmpveSBoYW5kY3JhZnRlZCBjb2NrdGFpbHMgY3JlYXRlZCBieSBvdXIgc2tpbGxlZCBtaXhvbG9naXN0cywgYXMgeW91IHdhdGNoIHRoZSBzdW4gZGlwIGJlbG93IHRoZSBob3Jpem9uLCBjYXN0aW5nIGEgd2FybSwgZ29sZGVuIGdsb3cgb3ZlciB0aGUgd2F0ZXIuXCIpO1xuXG4gICAgYm9keUNvbnRlbnQuYXBwZW5kKGRlc2NyaXB0aW9uMSk7XG4gICAgZGVzY3JpcHRpb24xLmFwcGVuZChoZWFkZXIsIGJveENvbnRhaW5lcik7XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZChib3gxLCBib3gyLCBib3gzKTtcbiAgICBib3gxLmFwcGVuZChpbWcxLCBib3gxUDEsIGJveDFQMik7XG4gICAgYm94Mi5hcHBlbmQoaW1nMiwgYm94MlAxLCBib3gyUDIpO1xuICAgIGJveDMuYXBwZW5kKGltZzMsIGJveDNQMSwgYm94M1AyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkRGVzY3JpcHRpb24yKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbjJcIik7XG5cbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuYXBwZW5kKFwiT3VyIG1lbnUgaXMgYSBjdWxpbmFyeSBvZGUgdG8gdGhlIHJlZ2lvbidzIGJvdW50aWZ1bCB0cmVhc3VyZXMuIFdlIHNvdXJjZSB0aGUgZmluZXN0IGluZ3JlZGllbnRzIGZyb20gbG9jYWwgYXJ0aXNhbnMsIGZhcm1lcnMsIGFuZCBmaXNoZXJtZW4gd2hvIHNoYXJlIG91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIHN1c3RhaW5hYmlsaXR5LiBPdXIgdGFsZW50ZWQgY2hlZnMgdHJhbnNmb3JtIHRoZXNlIGluZ3JlZGllbnRzIHdpdGggdW53YXZlcmluZyBwYXNzaW9uIGludG8gZGlzaGVzIHRoYXQgYXJlIG5vdCBvbmx5IGRlbGljaW91cyBidXQgYWxzbyBhIHZpc3VhbCBtYXN0ZXJwaWVjZS4gRWFjaCBwbGF0ZSBpcyBhIHdvcmsgb2YgYXJ0LCBhIHN5bXBob255IG9mIGZsYXZvcnMgYW5kIHRleHR1cmVzIHRoYXQgd2lsbCBsZWF2ZSBhIGxhc3RpbmcgaW1wcmVzc2lvbiBvbiB5b3VyIHRhc3RlIGJ1ZHMgYW5kIHlvdXIgaGVhcnQuXCIpO1xuXG4gICAgYm9keUNvbnRlbnQuYXBwZW5kKGRlc2NyaXB0aW9uMik7XG4gICAgZGVzY3JpcHRpb24yLmFwcGVuZChwKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkSGVhZGVyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgbGV0IGhlYWRsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGhlYWRsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmUxLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZTFcIik7XG4gICAgaGVhZGxpbmUyLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZTJcIik7XG4gICAgaGVhZGxpbmUxLmFwcGVuZChcIkxha2VzaWRlIFNlcmVuaXR5IFJlc3RhdXJhbnQgLSBJbmR1bGdlIGluIE5hdHVyZSdzIEZpbmVzdCBGbGF2b3JzXCIpO1xuICAgIGhlYWRsaW5lMi5hcHBlbmQoXCJXZWxjb21lIHRvIExha2VzaWRlIFNlcmVuaXR5IFJlc3RhdXJhbnQsIHdoZXJlIGV2ZXJ5IG1lYWwgaXMgYSBqb3VybmV5IGludG8gY3VsaW5hcnkgZXhjZWxsZW5jZSBzZXQgYWdhaW5zdCB0aGUgYmFja2Ryb3Agb2YgYnJlYXRodGFraW5nIG5hdHVyYWwgYmVhdXR5LlwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkbGluZTEsIGhlYWRsaW5lMik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEhlcm8oKSB7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5Q29udGVudFwiKTtcbiAgICBsZXQgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQuanBnXCI7XG5cbiAgICBib2R5Q29udGVudC5hcHBlbmQoaGVybyk7XG4gICAgaGVyby5hcHBlbmQoaW1nKTsgICAgXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZE1lbnVIZXJvKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG5cbiAgICAvLyB3aGlsZSAoYm9keUNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIC8vICAgICBib2R5Q29udGVudC5yZW1vdmVDaGlsZChib2R5Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAvLyB9OyAgIFxuICAgIFxuICAgIGxldCBtZW51SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUhlcm8uY2xhc3NMaXN0LmFkZChcIm1lbnVIZXJvXCIpO1xuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IFwiLi9pbWFnZXMvbWVudWhlcm8uanBnXCI7XG4gICBcbiAgICBtZW51SGVyby5hcHBlbmQoaW1nKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25Cb3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvbkJveFwiKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbkJveENvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb25Cb3hDb250ZW50TGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uQm94Q29udGVudExlZnRcIik7XG4gICAgZGVzY3JpcHRpb25Cb3hDb250ZW50TGVmdC5hcHBlbmQoXCJDYXB0aXZhdGluZyBDdWlzaW5lIGJ5IHRoZSBMYWtlc2lkZVwiKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbkJveENvbnRlbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudFJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25Cb3hDb250ZW50UmlnaHRcIik7XG4gICAgZGVzY3JpcHRpb25Cb3hDb250ZW50UmlnaHQuYXBwZW5kKFwiRnJvbSB0aGUgbGFuZCwgd2Ugb2ZmZXIgbGVnZW5kYXJ5IGN1dHMgb2YgYmVlZiwgbWV0aWN1bG91c2x5IHNvdXJjZWQgYW5kIHByZXBhcmVkIHRvIHBlcmZlY3Rpb24uIE91ciBtZW51IGJvYXN0cyBTcGVjaWFsbHkgQWdlZCBQcmltZS1HcmFkZWQgU3RlYWtzIHRoYXQgYXJlIGEgc3ltcGhvbnkgb2YgZmxhdm9yIGFuZCB0ZW5kZXJuZXNzLCBhbmQgb3VyIEZhbW91cyBTbG93LVJvYXN0ZWQgUHJpbWUgUmliIGlzIGEgdGVzdGFtZW50IHRvIHRpbWUtaG9ub3JlZCB0cmFkaXRpb24uICAgRnJvbSB0aGUgc2VhLCB3ZSBlbWJyYWNlIHRoZSBmcmVzaG5lc3Mgb2YgdGhlIHdhdGVycyB0aGF0IHN1cnJvdW5kIHVzLiBEaXZlIGludG8gYSB3b3JsZCBvZiBQYWNpZmljIFN3b3JkZmlzaCwgU2NvdHRpc2ggU2FsbW9uLCBOb3J0aGVybiBBbGFza2FuIEhhbGlidXQsIEF1c3RyYWxpYW4gTG9ic3RlciBUYWlsLCBhbmQgTmV3IEVuZ2xhbmQgRGl2ZXIgU2NhbGxvcHMuIEVhY2ggZGlzaCByZWZsZWN0cyB0aGUgcHVyaXR5IG9mIHRoZSBvY2VhbiBhbmQgdGhlIGFydGlzdHJ5IG9mIG91ciBjaGVmcy5cIilcblxuICAgIGRlc2NyaXB0aW9uQm94LmFwcGVuZChkZXNjcmlwdGlvbkJveENvbnRlbnRMZWZ0LCBkZXNjcmlwdGlvbkJveENvbnRlbnRSaWdodCk7XG4gICAgYm9keUNvbnRlbnQuYXBwZW5kKG1lbnVIZXJvLCBkZXNjcmlwdGlvbkJveCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFNpZGViYXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuXG4gICAgaG9tZS5hcHBlbmQoXCJIT01FXCIpO1xuICAgIG1lbnUuYXBwZW5kKFwiTUVOVVwiKTtcbiAgICBjb250YWN0LmFwcGVuZChcIkNPTlRBQ1RcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZChzaWRlYmFyKTtcbiAgICBzaWRlYmFyLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbn0iLCJpbXBvcnQgeyBhZGRIZXJvfSBmcm9tIFwiLi9hZGRIZXJvXCI7XG5pbXBvcnQgeyBhZGREZXNjcmlwdGlvbjF9IGZyb20gXCIuL2FkZERlc2NyaXB0aW9uMVwiO1xuaW1wb3J0IHsgYWRkRGVzY3JpcHRpb24yfSBmcm9tIFwiLi9hZGREZXNjcmlwdGlvbjJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlTG9hZCgpIHtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlDb250ZW50XCIpO1xuXG4gICAgd2hpbGUgKGJvZHlDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2hpbGQoYm9keUNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICBcbiAgICBpZiAoYm9keUNvbnRlbnQuaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gICAgICAgIGFkZEhlcm8oKTtcbiAgICAgICAgYWRkRGVzY3JpcHRpb24xKCk7XG4gICAgICAgIGFkZERlc2NyaXB0aW9uMigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBhZGRNZW51SGVybyB9IGZyb20gXCIuL2FkZE1lbnVIZXJvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZUxvYWQoKSB7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5Q29udGVudFwiKTtcblxuICAgIHdoaWxlIChib2R5Q29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNoaWxkKGJvZHlDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH07XG5cbiAgICBhZGRNZW51SGVybygpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZEhlYWRlciB9IGZyb20gXCIuL2FkZEhlYWRlclwiO1xuaW1wb3J0IHsgYWRkU2lkZWJhcn0gZnJvbSBcIi4vYWRkU2lkZWJhclwiO1xuaW1wb3J0IHsgYWRkQm9keUNvbnRlbnQgfSBmcm9tIFwiLi9hZGRCb2R5Q29udGVudFwiO1xuXG5pbXBvcnQgeyBob21lUGFnZUxvYWQgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmZ1bmN0aW9uIGluaXRhbFBhZ2VMb2FkKCkge1xuICAgIGFkZEhlYWRlcigpO1xuICAgIGFkZFNpZGViYXIoKTtcbiAgICBhZGRCb2R5Q29udGVudCgpO1xufTtcblxuaW5pdGFsUGFnZUxvYWQoKTtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge2hvbWVQYWdlTG9hZCgpfSk7XG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHttZW51UGFnZUxvYWQoKX0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=