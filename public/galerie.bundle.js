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

/***/ "./js/galerie.js":
/*!***********************!*\
  !*** ./js/galerie.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n\r\n\r\n\r\nconst photographId = new URL(location.href).searchParams.get('id');\r\nconsole.log('idPhotographe', photographId);\r\n\r\nlet photograph = null;\r\nlet medias = [];\r\n\r\nconst title = (data) =>{\r\n    const imageDivName = document.createElement(\"div\");\r\n    imageDivName.className = \"nom__photo\";\r\n\r\n    const imageName = document.createElement(\"h2\");\r\n    imageName.innerText = data.title;\r\n\r\n    imageDivName.appendChild(imageName);\r\n\r\n    return imageDivName;\r\n}\r\n\r\nconst like = (data) =>{\r\n    const divLike = document.createElement(\"div\");\r\n    divLike.className = \"nb__like\";\r\n\r\n    const nbLike = document.createElement(\"h2\");\r\n    nbLike.innerText = data.likes;\r\n\r\n    divLike.appendChild(nbLike);\r\n\r\n    return divLike;\r\n}\r\n\r\nconst likeIcone = (data) =>{\r\n    const divLikeIcon = document.createElement(\"div\");\r\n    divLikeIcon.className = \"icone__like\";\r\n\r\n    const likeIcone = document.createElement(\"i\");\r\n    likeIcone.className = \"fas fa-heart\";\r\n\r\n    divLikeIcon.appendChild(likeIcone);\r\n\r\n    return divLikeIcon;\r\n}\r\n\r\nconst displayImageInfo = (data) =>{\r\n    const divImageInfo = document.createElement(\"div\");\r\n    divImageInfo.className = \"description__photo\";\r\n\r\n    const imageDivName = title(data);\r\n    const divLike = like(data);\r\n    const divLikeIcon = likeIcone(data);\r\n\r\n    divImageInfo.append(imageDivName, divLike, divLikeIcon);\r\n\r\n    return divImageInfo;\r\n}\r\n\r\nconst displayImage = (data) =>{\r\n    const divImage = document.createElement(\"div\");\r\n    divImage.className = \"div__img\";\r\n\r\n    const image = document.createElement(\"img\")\r\n    image.src = \"images/images/\" + data.image;\r\n\r\n    divImage.appendChild(image);\r\n\r\n    return divImage;\r\n}\r\n\r\nconst displayImagePost = (data) =>{\r\n    const divImagePost = document.createElement(\"div\");\r\n    divImagePost.className = \"poste__photo\";\r\n\r\n    \r\n    const divImageInfo = displayImageInfo(data);\r\n    const divImage = displayImage(data);\r\n\r\n    divImagePost.append(divImageInfo, divImage);\r\n\r\n    return divImagePost;\r\n}\r\n\r\nconst displayGalerie = (mediasArray) =>{\r\n    const galerie = document.querySelector(\".galerie\");\r\n\r\n    for (const media of mediasArray) {\r\n        const mediaType = media.image != null?\"image\":\"video\";\r\n        const divImagePost = new _mediaFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mediaType, media);\r\n        if (mediaType== \"image\") {\r\n            console.log(divImagePost, mediaType);\r\n            divImagePost.appendTo(galerie);\r\n        }\r\n        \r\n       // galerie.prepend(divImagePost);\r\n    }\r\n}\r\n\r\nconst getMedias =  async() => {\r\n    medias = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(photographId);\r\n    console.log(\"medias :\",medias);\r\n    displayGalerie(medias);\r\n}\r\n\r\ngetMedias();\r\n\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/galerie.js?");

/***/ }),

/***/ "./js/imageFactory.js":
/*!****************************!*\
  !*** ./js/imageFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageFactory)\n/* harmony export */ });\nclass ImageFactory {\r\n    constructor (imageData){\r\n        this.createImage(imageData);\r\n    }\r\n\r\n    createImage(data) {\r\n        this.divImagePost = document.createElement(\"div\");\r\n        this.divImagePost.className = \"poste__photo\";\r\n            \r\n        const divImageInfo = this.getInfo(data);\r\n        const divImage = this.getImage(data);\r\n    \r\n        this.divImagePost.append(divImageInfo, divImage);\r\n    \r\n        //return this.divImagePost;\r\n    }\r\n\r\n    getInfo(data){\r\n        const divImageInfo = document.createElement(\"div\");\r\n        divImageInfo.className = \"description__photo\";\r\n    \r\n        const imageDivName = this.getTitle(data);\r\n        const divLike = this.getLike(data);\r\n        const divLikeIcon = this.getLikeIcone(data);\r\n    \r\n        divImageInfo.append(imageDivName, divLike, divLikeIcon);\r\n    \r\n        return divImageInfo;\r\n    }\r\n\r\n    getTitle (data){\r\n        const imageDivName = document.createElement(\"div\");\r\n        imageDivName.className = \"nom__photo\";\r\n    \r\n        const imageName = document.createElement(\"h2\");\r\n        imageName.innerText = data.title;\r\n    \r\n        imageDivName.appendChild(imageName);\r\n    \r\n        return imageDivName;\r\n    }\r\n\r\n    getLike(data){\r\n        const divLike = document.createElement(\"div\");\r\n        divLike.className = \"nb__like\";\r\n    \r\n        const nbLike = document.createElement(\"h2\");\r\n        nbLike.innerText = data.likes;\r\n    \r\n        divLike.appendChild(nbLike);\r\n    \r\n        return divLike;\r\n    }\r\n\r\n    getLikeIcone (data){\r\n        const divLikeIcon = document.createElement(\"div\");\r\n        divLikeIcon.className = \"icone__like\";\r\n    \r\n        const likeIcone = document.createElement(\"i\");\r\n        likeIcone.className = \"fas fa-heart\";\r\n    \r\n        divLikeIcon.appendChild(likeIcone);\r\n    \r\n        return divLikeIcon;\r\n    }\r\n\r\n    getImage (data){\r\n        const divImage = document.createElement(\"div\");\r\n        divImage.className = \"div__img\";\r\n    \r\n        const image = document.createElement(\"img\")\r\n        image.src = \"images/images/\" + data.image;\r\n    \r\n        divImage.appendChild(image);\r\n    \r\n        return divImage;\r\n    }\r\n\r\n    appendTo(conteneur){\r\n        if (conteneur) {\r\n            conteneur.appendChild(this.divImagePost);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/imageFactory.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _imageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageFactory */ \"./js/imageFactory.js\");\n\r\nclass MediaFactory {\r\n    constructor (mediaType, mediaData){\r\n\r\n        switch (mediaType) {\r\n            case \"image\":\r\n                return new _imageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mediaData);\r\n                break;\r\n            case \"video\":\r\n                return null;\r\n                break;\r\n            default: \r\n            throw Error(\"Ce type de média n'est pas pris en compte\")\r\n                break;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/galerie.js");
/******/ 	
/******/ })()
;