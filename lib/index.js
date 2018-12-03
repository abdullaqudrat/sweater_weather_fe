// This file is in the entry point in your webpack config.
const navBar = $('nav');
const navSearchInput = $("#nav-search-bar")
const navSearchButton = $("#nav-search-button")
const loginTab = $("#login-tab");
const loginArrow = $(".login-arrow-up");
const loginForm = $(".login-form");
const regTab = $("#register-tab");
const regArrow = $(".register-arrow-up");
const regForm = $(".register-form");

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

//get and display weather
const getWeather = () => {
    fetch(`https://fierce-crag-36750.herokuapp.com/api/v1/forecast?location=${navSearchInput.val()}`)
    .then((response) => response.json())
    .then((rawForecastData) => cleanForecastData(rawForecastData))
    .then((cleanedForecastData) => buildWeatherCards(cleanedForecastData))
    .catch((error) => console.error({ error }));
}

const cleanForecastData = (rawForecastData) => {
    return rawForecastData.data.attributes;
}

const buildHours = (hour) => {
    $('.forecast').append(`
        <div class="hour">
            <h1>${hour.hour}</h1>
            <p>${hour.temp}</p>
            <p>${hour.summary}</p>
            <p>${hour.chance_of_precipitation}</p>
            <p>temp conv, chance of percip<p>
            <p>eps need work<p>
        </div>
    `);
}

const buildDays = (day) => {
    $('.forecast').append(`
        <div class="day">
            <h1>${day.day}</h1>
            <p>${day.high_temp}</p>
            <p>${day.low_temp}</p>
            <p>${day.summary}</p>
            <p>${day.chance_of_precipitation}</p>
            <p>temp conv, chance of percip<p>
            <p>eps need work<p>
        </div>
    `);
}

const buildWeatherCards = (forecast) => {
    $('.band').html('');
    $('.band').append(`
        <div class="top-card">
            <div class="left">
                <h1>${forecast.current_temp}</h1>
                <p>${forecast.current_summary}</p>
                <p>high: needs current high end point</p>
                <p>low: needs current low end point</p>
            </div>
            <div class="right">
                <h1>${forecast.location}</h1>
                <p>${forecast.current_time} fix time ep</p>
                <p>Need date end point</p>
            </div>
        </div>
        <div class="top-card">
            <div class="left">
                <h2>Todays Weather:</h2>
                <p>${forecast.current_summary}</p>
                <h2>Tonights Weather</h2>
                <p>${forecast.later_summary}</p>
            </div>
            <div class="right">
                <h2>Humidity: ${forecast.current_humidity}</h2>
                <p>Feels like: ${forecast.current_feels_like}</p>
                <p>visibility: ${forecast.current_visibility}</p>
                <p>UV index: ${forecast.current_uv_index}</p>
            </div>
        </div>
        <div class="bottom-card">
            <div class="forecast">
            </div>
        </div>
    `);
    forecast.hourly.forEach(hour => {
        buildHours(hour);
    });

    forecast.daily.forEach(day => {
        buildDays(day);
    });
}

const getBackground = () => {
    fetch(`https://fierce-crag-36750.herokuapp.com/api/v1/backgrounds?location=${navSearchInput.val()}`)
    .then((response) => response.json())
    .then((rawBackgroundData) => cleanBackgroundData(rawBackgroundData))
    .then((cleanedBackgroundData) => changeBackgroundImage(cleanedBackgroundData))
    .catch((error) => console.error({ error }));
}

const cleanBackgroundData = (rawBackgroundData) => {
    return rawBackgroundData.data.attributes;
}

const changeBackgroundImage = (background) => {
    $('body').css({'background-image': `url(${background.link})`});
    $('.background-pic-title').text(background.title);
    $('.background-pic-title').fadeIn();
}

// search triggers get weather function
navSearchButton.click(function() {
    event.preventDefault();
    getWeather();
    getBackground();
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