// This file is in the entry point in your webpack config.


// sticky navbar scroll change
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})


// dropdown login form
$(document).ready(function() {
    var loginArrow = $(".login-arrow-up");
    var loginForm = $(".login-form");
    var loginTab = $("#login-tab");
    var regArrow = $(".register-arrow-up");
    var regForm = $(".register-form");
    var regTab = $("#register-tab");
    var status = false;
    loginTab.on('click', function(event) {
        event.preventDefault();
        if(status == false) {
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
    })
})

// dropdown register form
$(document).ready(function() {
    var loginArrow = $(".login-arrow-up");
    var loginForm = $(".login-form");
    var loginTab = $("#login-tab");
    var regArrow = $(".register-arrow-up");
    var regForm = $(".register-form");
    var regTab = $("#register-tab");
    var status = false;
    regTab.on('click', function(event) {
        event.preventDefault();
        if(status == false) {
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
    })
})