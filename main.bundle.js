/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	// This file is in the entry point in your webpack config.
	var navBar = $('nav');
	var title = $('.background-pic-title');
	var navSearchInput = $("#nav-search-bar");
	var navSearchButton = $("#nav-search-button");
	var loginTab = $("#login-tab");
	var loginArrow = $(".login-arrow-up");
	var loginForm = $(".login-form");
	var regTab = $("#register-tab");
	var regArrow = $(".register-arrow-up");
	var regForm = $(".register-form");

	var loginButton = false;
	var regButton = false;

	navSearchInput.keyup(function (event) {
	    if (event.keyCode === 13) {
	        navSearchButton.click();
	        navSearchInput.val("");
	    }
	});

	// sticky navbar scroll change
	$(window).scroll(function () {
	    if ($(window).scrollTop()) {
	        navBar.addClass('black');
	        title.fadeOut();
	    } else {
	        navBar.removeClass('black');
	        title.fadeIn();
	    }
	});

	//get and display weather
	var getWeather = function getWeather() {
	    fetch('https://fierce-crag-36750.herokuapp.com/api/v1/forecast?location=' + navSearchInput.val()).then(function (response) {
	        return response.json();
	    }).then(function (rawForecastData) {
	        return cleanForecastData(rawForecastData);
	    }).then(function (cleanedForecastData) {
	        return buildWeatherCards(cleanedForecastData);
	    }).catch(function (error) {
	        return console.error({ error: error });
	    });
	};

	var cleanForecastData = function cleanForecastData(rawForecastData) {
	    return rawForecastData.data.attributes;
	};

	var buildHours = function buildHours(hour) {
	    $('.forecast').append('\n        <div class="hour">\n            <h1>' + hour.hour + '</h1>\n            <img src="/assets/' + hour.icon + '.png" id="hour-weather-icon">\n            <h1>' + parseToFarenheit(hour.temp) + '</h1>\n            <p>Precip</p>\n            <p>' + parseToPercent(hour.chance_of_precipitation) + '</p>\n        </div>\n    ');
	};

	var buildDays = function buildDays(day) {
	    $('.forecast').append('\n        <div class="day">\n            <h1>' + day.day + ' <img src="/assets/' + day.icon + '.png" id="day-weather-icon"></h1>\n            <h2>High: ' + parseToFarenheit(day.high_temp) + '</h2>\n            <h2>Low: ' + parseToFarenheit(day.low_temp) + '</h2>\n            <p>' + day.summary + '</p>\n            <p><strong>' + parseToPercent(day.chance_of_precipitation) + '</strong> chance of precipitation</p>\n        </div>\n    ');
	};

	var parseToPercent = function parseToPercent(data) {
	    return Math.round(data * 100) + '%';
	};
	var parseToFarenheit = function parseToFarenheit(data) {
	    return Math.round(data) + '\xB0';
	};

	var buildWeatherCards = function buildWeatherCards(forecast) {
	    $('.band').html('');
	    $('.band').append('\n        <div class="top-card">\n            <div class="left-first">\n                <h1>' + parseToFarenheit(forecast.current_temp) + '</h1>\n                <p>' + forecast.current_summary + '</p>\n                <p><strong>High:</strong> ' + parseToFarenheit(forecast.current_high) + '</p>\n                <p><strong>Low:</strong> ' + parseToFarenheit(forecast.current_low) + '</p>\n            </div>\n            <div class="right">\n                <h1>' + forecast.location + '</h1>\n                <p><strong>Time:</strong> ' + forecast.current_time + '</p>\n                <p><strong>Date:</strong> ' + forecast.current_date + '</p>\n            </div>\n        </div>\n        <div class="top-card">\n            <div class="left-second">\n                <h2>Todays Weather:</h2>\n                <p>' + forecast.current_summary + '</p>\n                <h2>Tonights Weather:</h2>\n                <p class="summary">' + forecast.later_summary + '</p>\n            </div>\n            <div class="right">\n                <p><strong>Humidity:</strong> ' + parseToPercent(forecast.current_humidity) + '</p>\n                <p><strong>Feels like:</strong> ' + parseToFarenheit(forecast.current_feels_like) + '</p>\n                <p><strong>Visibility:</strong> ' + forecast.current_visibility + ' miles</p>\n                <p><strong>UV index:</strong> ' + forecast.current_uv_index + '</p>\n            </div>\n        </div>\n        <div class="bottom-card">\n            <div class="forecast">\n            </div>\n        </div>\n    ');
	    forecast.hourly.slice(-10).forEach(function (hour) {
	        buildHours(hour);
	    });

	    forecast.daily.forEach(function (day) {
	        buildDays(day);
	    });
	};

	var getBackground = function getBackground() {
	    fetch('https://fierce-crag-36750.herokuapp.com/api/v1/backgrounds?location=' + navSearchInput.val()).then(function (response) {
	        return response.json();
	    }).then(function (rawBackgroundData) {
	        return cleanBackgroundData(rawBackgroundData);
	    }).then(function (cleanedBackgroundData) {
	        return changeBackgroundImage(cleanedBackgroundData);
	    }).catch(function (error) {
	        return console.error({ error: error });
	    });
	};

	var cleanBackgroundData = function cleanBackgroundData(rawBackgroundData) {
	    return rawBackgroundData.data.attributes;
	};

	var changeBackgroundImage = function changeBackgroundImage(background) {
	    $('body').css({ 'background-image': 'url(' + background.link + ')' });
	    $('.background-pic-title').text(background.title);
	    $('.background-pic-title').fadeIn();
	};

	// search triggers get weather function
	navSearchButton.click(function () {
	    getWeather();
	    getBackground();
	});

	// dropdown login form
	loginTab.click(function (event) {
	    event.preventDefault();
	    if (loginButton == false) {
	        loginArrow.fadeIn();
	        loginForm.fadeIn();
	        loginTab.addClass('tab-color');
	        regArrow.fadeOut();
	        regForm.fadeOut();
	        regTab.removeClass('tab-color');
	        loginButton = true;
	    } else {
	        loginArrow.fadeOut();
	        loginForm.fadeOut();
	        loginTab.removeClass('tab-color');
	        loginButton = false;
	    }
	});

	// dropdown register form
	regTab.click(function (event) {
	    event.preventDefault();
	    if (regButton == false) {
	        regArrow.fadeIn();
	        regForm.fadeIn();
	        regTab.addClass('tab-color');
	        loginArrow.fadeOut();
	        loginForm.fadeOut();
	        loginTab.removeClass('tab-color');
	        regButton = true;
	    } else {
	        regArrow.fadeOut();
	        regForm.fadeOut();
	        regButton = false;
	        regTab.removeClass('tab-color');
	    }
	});

	var titleButton = false;
	var cards = $('.band');

	$('.background-pic-title').click(function (event) {
	    event.preventDefault();
	    if (titleButton == false) {
	        cards.fadeOut();
	        titleButton = true;
	    } else {
	        cards.fadeIn();
	        titleButton = false;
	    }
	});

/***/ })
/******/ ]);