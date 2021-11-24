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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhotograph\": () => (/* binding */ getPhotograph),\n/* harmony export */   \"getPhotographById\": () => (/* binding */ getPhotographById),\n/* harmony export */   \"getImage\": () => (/* binding */ getImage),\n/* harmony export */   \"getImageById\": () => (/* binding */ getImageById),\n/* harmony export */   \"getMediaByPhotographer\": () => (/* binding */ getMediaByPhotographer)\n/* harmony export */ });\nconst get = (url) => fetch(url);\r\n\r\nconst getData = async () => {\r\n  try {\r\n    const response = await get('data/data.json');\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    console.log('il y a eu un problème', error);\r\n    return null;\r\n  }\r\n};\r\n\r\nconst getPhotograph = async () => {\r\n  const data = await getData();\r\n  return data?.photographers;\r\n};\r\n\r\nconst getPhotographById = async (id) => {\r\n  const allPhotographers = await getPhotograph();\r\n  const photograph = allPhotographers.find((onePhotograph) => onePhotograph.id === Number(id));\r\n\r\n  return photograph;\r\n};\r\n\r\n// export images\r\nconst getImage = async () => {\r\n  const data = await getData();\r\n  return data?.media;\r\n};\r\n\r\nconst getImageById = async (id) => {\r\n  const allImages = await getImage();\r\n  const image = allImages.find((oneImage) => oneImage.id === Number(id));\r\n\r\n  return image;\r\n};\r\n\r\nconst getMediaByPhotographer = async (id) => {\r\n  const data = await getData();\r\n  const medias = data.media.filter((media) => media.photographerId === Number(id));\r\n  return medias;\r\n};\r\n\n\n//# sourceURL=webpack://fisheye/./js/dataProvider.js?");

/***/ }),

/***/ "./js/imageFactory.js":
/*!****************************!*\
  !*** ./js/imageFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageFactory)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n\r\n\r\nclass ImageFactory {\r\n  constructor(imageData, addLike) {\r\n    this.createImage(imageData);\r\n    this.likes = imageData.likes;\r\n    this.addLike = addLike;\r\n  }\r\n\r\n  createImage(data) {\r\n    this.divImagePost = document.createElement('div');\r\n    this.divImagePost.className = 'poste__photo';\r\n\r\n    const divImageInfo = this.getInfo(data);\r\n    const divImage = this.getImage(data);\r\n\r\n    this.divImagePost.append(divImageInfo, divImage);\r\n\r\n    // return this.divImagePost;\r\n  }\r\n\r\n  getInfo(data) {\r\n    const divImageInfo = document.createElement('div');\r\n    divImageInfo.className = 'description__photo';\r\n\r\n    const imageDivName = this.getTitle(data);\r\n    const divLike = this.getLike(data);\r\n    const divLikeIcon = this.getLikeIcone(data);\r\n\r\n    divImageInfo.append(imageDivName, divLike, divLikeIcon);\r\n\r\n    return divImageInfo;\r\n  }\r\n\r\n  getTitle(data) {\r\n    this.imageDivName = document.createElement('div');\r\n    this.imageDivName.className = 'nom__photo';\r\n\r\n    const imageName = document.createElement('h2');\r\n    imageName.innerText = data.title;\r\n\r\n    this.imageDivName.appendChild(imageName);\r\n\r\n    return this.imageDivName;\r\n  }\r\n\r\n  getLike(data) {\r\n    const divLike = document.createElement('div');\r\n    divLike.className = 'nb__like';\r\n\r\n    this.nbLike = document.createElement('h2');\r\n    this.nbLike.innerText = data.likes;\r\n\r\n    divLike.appendChild(this.nbLike);\r\n\r\n    return divLike;\r\n  }\r\n\r\n  // nombre de like lors du click sur l'icone\r\n  getLikeIcone() {\r\n    const divLikeIcon = document.createElement('div');\r\n    divLikeIcon.className = 'icone__like';\r\n\r\n    const likeIcone = document.createElement('i');\r\n    likeIcone.className = 'fas fa-heart';\r\n\r\n    divLikeIcon.appendChild(likeIcone);\r\n\r\n    likeIcone.addEventListener('click', () => {\r\n      console.log('Le média a été liké');\r\n      this.likes += 1;\r\n      this.nbLike.innerText = this.likes;\r\n      this.addLike();\r\n    });\r\n\r\n    return divLikeIcon;\r\n  }\r\n\r\n  getImage(data) {\r\n    this.divImage = document.createElement('a');\r\n    this.divImage.className = 'div__img';\r\n    this.divImage.href = '#';\r\n\r\n    const image = document.createElement('img');\r\n    image.src = `images/${data.photograph.name.split(' ')[0]}/${data.image}`;\r\n    image.alt = 'Photo posté par le Photographe';\r\n\r\n    this.divImage.appendChild(image);\r\n\r\n    this.divImage.addEventListener('click', () => {\r\n      (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\r\n    });\r\n\r\n    return this.divImage;\r\n  }\r\n\r\n  appendTo(conteneur) {\r\n    if (conteneur) {\r\n      conteneur.appendChild(this.divImagePost);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/imageFactory.js?");

/***/ }),

/***/ "./js/lightbox.js":
/*!************************!*\
  !*** ./js/lightbox.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n\r\n\r\nlet medias = [];\r\nlet selectedMediaIndex = 0;\r\nlet name = '';\r\n// eslint-disable-next-line no-restricted-globals\r\nconst photographId = new URL(location.href).searchParams.get('id');\r\n\r\nconst lightbox = document.querySelector('.lightbox');\r\nconst closeBtn = document.querySelector('.btn-close');\r\nconst lightboxImage = document.querySelector('.lightbox-image');\r\nconst lightboxVideo = document.querySelector('.lightbox-video');\r\nconst btnPrev = document.querySelector('.btn-prev');\r\nconst btnNext = document.querySelector('.btn-next');\r\nconst mediaTitle = document.querySelector('.title');\r\n\r\n// position du media sélectionné pour la lightbox\r\nconst showSelectedMedia = (media) => {\r\n  if (media.image) {\r\n    lightboxVideo.style.display = 'none';\r\n    lightboxImage.style.display = 'block';\r\n    lightboxImage.src = `images/${name.split(' ')[0]}/${media.image}`;\r\n  } else {\r\n    lightboxVideo.style.display = 'block';\r\n    lightboxImage.style.display = 'none';\r\n    lightboxVideo.src = `images/${name.split(' ')[0]}/${media.video}`;\r\n  }\r\n\r\n  mediaTitle.innerText = media.title;\r\n};\r\n\r\n// Fonction image précèdente\r\nconst prev = () => {\r\n  if (selectedMediaIndex === 0) {\r\n    selectedMediaIndex = medias.length - 1;\r\n  } else {\r\n    selectedMediaIndex -= 1;\r\n  }\r\n  const media = medias[selectedMediaIndex];\r\n  showSelectedMedia(media);\r\n};\r\n\r\n// Fonction image suivante\r\nconst next = () => {\r\n  if (selectedMediaIndex === medias.length - 1) {\r\n    selectedMediaIndex = 0;\r\n  } else {\r\n    selectedMediaIndex += 1;\r\n  }\r\n  const media = medias[selectedMediaIndex];\r\n  showSelectedMedia(media);\r\n};\r\n\r\nconst handleClose = () => { lightbox.style.display = 'none'; };\r\n\r\nconst lightboxNav = () => {\r\n  lightbox.addEventListener('keydown', (e) => {\r\n    console.log(e);\r\n    if (e.keyCode === 39) {\r\n      next();\r\n    } else if (e.keyCode === 37) {\r\n      prev();\r\n    } else if (e.keyCode === 27) {\r\n      handleClose();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((media) => {\r\n  selectedMediaIndex = medias.findIndex((item) => item.id === media.id);\r\n  lightbox.style.display = 'flex';\r\n  name = media.photograph.name;\r\n  btnPrev.focus();\r\n  showSelectedMedia(media);\r\n});\r\n\r\n(async function init() {\r\n  medias = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(photographId);\r\n  closeBtn.addEventListener('click', handleClose);\r\n  btnPrev.addEventListener('click', prev);\r\n  btnNext.addEventListener('click', next);\r\n  console.log(medias);\r\n  lightboxNav();\r\n}());\r\n\n\n//# sourceURL=webpack://fisheye/./js/lightbox.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _imageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageFactory */ \"./js/imageFactory.js\");\n/* harmony import */ var _videoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoFactory */ \"./js/videoFactory.js\");\n/* eslint-disable no-constructor-return */\r\n\r\n\r\n\r\nclass MediaFactory {\r\n  constructor(mediaType, mediaData, addLike) {\r\n    switch (mediaType) {\r\n      case 'image':\r\n        return new _imageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mediaData, addLike);\r\n      case 'video':\r\n        return new _videoFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mediaData, addLike);\r\n      default:\r\n        throw Error(\"Ce type de média n'est pas pris en compte\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/page.js":
/*!********************!*\
  !*** ./js/page.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataProvider */ \"./js/dataProvider.js\");\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ \"./js/sort.js\");\n// import {fetchMedia} from './galerie';\r\n\r\n\r\n\r\n\r\nlet medias = [];\r\nlet likes = 0;\r\n\r\n// eslint-disable-next-line no-restricted-globals\r\nconst photographId = new URL(location.href).searchParams.get('id');\r\nconsole.log('idPhotographe', photographId);\r\n\r\nlet photograph = null;\r\n\r\nconst fetchLikes = (likesCount) => {\r\n  const likeToFetch = likesCount || likes;\r\n\r\n  const divTotalLikes = document.querySelector('.total-likes');\r\n  divTotalLikes.innerText = likeToFetch;\r\n};\r\n\r\nconst addLike = () => {\r\n  likes += 1;\r\n  fetchLikes();\r\n};\r\n\r\nconst displayGalerie = (mediasArray) => {\r\n  console.table(mediasArray);\r\n  const galerie = document.querySelector('.galerie');\r\n\r\n  galerie.innerText = '';\r\n\r\n  // eslint-disable-next-line no-restricted-syntax\r\n  for (const media of mediasArray) {\r\n    const mediaType = media.image == null ? 'video' : 'image';\r\n    media.photograph = photograph;\r\n    const divVideoPost = new _mediaFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mediaType, media, addLike);\r\n    divVideoPost.appendTo(galerie);\r\n  }\r\n};\r\n\r\nconst nom = (data) => {\r\n  const divName = document.createElement('div');\r\n  divName.className = 'nom';\r\n\r\n  const textName = document.createElement('h1');\r\n  textName.innerText = data.name;\r\n\r\n  divName.appendChild(textName);\r\n\r\n  return divName;\r\n};\r\n\r\nconst cityAndIntro = (data) => {\r\n  const divCityAndIntro = document.createElement('div');\r\n  divCityAndIntro.className = 'div__ville__intro';\r\n\r\n  const textCity = document.createElement('h3');\r\n  textCity.className = 'ville';\r\n  textCity.innerText = `${data.city}, ${data.country}`;\r\n\r\n  const TextIntro = document.createElement('h3');\r\n  TextIntro.className = 'phrase-intro';\r\n  TextIntro.innerText = data.tagline;\r\n\r\n  divCityAndIntro.append(textCity, TextIntro);\r\n\r\n  return divCityAndIntro;\r\n};\r\n\r\nconst hashtag = (data) => {\r\n  const divHashtag = document.createElement('div');\r\n  divHashtag.className = 'div__hashtags';\r\n\r\n  // eslint-disable-next-line no-restricted-syntax\r\n  for (const tag of data.tags) {\r\n    const divTag = document.createElement('div');\r\n    divTag.innerText = `#${tag}`;\r\n\r\n    divHashtag.appendChild(divTag);\r\n  }\r\n\r\n  return divHashtag;\r\n};\r\n\r\nconst displayImagePhotograph = (data) => {\r\n  const divImage = document.querySelector('.img__profile');\r\n  divImage.src = `images/Photographers/${data.portrait}`;\r\n  divImage.alt = 'Photo de profil du photographe';\r\n};\r\n\r\nconst displayInfoProfil = (data) => {\r\n  const divInfoProfil = document.createElement('div');\r\n  divInfoProfil.className = 'div__info-profil';\r\n\r\n  const divName = nom(data);\r\n\r\n  const divCityAndIntro = cityAndIntro(data);\r\n\r\n  const divHashtag = hashtag(data);\r\n\r\n  divInfoProfil.append(divName, divCityAndIntro, divHashtag);\r\n\r\n  displayImagePhotograph(data);\r\n\r\n  return divInfoProfil;\r\n};\r\n\r\nconst conteneur = (data) => {\r\n  const conteneur1 = document.querySelector('.conteneur1');\r\n\r\n  const divInfoProfil = displayInfoProfil(data);\r\n\r\n  conteneur1.prepend(divInfoProfil);\r\n};\r\n\r\n// fonction filtre\r\nfunction globalFilter(e) {\r\n  e.preventDefault();\r\n  e.stopPropagation();\r\n  const { value } = e.target;\r\n  console.log(`attribut de filtre : ${value}`);\r\n\r\n  let sortMedias = [];\r\n\r\n  switch (value) {\r\n    case 'popularite':\r\n      sortMedias = (0,_sort__WEBPACK_IMPORTED_MODULE_2__.sortByTrending)(medias);\r\n      displayGalerie(sortMedias);\r\n      break;\r\n    case 'titre':\r\n      sortMedias = (0,_sort__WEBPACK_IMPORTED_MODULE_2__.sortByTitle)(medias);\r\n      displayGalerie(sortMedias);\r\n      break;\r\n\r\n    case 'date':\r\n      sortMedias = (0,_sort__WEBPACK_IMPORTED_MODULE_2__.sortByDate)(medias);\r\n      displayGalerie(sortMedias);\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n}\r\n\r\nconst select = document.querySelector('.sous');\r\nselect.addEventListener('change', globalFilter);\r\n\r\nconst getMedias = async () => {\r\n  medias = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(photograph.id);\r\n  console.log('medias :', medias);\r\n  medias = (0,_sort__WEBPACK_IMPORTED_MODULE_2__.sortByTrending)(medias);\r\n  displayGalerie(medias);\r\n\r\n  likes = medias.reduce((totalLikes, media) => totalLikes + media.likes, 0);\r\n\r\n  fetchLikes();\r\n};\r\n\r\nconst fetchMedia = (photographer) => {\r\n  photograph = photographer;\r\n  getMedias();\r\n};\r\n\r\nconst getPhotographData = async () => {\r\n  photograph = await (0,_dataProvider__WEBPACK_IMPORTED_MODULE_0__.getPhotographById)(photographId);\r\n  conteneur(photograph);\r\n  fetchMedia(photograph);\r\n};\r\n\r\ngetPhotographData();\r\n\n\n//# sourceURL=webpack://fisheye/./js/page.js?");

/***/ }),

/***/ "./js/sort.js":
/*!********************!*\
  !*** ./js/sort.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByTrending\": () => (/* binding */ sortByTrending),\n/* harmony export */   \"sortByTitle\": () => (/* binding */ sortByTitle),\n/* harmony export */   \"sortByDate\": () => (/* binding */ sortByDate)\n/* harmony export */ });\nconst trendingSort = (a, b) => b.likes - a.likes;\r\n\r\nconst sortByTrending = (medias) => medias.sort(trendingSort);\r\n\r\nconst titleSort = (a, b) => {\r\n  if (a.title <= b.title) {\r\n    return -1;\r\n  }\r\n  return 1;\r\n};\r\n\r\nconst sortByTitle = (medias) => medias.sort(titleSort);\r\n\r\nconst dateSort = (a, b) => {\r\n  if (a.date <= b.date) {\r\n    return -1;\r\n  }\r\n  return 1;\r\n};\r\n\r\nconst sortByDate = (medias) => medias.sort(dateSort);\r\n\n\n//# sourceURL=webpack://fisheye/./js/sort.js?");

/***/ }),

/***/ "./js/videoFactory.js":
/*!****************************!*\
  !*** ./js/videoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoFactory)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n\r\n\r\nclass VideoFactory {\r\n  constructor(videoData, addLike) {\r\n    this.createVideo(videoData);\r\n    this.likes = videoData.likes;\r\n    this.addLike = addLike;\r\n\r\n    console.log('video');\r\n  }\r\n\r\n  createVideo(data) {\r\n    this.divVideoPost = document.createElement('div');\r\n    this.divVideoPost.className = 'poste__video';\r\n\r\n    const divVideoInfo = this.getInfo(data);\r\n    const divVideo = this.getVideo(data);\r\n\r\n    this.divVideoPost.append(divVideoInfo, divVideo);\r\n  }\r\n\r\n  getInfo(data) {\r\n    const divVideoInfo = document.createElement('div');\r\n    divVideoInfo.className = 'description__video';\r\n\r\n    const videoDivName = this.getTitle(data);\r\n    const divLike = this.getLike(data);\r\n    const divLikeIcon = this.getLikeIcone(data);\r\n\r\n    divVideoInfo.append(videoDivName, divLike, divLikeIcon);\r\n\r\n    return divVideoInfo;\r\n  }\r\n\r\n  getTitle(data) {\r\n    this.VideoDivName = document.createElement('div');\r\n    this.VideoDivName.className = 'nom__video';\r\n\r\n    const VideoName = document.createElement('h2');\r\n    VideoName.innerText = data.title;\r\n\r\n    this.VideoDivName.appendChild(VideoName);\r\n\r\n    return this.VideoDivName;\r\n  }\r\n\r\n  getLike(data) {\r\n    const divLike = document.createElement('div');\r\n    divLike.className = 'nb__like';\r\n\r\n    this.nbLike = document.createElement('h2');\r\n    this.nbLike.innerText = data.likes;\r\n\r\n    divLike.appendChild(this.nbLike);\r\n\r\n    return divLike;\r\n  }\r\n\r\n  getLikeIcone() {\r\n    const divLikeIcon = document.createElement('div');\r\n    divLikeIcon.className = 'icone__like';\r\n\r\n    const likeIcone = document.createElement('i');\r\n    likeIcone.className = 'fas fa-heart';\r\n\r\n    divLikeIcon.appendChild(likeIcone);\r\n\r\n    likeIcone.addEventListener('click', () => {\r\n      console.log('Le média a été liké');\r\n      this.likes += 1;\r\n      this.nbLike.innerText = this.likes;\r\n      this.addLike();\r\n    });\r\n\r\n    return divLikeIcon;\r\n  }\r\n\r\n  getVideo(data) {\r\n    console.log('vidéo en cours de lecture');\r\n    this.divVideo = document.createElement('a');\r\n    this.divVideo.className = 'div__video';\r\n    this.divVideo.href = '#';\r\n\r\n    const video = document.createElement('video');\r\n    video.src = `images/${data.photograph.name.split(' ')[0]}/${data.video}`;\r\n\r\n    video.controls = true;\r\n\r\n    this.divVideo.appendChild(video);\r\n\r\n    this.divVideo.addEventListener('click', () => {\r\n      (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\r\n    });\r\n\r\n    return this.divVideo;\r\n  }\r\n\r\n  appendTo(conteneur) {\r\n    if (conteneur) {\r\n      conteneur.appendChild(this.divVideoPost);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/videoFactory.js?");

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