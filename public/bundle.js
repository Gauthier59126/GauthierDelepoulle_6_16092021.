/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("const portrait = (data) => {\r\n    const divPortrait =  document.createElement(\"div\");\r\n    divPortrait.className = \"div__portrait\";\r\n\r\n    const divImage =  document.createElement(\"div\");\r\n\r\n    const linkPhotograph =  document.createElement(\"a\");\r\n    linkPhotograph.href = \"Mimi-Keel.html\";\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = \"images/Mimi/Portrait_Nora.jpg\";\r\n\r\n    linkPhotograph.appendChild(image);\r\n    divImage.appendChild(linkPhotograph);\r\n    divPortrait.appendChild(divImage);\r\n\r\n    const nom = document.createElement(\"div\");\r\n    nom.className = \"nom\";\r\n\r\n    const linkPhotograph2 =  document.createElement(\"a\");\r\n    linkPhotograph2.href = \"Mimi-Keel.html\";\r\n\r\n    const namePhotograph = document.createElement(\"h1\");\r\n    namePhotograph.innerText = \"Mimi Kell\";\r\n\r\n    linkPhotograph2.appendChild(namePhotograph);\r\n    nom.appendChild(linkPhotograph2);\r\n    divPortrait.appendChild(nom);\r\n\r\n    return divPortrait;\r\n}\r\n\r\nconst info = (data) => {\r\n    const divInfo = document.createElement(\"div\");\r\n    divInfo.className = \"div__info\"; \r\n\r\n    const city = document.createElement(\"h3\");\r\n    city.className = \"ville\";\r\n    city.innerText = \"London, UK\";\r\n\r\n    const intro = document.createElement(\"h3\");\r\n    intro.className = \"phrase-intro\";\r\n    intro.innerText = \"Voir le beau dans le quotidien\";\r\n\r\n    const price = document.createElement(\"h3\");\r\n    price.className = \"tarif\";\r\n    price.innerText = \"400€/jour\";\r\n\r\n    divInfo.append(city, intro, price);\r\n\r\n    return divInfo;\r\n\r\n\r\n}\r\n\r\nconst hashtag = (data) =>{\r\n    const divHashtag = document.createElement(\"div\");\r\n    divHashtag.className = \"div__hashtags\";\r\n\r\n    const portrait = document.createElement(\"div\");\r\n    portrait.innerText = \"#portrait\";\r\n\r\n    const events = document.createElement(\"div\");\r\n    events.innerText = \"#events\";\r\n\r\n    const travel = document.createElement(\"div\");\r\n    travel.innerText = \"#travel\";\r\n\r\n    const animals = document.createElement(\"div\");\r\n    animals.innerText = \"#animals\";\r\n\r\n    divHashtag.append(portrait, events, travel, animals);\r\n\r\n    return divHashtag;\r\n}\r\n\r\n// fonction div photographes\r\nconst displayPhotograph = (data) => {\r\n    const divPhotograph =  document.createElement(\"div\");\r\n    divPhotograph.className = \"div__photograph\";\r\n\r\n    const divPortrait = portrait(data);\r\n\r\n    const divInfo = info(data);\r\n\r\n    const divHashtag = hashtag(data);\r\n\r\n    divPhotograph.append(divPortrait, divInfo, divHashtag);\r\n\r\n    const conteneur11 = document.querySelector('.conteneur1_1');\r\n    conteneur11.prepend(divPhotograph);\r\n}\r\n\r\n//displayPhotograph();\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;