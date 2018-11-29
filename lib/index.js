// This file is in the entry point in your webpack config.
const navBar = $('nav');
const loginArrow = $(".login-arrow-up");
const loginForm = $(".login-form");
const loginTab = $("#login-tab");
const regArrow = $(".register-arrow-up");
const regForm = $(".register-form");
const regTab = $("#register-tab");
var loginButton = false;
var regButton = false;

// sticky navbar scroll change
$(window).scroll(function() {
    if($(window).scrollTop()) {
        navBar.addClass('black');
    } else {
        navBar.removeClass('black');
    }
})

// dropdown login form
loginTab.click(function(event) {
    event.preventDefault();
    if(loginButton == false) {
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
})
// dropdown register form
regTab.click(function(event) {
    event.preventDefault();
    if(regButton == false) {
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
})