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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst getWeatherBtn = document.getElementById('get-weather');\nconst addressDiv = document.querySelector('p');\nconst api_key = 'BKULCM6WCG2SXVP8Y4EU7SY3W';\nconst print =\n\t'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=';\n\nasync function getWeather() {\n\ttry {\n\t\tconst response = await fetch(\n\t\t\t`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=${api_key}`,\n\t\t);\n\t\tconst weatherData = await response.json();\n\t\taddressDiv.textContent = weatherData.address;\n\t\tdocument.body.appendChild(addressDiv);\n\t\tgetWeatherBtn.addEventListener('click', () => {\n\t\t\tconsole.log(weatherData);\n\t\t});\n\t} catch (error) {\n\t\tconsole.error(error);\n\t}\n}\ngetWeather();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;