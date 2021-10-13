/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/dataProvider.js":
/*!****************************!*\
  !*** ./js/dataProvider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhotograph\": () => (/* binding */ getPhotograph),\n/* harmony export */   \"getPhotographById\": () => (/* binding */ getPhotographById)\n/* harmony export */ });\nconst get = (url) => {\r\n    return fetch(url);\r\n}\r\n\r\nconst getData = async () =>{\r\n    try{\r\n        let response = await get ('data/data.json');\r\n        const data = await response.json();\r\n        return data;\r\n    } catch(error) {\r\n        console.log(\"il y a eu un problème\", error);\r\n    }\r\n}\r\n\r\n\r\nconst getPhotograph = async () =>{\r\n    const data = await getData();\r\n    return data?.photographers;\r\n}\r\n\r\nconst getPhotographById = async (id) => {\r\n    const allPhotographers = await getPhotograph();\r\n    const photograph = allPhotographers.find((onePhotograph) =>{\r\n        return onePhotograph.id == id;\r\n    })\r\n\r\n    return photograph;\r\n}\r\n\r\nconst test = async () =>{\r\n    const photograph = await getPhotograph ();\r\n    console.log(photograph);\r\n}\r\n\r\ntest();\n\n//# sourceURL=webpack://fisheye/./js/dataProvider.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n\r\n\r\nconst portrait = (data) => {\r\n    const divPortrait =  document.createElement(\"div\");\r\n    divPortrait.className = \"div__portrait\";\r\n\r\n    const divImage =  document.createElement(\"div\");\r\n\r\n    const linkPhotograph =  document.createElement(\"a\");\r\n    linkPhotograph.href = \"page_photographe.html?id=\" +data.id;\r\n\r\n    const subName = data.name.split(\" \")[0];\r\n\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = \"images/Photographers/\" + data.portrait;\r\n\r\n    linkPhotograph.appendChild(image);\r\n    divImage.appendChild(linkPhotograph);\r\n    divPortrait.appendChild(divImage);\r\n\r\n    const nom = document.createElement(\"div\");\r\n    nom.className = \"nom\";\r\n\r\n    const linkPhotograph2 =  document.createElement(\"a\");\r\n    linkPhotograph2.href = \"page_photographe.html?id=\" +data.id;\r\n\r\n    const namePhotograph = document.createElement(\"h1\");\r\n    namePhotograph.innerText = data.name;\r\n\r\n    linkPhotograph2.appendChild(namePhotograph);\r\n    nom.appendChild(linkPhotograph2);\r\n    divPortrait.appendChild(nom);\r\n\r\n    return divPortrait;\r\n}\r\n\r\nconst info = (data) => {\r\n    const divInfo = document.createElement(\"div\");\r\n    divInfo.className = \"div__info\"; \r\n\r\n    const city = document.createElement(\"h3\");\r\n    city.className = \"ville\";\r\n    city.innerText = data.city+ \", \" +data.country;\r\n\r\n    const intro = document.createElement(\"h3\");\r\n    intro.className = \"phrase-intro\";\r\n    intro.innerText = data.tagline;\r\n\r\n    const price = document.createElement(\"h3\");\r\n    price.className = \"tarif\";\r\n    price.innerText = data.price + \"€/Jour\";\r\n\r\n    divInfo.append(city, intro, price);\r\n\r\n    return divInfo;\r\n\r\n\r\n}\r\n\r\nconst hashtag = (data) =>{\r\n    const divHashtag = document.createElement(\"div\");\r\n    divHashtag.className = \"div__hashtags\";\r\n\r\n    const portrait = document.createElement(\"div\");\r\n    portrait.innerText = \"#portrait\";\r\n\r\n    const events = document.createElement(\"div\");\r\n    events.innerText = \"#events\";\r\n\r\n    const travel = document.createElement(\"div\");\r\n    travel.innerText = \"#travel\";\r\n\r\n    const animals = document.createElement(\"div\");\r\n    animals.innerText = \"#animals\";\r\n\r\n    for (const tag of data.tags) {\r\n        const theme = document.createElement(\"div\");\r\n        theme.innerText = \"#\"+tag;\r\n\r\n        divHashtag.appendChild(theme);\r\n    }\r\n\r\n    //divHashtag.append(portrait, events, travel, animals);\r\n\r\n    return divHashtag;\r\n}\r\n\r\n// fonction div photographes\r\nconst displayPhotograph = (data) => {\r\n    const divPhotograph =  document.createElement(\"div\");\r\n    divPhotograph.className = \"div__photograph\";\r\n\r\n    const divPortrait = portrait(data);\r\n\r\n    const divInfo = info(data);\r\n\r\n    const divHashtag = hashtag(data);\r\n\r\n    divPhotograph.append(divPortrait, divInfo, divHashtag);\r\n\r\n    const conteneur1 = document.querySelector('.conteneur1');\r\n    conteneur1.append(divPhotograph);\r\n}\r\n\r\nconst getPhotographData = async () => {\r\n    const photographs = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getPhotograph)();\r\n    console.table(photographs);\r\n\r\n    for (const photograph of photographs) {\r\n        displayPhotograph(photograph);\r\n    }\r\n}\r\n\r\n(function (){\r\n    getPhotographData();\r\n})()\r\n\r\n//displayPhotograph();\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;