"use strict";
//----GLOBAL VARIABLES-----//


let coordinates = {lon: -80.1918, lat: 25.7617};


//----WEATHER DATA AND DYNAMICALLY PRODUCED HTML-------//
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: keys.weatherApp,
    lat:   coordinates.lat,
    lon: coordinates.lon  ,
    units: "imperial"
})  .done(function(data) {
    console.log($(data.list[0]))
    // can be used to get forecast conditions at current time in increments of 24 hours
    let html = `<div class="col card card-indiv col-2 m-1 ">
          <h5 class="card-title p-2">Current Weather</h5>
          <img
                  src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png"
                  class="card-img-top"
                  style="width: 50px height: 50px"
                  alt="Weather description"
          />

            <h5 class="card-title">Weather Label </h5>
            <p class="card-text">Temp: ${data.list[0].main.temp}°F</p>
            <p class="card-text">Feels like: ${data.list[0].main.feels_like}°F</p>
            <p class="card-text">Humidty: ${data.list[0].main.humidity}%</p>
            <p class="card-text">Wind speed: ${data.list[0].wind.speed} mph</p>

        </div>`

    for (let i =1; i < data.list.length; i += 8) {
        html += `<div class="card card-indiv col-2 m-1">
          <h5 class="card-title p-2">${data.list[i].dt_txt}</h5>
          <img
                  src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@4x.png"
                  class="card-img-top"
                  alt="Weather description"
          />

            <h5 class="card-title">Weather Label </h5>
            <p class="card-text">Temp: ${data.list[i].main.temp}°F</p>
            <p class="card-text">Feels like: ${data.list[i].main.feels_like}°F</p>
            <p class="card-text">Humidty: ${data.list[i].main.humidity}%</p>
            <p class="card-text">Wind speed: ${data.list[i].wind.speed} mph</p>

        </div>`
    }
    $('#weather-card').html(html);

})


// -MAP GENERATION    -->

mapboxgl.accessToken = keys.mapBox;



let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/willparry/cld82696h007901oafua0czic',
    zoom: 5,
    center: [coordinates.lon, coordinates.lat]
});

// MARKER PLACEMENT------//

let marker =
    new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(coordinates)
        .addTo(map);

// marker();

function onDragEnd() {
    const lngLat = marker.getLngLat();
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: keys.weatherApp,
        lat:  lngLat.lat,
        lon: lngLat.lng  ,
        units: "imperial"
    })  .done(function(data) {
        console.log($(data.list[0]))
        // can be used to get forecast conditions at current time in increments of 24 hours
        let html = `<div class="col card card-indiv col-2 m-1 ">
          <h5 class="card-title p-2">Current Weather</h5>
          <img
                  src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png"
                  class="card-img-top"
                  style="width: 50px height: 50px"
                  alt="Weather description"
          />

            <h5 class="card-title">Weather Label </h5>
            <p class="card-text">Temp: ${data.list[0].main.temp}°F</p>
            <p class="card-text">Feels like: ${data.list[0].main.feels_like}°F</p>
            <p class="card-text">Humidty: ${data.list[0].main.humidity}%</p>
            <p class="card-text">Wind speed: ${data.list[0].wind.speed} mph</p>

        </div>`

        for (let i =1; i < data.list.length; i += 8) {
            html += `<div class="card card-indiv col-2 m-1">
          <h5 class="card-title p-2">${data.list[i].dt_txt}</h5>
          <img
                  src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@4x.png"
                  class="card-img-top"
                  alt="Weather description"
          />

            <h5 class="card-title">Weather Label </h5>
            <p class="card-text">Temp: ${data.list[i].main.temp}°F</p>
            <p class="card-text">Feels like: ${data.list[i].main.feels_like}°F</p>
            <p class="card-text">Humidty: ${data.list[i].main.humidity}%</p>
            <p class="card-text">Wind speed: ${data.list[i].wind.speed} mph</p>

        </div>`
        }
        $('#weather-card').html(html);

    })
    coordinates.innerHTML = `Longitude: ${lngLat.lng} Latitude: ${lngLat.lat}`;
}



marker.on('dragend', onDragEnd);



// -----REUSABLE FUNCTIONS-----//

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}