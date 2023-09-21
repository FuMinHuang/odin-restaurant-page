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

console.log("Test");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNnQjtBQUNBOztBQUU1QztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQU87QUFDWCxJQUFJLGlFQUFlO0FBQ25CLElBQUksaUVBQWU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNETztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUJPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1DO0FBQ2dCO0FBQ0E7O0FBRTVDO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQU87QUFDZixRQUFRLGlFQUFlO0FBQ3ZCLFFBQVEsaUVBQWU7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0Qzs7QUFFckM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5REFBVztBQUNmOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNDO0FBQ1M7O0FBRVo7QUFDQTs7QUFFdEM7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVTtBQUNkLElBQUksK0RBQWM7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEMsbURBQVksR0FBRzs7QUFFN0Q7QUFDQSw4Q0FBOEMsbURBQVksR0FBRzs7QUFFN0Qsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRCb2R5Q29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGREZXNjcmlwdGlvbjEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkRGVzY3JpcHRpb24yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZEhlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRIZXJvLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZE1lbnVIZXJvLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkSGVyb30gZnJvbSBcIi4vYWRkSGVyb1wiO1xuaW1wb3J0IHsgYWRkRGVzY3JpcHRpb24xfSBmcm9tIFwiLi9hZGREZXNjcmlwdGlvbjFcIjtcbmltcG9ydCB7IGFkZERlc2NyaXB0aW9uMn0gZnJvbSBcIi4vYWRkRGVzY3JpcHRpb24yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb2R5Q29udGVudCgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvZHlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJib2R5Q29udGVudFwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGJvZHlDb250ZW50KTtcbiAgICBhZGRIZXJvKCk7XG4gICAgYWRkRGVzY3JpcHRpb24xKCk7XG4gICAgYWRkRGVzY3JpcHRpb24yKCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uMSgpIHtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlDb250ZW50XCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uMS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24xXCIpO1xuICAgIFxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5hcHBlbmQoXCJQcm91ZCB0byBjaGFtcGlvbiBhIHRyYWRpdGlvbiBvZiBsZWdlbmRhcnkgbGFrZXNpZGUgcmVzdGF1cmFudCBkaW5pbmcuXCIpO1xuXG4gICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib3hDb250YWluZXJcIik7XG5cbiAgICBsZXQgYm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJveDEuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICBib3gyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgYm94My5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICBcbiAgICBsZXQgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGltZzEuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgaW1nMi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuXG4gICAgaW1nMS5zcmMgPSBcIi4vaW1hZ2VzL3N0YXItc29saWQuc3ZnXCI7XG4gICAgaW1nMi5zcmMgPSBcIi4vaW1hZ2VzL3NocmltcC1zb2xpZC5zdmdcIjtcbiAgICBpbWczLnNyYyA9IFwiLi9pbWFnZXMvd2luZS1nbGFzcy1zb2xpZC5zdmdcIjtcblxuICAgIGxldCBib3gxUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gxUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gyUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gyUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gzUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib3gzUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYm94MVAxLmNsYXNzTGlzdC5hZGQoXCJwMVwiKTtcbiAgICBib3gyUDEuY2xhc3NMaXN0LmFkZChcInAxXCIpO1xuICAgIGJveDNQMS5jbGFzc0xpc3QuYWRkKFwicDFcIik7XG4gICAgYm94MVAyLmNsYXNzTGlzdC5hZGQoXCJwMlwiKTtcbiAgICBib3gyUDIuY2xhc3NMaXN0LmFkZChcInAyXCIpO1xuICAgIGJveDNQMi5jbGFzc0xpc3QuYWRkKFwicDJcIik7XG5cbiAgICBib3gxUDEuYXBwZW5kKFwiU2F2b3IgdGhlIE9jZWFuXCIpO1xuICAgIGJveDFQMi5hcHBlbmQoXCJTYXZvciB0aGUgdGFzdGUgb2YgbG9jYWxseSBzb3VyY2VkLCBleHBlcnRseSBwcmVwYXJlZCBzZWFmb29kIGRpc2hlcyB0aGF0IG1lbHQgaW4geW91ciBtb3V0aCwgYSB0cnVlIHRyaWJ1dGUgdG8gdGhlIGxha2UncyBib3VudHkuXCIpO1xuICAgIGJveDJQMS5hcHBlbmQoXCJGYXJtLXRvLVRhYmxlIFBlcmZlY3Rpb25cIik7XG4gICAgYm94MlAyLmFwcGVuZChcIiBFeHBlcmllbmNlIHRoZSBmcmVzaG5lc3Mgb2Ygb3VyIGZhcm0tdG8tdGFibGUgaW5ncmVkaWVudHMgaW4gZXZlcnkgYml0ZSwgY2FyZWZ1bGx5IHNlbGVjdGVkIHRvIGRlbGl2ZXIgdGhlIGVzc2VuY2Ugb2YgdGhlIHNlYXNvbiB0byB5b3VyIHBsYXRlLlwiKTtcbiAgICBib3gzUDEuYXBwZW5kKFwiU2lnbmF0dXJlIENvY2t0YWlsc1wiKTtcbiAgICBib3gzUDIuYXBwZW5kKFwiRW5qb3kgaGFuZGNyYWZ0ZWQgY29ja3RhaWxzIGNyZWF0ZWQgYnkgb3VyIHNraWxsZWQgbWl4b2xvZ2lzdHMsIGFzIHlvdSB3YXRjaCB0aGUgc3VuIGRpcCBiZWxvdyB0aGUgaG9yaXpvbiwgY2FzdGluZyBhIHdhcm0sIGdvbGRlbiBnbG93IG92ZXIgdGhlIHdhdGVyLlwiKTtcblxuICAgIGJvZHlDb250ZW50LmFwcGVuZChkZXNjcmlwdGlvbjEpO1xuICAgIGRlc2NyaXB0aW9uMS5hcHBlbmQoaGVhZGVyLCBib3hDb250YWluZXIpO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmQoYm94MSwgYm94MiwgYm94Myk7XG4gICAgYm94MS5hcHBlbmQoaW1nMSwgYm94MVAxLCBib3gxUDIpO1xuICAgIGJveDIuYXBwZW5kKGltZzIsIGJveDJQMSwgYm94MlAyKTtcbiAgICBib3gzLmFwcGVuZChpbWczLCBib3gzUDEsIGJveDNQMik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uMigpIHtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlDb250ZW50XCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uMi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24yXCIpO1xuXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmFwcGVuZChcIk91ciBtZW51IGlzIGEgY3VsaW5hcnkgb2RlIHRvIHRoZSByZWdpb24ncyBib3VudGlmdWwgdHJlYXN1cmVzLiBXZSBzb3VyY2UgdGhlIGZpbmVzdCBpbmdyZWRpZW50cyBmcm9tIGxvY2FsIGFydGlzYW5zLCBmYXJtZXJzLCBhbmQgZmlzaGVybWVuIHdobyBzaGFyZSBvdXIgY29tbWl0bWVudCB0byBxdWFsaXR5IGFuZCBzdXN0YWluYWJpbGl0eS4gT3VyIHRhbGVudGVkIGNoZWZzIHRyYW5zZm9ybSB0aGVzZSBpbmdyZWRpZW50cyB3aXRoIHVud2F2ZXJpbmcgcGFzc2lvbiBpbnRvIGRpc2hlcyB0aGF0IGFyZSBub3Qgb25seSBkZWxpY2lvdXMgYnV0IGFsc28gYSB2aXN1YWwgbWFzdGVycGllY2UuIEVhY2ggcGxhdGUgaXMgYSB3b3JrIG9mIGFydCwgYSBzeW1waG9ueSBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcyB0aGF0IHdpbGwgbGVhdmUgYSBsYXN0aW5nIGltcHJlc3Npb24gb24geW91ciB0YXN0ZSBidWRzIGFuZCB5b3VyIGhlYXJ0LlwiKTtcblxuICAgIGJvZHlDb250ZW50LmFwcGVuZChkZXNjcmlwdGlvbjIpO1xuICAgIGRlc2NyaXB0aW9uMi5hcHBlbmQocCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEhlYWRlcigpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGxldCBoZWFkbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBoZWFkbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRsaW5lMS5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmUxXCIpO1xuICAgIGhlYWRsaW5lMi5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmUyXCIpO1xuICAgIGhlYWRsaW5lMS5hcHBlbmQoXCJMYWtlc2lkZSBTZXJlbml0eSBSZXN0YXVyYW50IC0gSW5kdWxnZSBpbiBOYXR1cmUncyBGaW5lc3QgRmxhdm9yc1wiKTtcbiAgICBoZWFkbGluZTIuYXBwZW5kKFwiV2VsY29tZSB0byBMYWtlc2lkZSBTZXJlbml0eSBSZXN0YXVyYW50LCB3aGVyZSBldmVyeSBtZWFsIGlzIGEgam91cm5leSBpbnRvIGN1bGluYXJ5IGV4Y2VsbGVuY2Ugc2V0IGFnYWluc3QgdGhlIGJhY2tkcm9wIG9mIGJyZWF0aHRha2luZyBuYXR1cmFsIGJlYXV0eS5cIik7XG5cbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmQoaGVhZGxpbmUxLCBoZWFkbGluZTIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRIZXJvKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG4gICAgbGV0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG5cbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gXCIuL2ltYWdlcy9yZXN0YXVyYW50LmpwZ1wiO1xuXG4gICAgYm9keUNvbnRlbnQuYXBwZW5kKGhlcm8pO1xuICAgIGhlcm8uYXBwZW5kKGltZyk7ICAgIFxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRNZW51SGVybygpIHtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlDb250ZW50XCIpO1xuXG4gICAgLy8gd2hpbGUgKGJvZHlDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2hpbGQoYm9keUNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgLy8gfTsgICBcbiAgICBcbiAgICBsZXQgbWVudUhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVIZXJvLmNsYXNzTGlzdC5hZGQoXCJtZW51SGVyb1wiKTtcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBcIi4vaW1hZ2VzL21lbnVoZXJvLmpwZ1wiO1xuICAgXG4gICAgbWVudUhlcm8uYXBwZW5kKGltZyk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25Cb3hcIik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3hDb250ZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudExlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvbkJveENvbnRlbnRMZWZ0XCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudExlZnQuYXBwZW5kKFwiQ2FwdGl2YXRpbmcgQ3Vpc2luZSBieSB0aGUgTGFrZXNpZGVcIik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3hDb250ZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbkJveENvbnRlbnRSaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uQm94Q29udGVudFJpZ2h0XCIpO1xuICAgIGRlc2NyaXB0aW9uQm94Q29udGVudFJpZ2h0LmFwcGVuZChcIkZyb20gdGhlIGxhbmQsIHdlIG9mZmVyIGxlZ2VuZGFyeSBjdXRzIG9mIGJlZWYsIG1ldGljdWxvdXNseSBzb3VyY2VkIGFuZCBwcmVwYXJlZCB0byBwZXJmZWN0aW9uLiBPdXIgbWVudSBib2FzdHMgU3BlY2lhbGx5IEFnZWQgUHJpbWUtR3JhZGVkIFN0ZWFrcyB0aGF0IGFyZSBhIHN5bXBob255IG9mIGZsYXZvciBhbmQgdGVuZGVybmVzcywgYW5kIG91ciBGYW1vdXMgU2xvdy1Sb2FzdGVkIFByaW1lIFJpYiBpcyBhIHRlc3RhbWVudCB0byB0aW1lLWhvbm9yZWQgdHJhZGl0aW9uLiAgIEZyb20gdGhlIHNlYSwgd2UgZW1icmFjZSB0aGUgZnJlc2huZXNzIG9mIHRoZSB3YXRlcnMgdGhhdCBzdXJyb3VuZCB1cy4gRGl2ZSBpbnRvIGEgd29ybGQgb2YgUGFjaWZpYyBTd29yZGZpc2gsIFNjb3R0aXNoIFNhbG1vbiwgTm9ydGhlcm4gQWxhc2thbiBIYWxpYnV0LCBBdXN0cmFsaWFuIExvYnN0ZXIgVGFpbCwgYW5kIE5ldyBFbmdsYW5kIERpdmVyIFNjYWxsb3BzLiBFYWNoIGRpc2ggcmVmbGVjdHMgdGhlIHB1cml0eSBvZiB0aGUgb2NlYW4gYW5kIHRoZSBhcnRpc3RyeSBvZiBvdXIgY2hlZnMuXCIpXG5cbiAgICBkZXNjcmlwdGlvbkJveC5hcHBlbmQoZGVzY3JpcHRpb25Cb3hDb250ZW50TGVmdCwgZGVzY3JpcHRpb25Cb3hDb250ZW50UmlnaHQpO1xuICAgIGJvZHlDb250ZW50LmFwcGVuZChtZW51SGVybywgZGVzY3JpcHRpb25Cb3gpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRTaWRlYmFyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcblxuICAgIGhvbWUuYXBwZW5kKFwiSE9NRVwiKTtcbiAgICBtZW51LmFwcGVuZChcIk1FTlVcIik7XG4gICAgY29udGFjdC5hcHBlbmQoXCJDT05UQUNUXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmQoc2lkZWJhcik7XG4gICAgc2lkZWJhci5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG59IiwiaW1wb3J0IHsgYWRkSGVyb30gZnJvbSBcIi4vYWRkSGVyb1wiO1xuaW1wb3J0IHsgYWRkRGVzY3JpcHRpb24xfSBmcm9tIFwiLi9hZGREZXNjcmlwdGlvbjFcIjtcbmltcG9ydCB7IGFkZERlc2NyaXB0aW9uMn0gZnJvbSBcIi4vYWRkRGVzY3JpcHRpb24yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZUxvYWQoKSB7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5Q29udGVudFwiKTtcblxuICAgIHdoaWxlIChib2R5Q29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNoaWxkKGJvZHlDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgXG4gICAgaWYgKGJvZHlDb250ZW50LmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgICBhZGRIZXJvKCk7XG4gICAgICAgIGFkZERlc2NyaXB0aW9uMSgpO1xuICAgICAgICBhZGREZXNjcmlwdGlvbjIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgYWRkTWVudUhlcm8gfSBmcm9tIFwiLi9hZGRNZW51SGVyb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xuICAgIGxldCBib2R5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keUNvbnRlbnRcIik7XG5cbiAgICB3aGlsZSAoYm9keUNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDaGlsZChib2R5Q29udGVudC5maXJzdENoaWxkKTtcbiAgICB9O1xuXG4gICAgYWRkTWVudUhlcm8oKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRIZWFkZXIgfSBmcm9tIFwiLi9hZGRIZWFkZXJcIjtcbmltcG9ydCB7IGFkZFNpZGViYXJ9IGZyb20gXCIuL2FkZFNpZGViYXJcIjtcbmltcG9ydCB7IGFkZEJvZHlDb250ZW50IH0gZnJvbSBcIi4vYWRkQm9keUNvbnRlbnRcIjtcblxuaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSBcIi4vbWVudVwiO1xuXG5mdW5jdGlvbiBpbml0YWxQYWdlTG9hZCgpIHtcbiAgICBhZGRIZWFkZXIoKTtcbiAgICBhZGRTaWRlYmFyKCk7XG4gICAgYWRkQm9keUNvbnRlbnQoKTtcbn07XG5cbmluaXRhbFBhZ2VMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtob21lUGFnZUxvYWQoKX0pO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7bWVudVBhZ2VMb2FkKCl9KTtcblxuY29uc29sZS5sb2coXCJUZXN0XCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==