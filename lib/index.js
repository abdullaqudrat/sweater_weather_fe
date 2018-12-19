// This file is in the entry point in your webpack config.
const navBar = $('nav');
const title = $('.background-pic-title');
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

navSearchInput.keyup(function(event) {
    if (event.keyCode === 13) {
        navSearchButton.click();
        navSearchInput.val("");
    }
});

// sticky navbar scroll change
$(window).scroll(function() {
    if($(window).scrollTop()) {
        navBar.addClass('black');
        title.fadeOut();
    } else {
        navBar.removeClass('black');
        title.fadeIn();
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
            <img src="/assets/${hour.icon}.png" id="hour-weather-icon">
            <h1>${parseToFarenheit(hour.temp)}</h1>
            <p>Precip</p>
            <p>${parseToPercent(hour.chance_of_precipitation)}</p>
        </div>
    `);
}

const buildDays = (day) => {
    $('.forecast').append(`
        <div class="day">
            <h1>${day.day} <img src="/assets/${day.icon}.png" id="day-weather-icon"></h1>
            <h2>High: ${parseToFarenheit(day.high_temp)}</h2>
            <h2>Low: ${parseToFarenheit(day.low_temp)}</h2>
            <p>${day.summary}</p>
            <p><strong>${parseToPercent(day.chance_of_precipitation)}</strong> chance of precipitation</p>
        </div>
    `);
}

const parseToPercent = (data) => {
    return `${Math.round(data * 100)}%` 
}
const parseToFarenheit = (data) => {
    return `${Math.round(data)}°` 
}

const buildWeatherCards = (forecast) => {
    $('.band').html('');
    $('.band').append(`
        <div class="top-card">
            <div class="left-first">
                <h1>${parseToFarenheit(forecast.current_temp)}</h1>
                <p>${forecast.current_summary}</p>
                <p><strong>High:</strong> ${parseToFarenheit(forecast.current_high)}</p>
                <p><strong>Low:</strong> ${parseToFarenheit(forecast.current_low)}</p>
            </div>
            <div class="right">
                <h1>${forecast.location}</h1>
                <p><strong>Time:</strong> ${forecast.current_time}</p>
                <p><strong>Date:</strong> ${forecast.current_date}</p>
            </div>
        </div>
        <div class="top-card">
            <div class="left-second">
                <h2>Todays Weather:</h2>
                <p>${forecast.current_summary}</p>
                <h2>Tonights Weather:</h2>
                <p class="summary">${forecast.later_summary}</p>
            </div>
            <div class="right">
                <p><strong>Humidity:</strong> ${parseToPercent(forecast.current_humidity)}</p>
                <p><strong>Feels like:</strong> ${parseToFarenheit(forecast.current_feels_like)}</p>
                <p><strong>Visibility:</strong> ${forecast.current_visibility} miles</p>
                <p><strong>UV index:</strong> ${forecast.current_uv_index}</p>
            </div>
        </div>
        <div class="bottom-card">
            <div class="forecast">
            </div>
        </div>
    `);
    forecast.hourly.slice(-10).forEach(hour => {
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

var titleButton = false;
const cards = $('.band');
 
$('.background-pic-title').click(function(event) {
    event.preventDefault();
    if(titleButton == false) {
        cards.fadeOut();
        titleButton = true;
    } else {
        cards.fadeIn();
        titleButton = false;
    }
})