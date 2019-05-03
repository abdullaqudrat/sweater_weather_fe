/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This file is in the entry point in your webpack config.\nvar navBar = $('nav');\nvar title = $('.background-pic-title');\nvar navSearchInput = $(\"#nav-search-bar\");\nvar navSearchButton = $(\"#nav-search-button\");\nvar loginTab = $(\"#login-tab\");\nvar loginArrow = $(\".login-arrow-up\");\nvar loginForm = $(\".login-form\");\nvar regTab = $(\"#register-tab\");\nvar regArrow = $(\".register-arrow-up\");\nvar regForm = $(\".register-form\");\nvar loginButton = false;\nvar regButton = false;\nnavSearchInput.keyup(function (event) {\n  if (event.keyCode === 13) {\n    navSearchButton.click();\n    navSearchInput.val(\"\");\n  }\n}); // sticky navbar scroll change\n\n$(window).scroll(function () {\n  if ($(window).scrollTop()) {\n    navBar.addClass('black');\n    title.fadeOut();\n  } else {\n    navBar.removeClass('black');\n    title.fadeIn();\n  }\n}); //get and display weather\n\nvar getWeather = function getWeather() {\n  fetch(\"https://fierce-crag-36750.herokuapp.com/api/v1/forecast?location=\".concat(navSearchInput.val())).then(function (response) {\n    return response.json();\n  }).then(function (rawForecastData) {\n    return cleanForecastData(rawForecastData);\n  }).then(function (cleanedForecastData) {\n    return buildWeatherCards(cleanedForecastData);\n  })[\"catch\"](function (error) {\n    return console.error({\n      error: error\n    });\n  });\n};\n\nvar cleanForecastData = function cleanForecastData(rawForecastData) {\n  return rawForecastData.data.attributes;\n};\n\nvar buildHours = function buildHours(hour) {\n  $('.forecast').append(\"\\n        <div class=\\\"hour\\\">\\n            <h1>\".concat(hour.hour, \"</h1>\\n            <img src=\\\"/assets/\").concat(hour.icon, \".png\\\" id=\\\"hour-weather-icon\\\">\\n            <h1>\").concat(parseToFarenheit(hour.temp), \"</h1>\\n            <p>Precip</p>\\n            <p>\").concat(parseToPercent(hour.chance_of_precipitation), \"</p>\\n        </div>\\n    \"));\n};\n\nvar buildDays = function buildDays(day) {\n  $('.forecast').append(\"\\n        <div class=\\\"day\\\">\\n            <h1>\".concat(day.day, \" <img src=\\\"/assets/\").concat(day.icon, \".png\\\" id=\\\"day-weather-icon\\\"></h1>\\n            <h2>High: \").concat(parseToFarenheit(day.high_temp), \"</h2>\\n            <h2>Low: \").concat(parseToFarenheit(day.low_temp), \"</h2>\\n            <p>\").concat(day.summary, \"</p>\\n            <p><strong>\").concat(parseToPercent(day.chance_of_precipitation), \"</strong> chance of precipitation</p>\\n        </div>\\n    \"));\n};\n\nvar parseToPercent = function parseToPercent(data) {\n  return \"\".concat(Math.round(data * 100), \"%\");\n};\n\nvar parseToFarenheit = function parseToFarenheit(data) {\n  return \"\".concat(Math.round(data), \"\\xB0\");\n};\n\nvar buildWeatherCards = function buildWeatherCards(forecast) {\n  $('.band').html('');\n  $('.band').append(\"\\n        <div class=\\\"top-card\\\">\\n            <div class=\\\"left-first\\\">\\n                <h1>\".concat(parseToFarenheit(forecast.current_temp), \"</h1>\\n                <p>\").concat(forecast.current_summary, \"</p>\\n                <p><strong>High:</strong> \").concat(parseToFarenheit(forecast.current_high), \"</p>\\n                <p><strong>Low:</strong> \").concat(parseToFarenheit(forecast.current_low), \"</p>\\n            </div>\\n            <div class=\\\"right\\\">\\n                <h1>\").concat(forecast.location, \"</h1>\\n                <p><strong>Time:</strong> \").concat(forecast.current_time, \"</p>\\n                <p><strong>Date:</strong> \").concat(forecast.current_date, \"</p>\\n            </div>\\n        </div>\\n        <div class=\\\"top-card\\\">\\n            <div class=\\\"left-second\\\">\\n                <h2>Todays Weather:</h2>\\n                <p>\").concat(forecast.current_summary, \"</p>\\n                <h2>Tonights Weather:</h2>\\n                <p class=\\\"summary\\\">\").concat(forecast.later_summary, \"</p>\\n            </div>\\n            <div class=\\\"right\\\">\\n                <p><strong>Humidity:</strong> \").concat(parseToPercent(forecast.current_humidity), \"</p>\\n                <p><strong>Feels like:</strong> \").concat(parseToFarenheit(forecast.current_feels_like), \"</p>\\n                <p><strong>Visibility:</strong> \").concat(forecast.current_visibility, \" miles</p>\\n                <p><strong>UV index:</strong> \").concat(forecast.current_uv_index, \"</p>\\n            </div>\\n        </div>\\n        <div class=\\\"bottom-card\\\">\\n            <div class=\\\"forecast\\\">\\n            </div>\\n        </div>\\n    \"));\n  forecast.hourly.slice(-10).forEach(function (hour) {\n    buildHours(hour);\n  });\n  forecast.daily.forEach(function (day) {\n    buildDays(day);\n  });\n};\n\nvar getBackground = function getBackground() {\n  fetch(\"https://fierce-crag-36750.herokuapp.com/api/v1/backgrounds?location=\".concat(navSearchInput.val())).then(function (response) {\n    return response.json();\n  }).then(function (rawBackgroundData) {\n    return cleanBackgroundData(rawBackgroundData);\n  }).then(function (cleanedBackgroundData) {\n    return changeBackgroundImage(cleanedBackgroundData);\n  })[\"catch\"](function (error) {\n    return console.error({\n      error: error\n    });\n  });\n};\n\nvar cleanBackgroundData = function cleanBackgroundData(rawBackgroundData) {\n  return rawBackgroundData.data.attributes;\n};\n\nvar changeBackgroundImage = function changeBackgroundImage(background) {\n  $('body').css({\n    'background-image': \"url(\".concat(background.link, \")\")\n  });\n  $('.background-pic-title').text(background.title);\n  $('.background-pic-title').fadeIn();\n}; // search triggers get weather function\n\n\nnavSearchButton.click(function () {\n  getWeather();\n  getBackground();\n}); // dropdown login form\n\nloginTab.click(function (event) {\n  event.preventDefault();\n\n  if (loginButton == false) {\n    loginArrow.fadeIn();\n    loginForm.fadeIn();\n    loginTab.addClass('tab-color');\n    regArrow.fadeOut();\n    regForm.fadeOut();\n    regTab.removeClass('tab-color');\n    loginButton = true;\n  } else {\n    loginArrow.fadeOut();\n    loginForm.fadeOut();\n    loginTab.removeClass('tab-color');\n    loginButton = false;\n  }\n}); // dropdown register form\n\nregTab.click(function (event) {\n  event.preventDefault();\n\n  if (regButton == false) {\n    regArrow.fadeIn();\n    regForm.fadeIn();\n    regTab.addClass('tab-color');\n    loginArrow.fadeOut();\n    loginForm.fadeOut();\n    loginTab.removeClass('tab-color');\n    regButton = true;\n  } else {\n    regArrow.fadeOut();\n    regForm.fadeOut();\n    regButton = false;\n    regTab.removeClass('tab-color');\n  }\n});\nvar titleButton = false;\nvar cards = $('.band');\n$('.background-pic-title').click(function (event) {\n  event.preventDefault();\n\n  if (titleButton == false) {\n    cards.fadeOut();\n    titleButton = true;\n  } else {\n    cards.fadeIn();\n    titleButton = false;\n  }\n});\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ })

/******/ });