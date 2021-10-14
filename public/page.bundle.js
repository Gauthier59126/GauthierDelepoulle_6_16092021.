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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhotograph\": () => (/* binding */ getPhotograph),\n/* harmony export */   \"getPhotographById\": () => (/* binding */ getPhotographById),\n/* harmony export */   \"getImage\": () => (/* binding */ getImage),\n/* harmony export */   \"getImageById\": () => (/* binding */ getImageById),\n/* harmony export */   \"getMediaByPhotographer\": () => (/* binding */ getMediaByPhotographer)\n/* harmony export */ });\nconst get = (url) => {\r\n    return fetch(url);\r\n}\r\n\r\nconst getData = async () =>{\r\n    try{\r\n        let response = await get ('data/data.json');\r\n        const data = await response.json();\r\n        return data;\r\n    } catch(error) {\r\n        console.log(\"il y a eu un problème\", error);\r\n    }\r\n}\r\n\r\n\r\nconst getPhotograph = async () =>{\r\n    const data = await getData();\r\n    return data?.photographers;\r\n}\r\n\r\nconst getPhotographById = async (id) => {\r\n    const allPhotographers = await getPhotograph();\r\n    const photograph = allPhotographers.find((onePhotograph) =>{\r\n        return onePhotograph.id == id;\r\n    })\r\n\r\n    return photograph;\r\n}\r\n\r\n\r\n// export images\r\nconst getImage = async () =>{\r\n    const data = await getData();\r\n    return data?.media;\r\n}\r\n\r\nconst getImageById = async (id) =>{\r\n    const allImages = await getImage();\r\n    const image = allImages.find((oneImage) =>{\r\n        return oneImage.id == id;\r\n    })\r\n\r\n    return image;\r\n}\r\n\r\nconst getMediaByPhotographer = async (id) => {\r\n    const data = await getData();\r\n    const medias = data.media.filter((media) => \r\n        media.photographerId == id \r\n    )   \r\n    return medias;\r\n}\r\n\r\n\r\nconst test = async () =>{\r\n    const photograph = await getPhotograph ();\r\n    console.log(photograph);\r\n\r\n    const image = await getImage();\r\n    console.log(image);\r\n}\r\n\r\ntest();\n\n//# sourceURL=webpack://fisheye/./js/dataProvider.js?");

/***/ }),

/***/ "./js/page.js":
/*!********************!*\
  !*** ./js/page.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n\r\n\r\nconst photographId = new URL(location.href).searchParams.get('id');\r\nconsole.log('idPhotographe', photographId);\r\n\r\nlet photograph = null;\r\n\r\nconst nom = (data) => {\r\n    const divName = document.createElement(\"div\");\r\n    divName.className = \"nom\";\r\n\r\n    const textName = document.createElement(\"h1\");\r\n    textName.innerText = data.name;\r\n\r\n    divName.appendChild(textName);\r\n\r\n    return divName;\r\n}\r\n\r\nconst cityAndIntro = (data) => {\r\n    const divCityAndIntro = document.createElement(\"div\");\r\n    divCityAndIntro.className = \"div__ville__intro\";\r\n\r\n    const textCity = document.createElement(\"h3\");\r\n    textCity.className = \"ville\";\r\n    textCity.innerText = data.city +\", \"+  data.country;\r\n\r\n    const TextIntro = document.createElement(\"h3\");\r\n    TextIntro.className = \"phrase-intro\";\r\n    TextIntro.innerText = data.tagline;\r\n\r\n    divCityAndIntro.append(textCity, TextIntro);\r\n\r\n    return divCityAndIntro;\r\n}\r\n\r\nconst hashtag = (data) =>{\r\n    const divHashtag = document.createElement(\"div\");\r\n    divHashtag.className = \"div__hashtags\";\r\n\r\n    for (const tag of data.tags) {\r\n        const divTag = document.createElement(\"div\");\r\n        divTag.innerText = \"#\" + tag;\r\n\r\n        divHashtag.appendChild(divTag);\r\n    }\r\n\r\n    return divHashtag;\r\n}\r\n\r\nconst displayImagePhotograph = (data) =>{\r\n    const divImage = document.querySelector('.img__profile');\r\n    divImage.src = \"images/Photographers/\" + data.portrait;\r\n}\r\n \r\nconst displayInfoProfil = (data) => {\r\n    const divInfoProfil =  document.createElement(\"div\");\r\n    divInfoProfil.className = \"div__info-profil\";\r\n\r\n    const divName = nom(data);\r\n\r\n    const divCityAndIntro = cityAndIntro(data);\r\n\r\n    const divHashtag = hashtag(data);\r\n\r\n    divInfoProfil.append(divName, divCityAndIntro, divHashtag);\r\n\r\n    displayImagePhotograph(data);\r\n\r\n    return divInfoProfil;\r\n}\r\n\r\nconst conteneur = (data) => {\r\n    const conteneur1 = document.querySelector('.conteneur1');\r\n\r\n    const divInfoProfil = displayInfoProfil(data);\r\n\r\n    conteneur1.prepend(divInfoProfil);\r\n}\r\n\r\nconst getPhotographData = async() => {\r\n    photograph = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getPhotographById)(photographId);\r\n    conteneur(photograph);\r\n}\r\n\r\ngetPhotographData();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/page.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/page.js");
/******/ 	
/******/ })()
;