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


	// sticky navbar scroll change
	$(window).on('scroll', function () {
	    if ($(window).scrollTop()) {
	        $('nav').addClass('black');
	    } else {
	        $('nav').removeClass('black');
	    }
	});

	// dropdown login form
	$(document).ready(function () {
	    var loginArrow = $(".login-arrow-up");
	    var loginForm = $(".login-form");
	    var loginTab = $("#login-tab");
	    var regArrow = $(".register-arrow-up");
	    var regForm = $(".register-form");
	    var regTab = $("#register-tab");
	    var status = false;
	    loginTab.on('click', function (event) {
	        event.preventDefault();
	        if (status == false) {
	            loginArrow.fadeIn();
	            loginForm.fadeIn();
	            loginTab.addClass('tab-color');
	            regArrow.fadeOut();
	            regForm.fadeOut();
	            regTab.removeClass('tab-color');
	            status = true;
	        } else {
	            loginArrow.fadeOut();
	            loginForm.fadeOut();
	            loginTab.removeClass('tab-color');
	            status = false;
	        }
	    });
	});

	// dropdown register form
	$(document).ready(function () {
	    var loginArrow = $(".login-arrow-up");
	    var loginForm = $(".login-form");
	    var loginTab = $("#login-tab");
	    var regArrow = $(".register-arrow-up");
	    var regForm = $(".register-form");
	    var regTab = $("#register-tab");
	    var status = false;
	    regTab.on('click', function (event) {
	        event.preventDefault();
	        if (status == false) {
	            regArrow.fadeIn();
	            regForm.fadeIn();
	            regTab.addClass('tab-color');
	            loginArrow.fadeOut();
	            loginForm.fadeOut();
	            loginTab.removeClass('tab-color');
	            status = true;
	        } else {
	            regArrow.fadeOut();
	            regForm.fadeOut();
	            status = false;
	            regTab.removeClass('tab-color');
	        }
	    });
	});

/***/ })
/******/ ]);