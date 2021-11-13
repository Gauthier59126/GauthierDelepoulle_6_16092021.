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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhotograph\": () => (/* binding */ getPhotograph),\n/* harmony export */   \"getPhotographById\": () => (/* binding */ getPhotographById),\n/* harmony export */   \"getImage\": () => (/* binding */ getImage),\n/* harmony export */   \"getImageById\": () => (/* binding */ getImageById),\n/* harmony export */   \"getVideoById\": () => (/* binding */ getVideoById),\n/* harmony export */   \"getMediaByPhotographer\": () => (/* binding */ getMediaByPhotographer)\n/* harmony export */ });\nconst get = (url) => {\r\n    return fetch(url);\r\n}\r\n\r\nconst getData = async () =>{\r\n    try{\r\n        let response = await get ('data/data.json');\r\n        const data = await response.json();\r\n        return data;\r\n    } catch(error) {\r\n        console.log(\"il y a eu un problème\", error);\r\n    }\r\n}\r\n\r\n\r\nconst getPhotograph = async () =>{\r\n    const data = await getData();\r\n    return data?.photographers;\r\n}\r\n\r\nconst getPhotographById = async (id) => {\r\n    const allPhotographers = await getPhotograph();\r\n    const photograph = allPhotographers.find((onePhotograph) =>{\r\n        return onePhotograph.id == id;\r\n    })\r\n\r\n    return photograph;\r\n}\r\n\r\n\r\n// export images\r\nconst getImage = async () =>{\r\n    const data = await getData();\r\n    return data?.media;\r\n}\r\n\r\nconst getImageById = async (id) =>{\r\n    const allImages = await getImage();\r\n    const image = allImages.find((oneImage) =>{\r\n        return oneImage.id == id;\r\n    })\r\n\r\n    return image;\r\n}\r\n\r\nconst getVideoById = async (id) =>{\r\n    const allVideos = await getImage();\r\n    const video = allVideos.find((oneVideo) =>{\r\n        oneVideo == \"video\";\r\n        return oneVideo.id == id;\r\n    })\r\n\r\n    return video;\r\n}\r\n\r\nconst getMediaByPhotographer = async (id) => {\r\n    const data = await getData();\r\n    const medias = data.media.filter((media) => \r\n        media.photographerId == id\r\n    )   \r\n    return medias;\r\n}\r\n\r\n\r\nconst test = async () =>{\r\n    const photograph = await getPhotograph ();\r\n    console.log(photograph);\r\n\r\n    const image = await getImage();\r\n    console.log(image);\r\n}\r\n\r\ntest();\n\n//# sourceURL=webpack://fisheye/./js/dataProvider.js?");

/***/ }),

/***/ "./js/lightbox.js":
/*!************************!*\
  !*** ./js/lightbox.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n\r\n\r\nlet medias = [];\r\nconst photographId = new URL(location.href).searchParams.get('id');\r\n\r\nconst lightbox = document.querySelector(\".lightbox\");\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((media) =>{\r\n  lightbox.style.display = \"flex\";\r\n});\r\n\r\n/*\r\nconst modal = document.querySelector(\"#myModal\");\r\nconst modalClose = document.querySelector (\".close\");\r\nconst post = document.querySelector(\".post__photo\");\r\n\r\nmodalClose.addEventListener(\"click\", closeModal);\r\n//post.forEach((div) => div.addEventListener(\"click\", launchModal));\r\npost.addEventListener(\"click\", launchModal);\r\n\r\n// Open the Modal\r\nfunction openModal() {\r\n    modal.style.display = \"block\";\r\n}\r\n  \r\n// Close the Modal\r\nfunction closeModal() {\r\n    modal.style.display = \"none\";\r\n}\r\n\r\nwindow.onclick = function(event) {\r\n    if (event.target == modal) {\r\n        modal.style.display = \"none\";\r\n    }\r\n  }\r\n\r\n  var slideIndex = 1;\r\n  showSlides(slideIndex);\r\n  \r\n  // Next/previous controls\r\n  function plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n  }\r\n  \r\n  // Thumbnail image controls\r\n  function currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n  }\r\n  \r\n  function showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var captionText = document.getElementById(\"caption\");\r\n    if (n > slides.length) {slideIndex = 1}\r\n    if (n < 1) {slideIndex = slides.length}\r\n    for (i = 0; i < slides.length; i++) {\r\n      slides[i].style.display = \"none\";\r\n    }\r\n    slides[slideIndex-1].style.display = \"block\";\r\n  }\r\n*/\r\n\r\n(async function(){\r\n  medias = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(photographId);\r\n  console.log(medias);\r\n})()\n\n//# sourceURL=webpack://fisheye/./js/lightbox.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/lightbox.js");
/******/ 	
/******/ })()
;