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

/***/ "./js/galerie.js":
/*!***********************!*\
  !*** ./js/galerie.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMedia\": () => (/* binding */ fetchMedia)\n/* harmony export */ });\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n\r\n\r\n\r\nlet photograph = null;\r\nlet medias = [];\r\nlet likes = 0;\r\n\r\n\r\n// fonction filtre\r\nfunction globalFilter(e){\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n    const value = e.target.value;\r\n    console.log(\"attribut de filtre : \" + value);\r\n\r\n    switch (value) {\r\n        case \"popularite\":\r\n            console.log(medias);\r\n            const filterMedias = filterByTrending(medias);\r\n            displayGalerie(filterMedias);\r\n            break;\r\n \r\n        default:\r\n            break;\r\n    }\r\n}\r\n\r\nconst select = document.querySelector(\".sous\");\r\nselect.addEventListener(\"change\", globalFilter);\r\n\r\nconst addLike = () =>{\r\n    likes += 1;\r\n    fetchLikes();\r\n}\r\n\r\nconst displayGalerie = (mediasArray) =>{\r\n    console.log(mediasArray);\r\n    const galerie = document.querySelector(\".galerie\");\r\n\r\n    galerie.innerText = \"\";\r\n\r\n    for (const media of mediasArray) {\r\n        const mediaType = media.image == null?\"video\":\"image\";\r\n        media.photograph = photograph;\r\n        const divVideoPost = new _mediaFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mediaType, media, addLike);\r\n        divVideoPost.appendTo(galerie);\r\n    }\r\n}\r\n\r\nconst fetchLikes = (likesCount) => {\r\n    const likeToFetch = likesCount || likes;\r\n\r\n    const divTotalLikes = document.querySelector('.total-likes');\r\n    divTotalLikes.innerText = likeToFetch;\r\n}\r\n\r\nconst filter = (a, b) =>{\r\n    return a.likes - b.likes;\r\n}\r\n\r\nconst filterByTrending = (medias) =>{\r\n\r\n/*    const trendingFilterName = document.querySelector(\".nom__filtres\");\r\n\r\n    trendingFilterName.addEventListener('click', () => {\r\n        console.log('Le filtre Popularité a été selectionné\"\"');\r\n    })\r\n*/\r\n    return medias.sort(filter);\r\n}\r\n\r\nconst getMedias =  async() => {\r\n    medias = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(photograph.id);\r\n    console.log(\"medias :\",medias);\r\n    displayGalerie(medias);\r\n\r\n    likes = medias.reduce(( totalLikes, media) => totalLikes + media.likes, 0)\r\n\r\n    fetchLikes();\r\n}\r\n\r\nconst fetchMedia = (photographer) => {\r\n    photograph = photographer;\r\n    getMedias();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/galerie.js?");

/***/ }),

/***/ "./js/imageFactory.js":
/*!****************************!*\
  !*** ./js/imageFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageFactory)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n\r\n\r\nclass ImageFactory {\r\n    constructor (imageData,addLike){\r\n        this.createImage(imageData);\r\n        this.likes = imageData.likes;\r\n        this.addLike = addLike;\r\n    }\r\n\r\n    createImage(data) {\r\n        this.divImagePost = document.createElement(\"div\");\r\n        this.divImagePost.className = \"poste__photo\";\r\n            \r\n        const divImageInfo = this.getInfo(data);\r\n        const divImage = this.getImage(data);\r\n    \r\n        this.divImagePost.append(divImageInfo, divImage);\r\n    \r\n        //return this.divImagePost;\r\n    }\r\n\r\n    getInfo(data){\r\n        const divImageInfo = document.createElement(\"div\");\r\n        divImageInfo.className = \"description__photo\";\r\n    \r\n        const imageDivName = this.getTitle(data);\r\n        const divLike = this.getLike(data);\r\n        const divLikeIcon = this.getLikeIcone(data);\r\n    \r\n        divImageInfo.append(imageDivName, divLike, divLikeIcon);\r\n    \r\n        return divImageInfo;\r\n    }\r\n\r\n    getTitle (data){\r\n        const imageDivName = document.createElement(\"div\");\r\n        imageDivName.className = \"nom__photo\";\r\n    \r\n        const imageName = document.createElement(\"h2\");\r\n        imageName.innerText = data.title;\r\n    \r\n        imageDivName.appendChild(imageName);\r\n    \r\n        return imageDivName;\r\n    }\r\n\r\n    getLike(data){\r\n        const divLike = document.createElement(\"div\");\r\n        divLike.className = \"nb__like\";\r\n    \r\n        this.nbLike = document.createElement(\"h2\");\r\n        this.nbLike.innerText = data.likes;\r\n    \r\n        divLike.appendChild(this.nbLike);\r\n    \r\n        return divLike;\r\n    }\r\n\r\n    //nombre de like lors du click sur l'icone\r\n    getLikeIcone (data){\r\n        const divLikeIcon = document.createElement(\"div\");\r\n        divLikeIcon.className = \"icone__like\";\r\n    \r\n        const likeIcone = document.createElement(\"i\");\r\n        likeIcone.className = \"fas fa-heart\";\r\n    \r\n        divLikeIcon.appendChild(likeIcone);\r\n\r\n        likeIcone.addEventListener('click', () => {\r\n            console.log('Le média a été liké');\r\n            this.likes += 1;\r\n            this.nbLike.innerText = this.likes;\r\n            this.addLike();\r\n        })\r\n    \r\n        return divLikeIcon;\r\n    }\r\n\r\n    getImage (data){\r\n        const divImage = document.createElement(\"div\");\r\n        divImage.className = \"div__img\";\r\n    \r\n        const image = document.createElement(\"img\")\r\n        image.src = \"images/\"+ data.photograph.name.split(\" \")[0] + \"/\" + data.image;\r\n    \r\n        divImage.appendChild(image);\r\n\r\n        divImage.addEventListener(\"click\", () =>{\r\n            (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\r\n        })\r\n    \r\n        return divImage;\r\n    }\r\n\r\n    appendTo(conteneur){\r\n        if (conteneur) {\r\n            conteneur.appendChild(this.divImagePost);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/imageFactory.js?");

/***/ }),

/***/ "./js/lightbox.js":
/*!************************!*\
  !*** ./js/lightbox.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n\r\n\r\nlet medias = [];\r\nlet selectedMediaIndex = 0;\r\nlet name = \"\";\r\nconst photographId = new URL(location.href).searchParams.get('id');\r\n\r\nconst lightbox = document.querySelector(\".lightbox\");\r\nconst closeBtn = document.querySelector(\".btn-close\");\r\nconst lightboxImage = document.querySelector(\".lightbox-image\");\r\nconst lightboxVideo = document.querySelector(\".lightbox-video\");\r\nconst btnPrev = document.querySelector(\".btn-prev\");\r\nconst btnNext = document.querySelector(\".btn-next\");\r\nconst mediaTitle = document.querySelector(\".title\");\r\n\r\n//position du media sélectionné pour la lightbox\r\nconst showSelectedMedia = (media) => {\r\n\r\n  if (media.image) {\r\n    lightboxVideo.style.display = \"none\";\r\n    lightboxImage.style.display = \"block\";\r\n    lightboxImage.src = \"images/\"+ name.split(\" \")[0] + \"/\" + media.image;\r\n  }else {\r\n    lightboxVideo.style.display = \"block\";\r\n    lightboxImage.style.display = \"none\";\r\n    lightboxVideo.src = \"images/\"+ name.split(\" \")[0] + \"/\" + media.video;\r\n  }\r\n\r\n  mediaTitle.innerText = media.title;\r\n}\r\n\r\nconst prev = (e) =>{\r\n  if (selectedMediaIndex == 0) {\r\n    selectedMediaIndex = medias.length -1;\r\n  } else{\r\n    selectedMediaIndex -=1;\r\n  }\r\n  const media = medias[selectedMediaIndex];\r\n  showSelectedMedia(media);\r\n}\r\n\r\nconst next = (e) =>{\r\n  if (selectedMediaIndex == medias.length -1) {\r\n    selectedMediaIndex = 0;\r\n  } else{\r\n    selectedMediaIndex +=1;\r\n  }\r\n  const media = medias[selectedMediaIndex];\r\n  showSelectedMedia(media);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((media) =>{\r\n  selectedMediaIndex = medias.findIndex(item => item.id == media.id);\r\n  lightbox.style.display = \"flex\";\r\n  name = media.photograph.name;\r\n  showSelectedMedia(media);\r\n});\r\n\r\nconst handleClose = (e) => lightbox.style.display = \"none\";\r\n\r\n\r\n/*\r\nconst modal = document.querySelector(\"#myModal\");\r\nconst modalClose = document.querySelector (\".close\");\r\nconst post = document.querySelector(\".post__photo\");\r\n\r\nmodalClose.addEventListener(\"click\", closeModal);\r\n//post.forEach((div) => div.addEventListener(\"click\", launchModal));\r\npost.addEventListener(\"click\", launchModal);\r\n\r\n// Open the Modal\r\nfunction openModal() {\r\n    modal.style.display = \"block\";\r\n}\r\n  \r\n// Close the Modal\r\nfunction closeModal() {\r\n    modal.style.display = \"none\";\r\n}\r\n\r\nwindow.onclick = function(event) {\r\n    if (event.target == modal) {\r\n        modal.style.display = \"none\";\r\n    }\r\n  }\r\n\r\n  var slideIndex = 1;\r\n  showSlides(slideIndex);\r\n  \r\n  // Next/previous controls\r\n  function plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n  }\r\n  \r\n  // Thumbnail image controls\r\n  function currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n  }\r\n  \r\n  function showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var captionText = document.getElementById(\"caption\");\r\n    if (n > slides.length) {slideIndex = 1}\r\n    if (n < 1) {slideIndex = slides.length}\r\n    for (i = 0; i < slides.length; i++) {\r\n      slides[i].style.display = \"none\";\r\n    }\r\n    slides[slideIndex-1].style.display = \"block\";\r\n  }\r\n*/\r\n\r\n(async function(){\r\n  medias = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(photographId);\r\n  closeBtn.addEventListener('click', handleClose);\r\n  btnPrev.addEventListener('click', prev);\r\n  btnNext.addEventListener('click', next);\r\n  console.log(medias);\r\n})()\n\n//# sourceURL=webpack://fisheye/./js/lightbox.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _imageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageFactory */ \"./js/imageFactory.js\");\n/* harmony import */ var _videoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoFactory */ \"./js/videoFactory.js\");\n\r\n\r\n\r\nclass MediaFactory {\r\n    constructor (mediaType, mediaData, addLike){\r\n\r\n        switch (mediaType) {\r\n            case \"image\":\r\n                return new _imageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mediaData, addLike);\r\n                break;\r\n            case \"video\":\r\n                return new _videoFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mediaData, addLike);\r\n                break;\r\n            default: \r\n            throw Error(\"Ce type de média n'est pas pris en compte\")\r\n                break;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/videoFactory.js":
/*!****************************!*\
  !*** ./js/videoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoFactory)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n\r\n\r\nclass VideoFactory{\r\n    constructor (videoData, addLike){\r\n        this.createVideo(videoData);\r\n        this.likes = videoData.likes;\r\n        this.addLike = addLike;\r\n\r\n        console.log('video')\r\n    }\r\n\r\n    createVideo(data) {\r\n        this.divVideoPost = document.createElement(\"div\");\r\n        this.divVideoPost.className = \"poste__video\";\r\n            \r\n        const divVideoInfo = this.getInfo(data);\r\n        const divVideo = this.getVideo(data);\r\n    \r\n        this.divVideoPost.append(divVideoInfo, divVideo);\r\n    }\r\n\r\n    getInfo(data){\r\n        const divVideoInfo = document.createElement(\"div\");\r\n        divVideoInfo.className = \"description__video\";\r\n    \r\n        const videoDivName = this.getTitle(data);\r\n        const divLike = this.getLike(data);\r\n        const divLikeIcon = this.getLikeIcone(data);\r\n    \r\n        divVideoInfo.append(videoDivName, divLike, divLikeIcon);\r\n    \r\n        return divVideoInfo;\r\n    }\r\n\r\n    getTitle (data){\r\n        const VideoDivName = document.createElement(\"div\");\r\n        VideoDivName.className = \"nom__video\";\r\n    \r\n        const VideoName = document.createElement(\"h2\");\r\n        VideoName.innerText = data.title;\r\n    \r\n        VideoDivName.appendChild(VideoName);\r\n    \r\n        return VideoDivName;\r\n    }\r\n\r\n    getLike(data){\r\n        const divLike = document.createElement(\"div\");\r\n        divLike.className = \"nb__like\";\r\n    \r\n        this.nbLike = document.createElement(\"h2\");\r\n        this.nbLike.innerText = data.likes;\r\n    \r\n        divLike.appendChild(this.nbLike);\r\n    \r\n        return divLike;\r\n    }\r\n\r\n    getLikeIcone (data){\r\n        const divLikeIcon = document.createElement(\"div\");\r\n        divLikeIcon.className = \"icone__like\";\r\n    \r\n        const likeIcone = document.createElement(\"i\");\r\n        likeIcone.className = \"fas fa-heart\";\r\n    \r\n        divLikeIcon.appendChild(likeIcone);\r\n\r\n        likeIcone.addEventListener('click', () => {\r\n            console.log('Le média a été liké');\r\n            this.likes += 1;\r\n            this.nbLike.innerText = this.likes;\r\n            this.addLike();\r\n        })\r\n    \r\n        return divLikeIcon;\r\n    }\r\n\r\n    getVideo (data){\r\n        console.log(\"vidéo en cours de lecture\")\r\n        const divVideo = document.createElement(\"div\");\r\n        divVideo.className = \"div__video\";\r\n    \r\n        const video = document.createElement(\"video\")\r\n        video.src = \"images/\" + data.photograph.name.split(\" \")[0] + \"/\" + data.video;\r\n\r\n        video.controls = true;\r\n    \r\n        divVideo.appendChild(video);\r\n\r\n        divVideo.addEventListener(\"click\", () =>{\r\n            (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\r\n        })\r\n    \r\n        return divVideo;\r\n    }\r\n\r\n    appendTo(conteneur){\r\n        if (conteneur) {\r\n            conteneur.appendChild(this.divVideoPost);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/videoFactory.js?");

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