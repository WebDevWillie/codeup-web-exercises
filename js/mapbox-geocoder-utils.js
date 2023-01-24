"use strict";

/***
 // * geocode is a method to search for coordinates based on a physical address and return
 // * @param {string} search is the address to search for the geocoded coordinates
 // * @param {string} token is your API token for MapBox
 // * @returns {Promise} a promise containing the latitude and longitude as a two element array
 // *
 * EXAMPLE:
 *
   geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
       do something with results
   })
 *
 */
// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }


/***
 // * reverseGeocode is a method to search for a physical address based on inputted coordinates
 // * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 // * @param {string} token is your API token for MapBox
 // * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function(data) {
//             return data.features[0].place_name;
//         });
// }



let favRestaurants = [
    {
        location: [-85.797974, 30.179654],
         name: "Dirty Dick's Crab Shack",
         popUpHTML: "Welcome to Dirty Dicks!"
    },
    {
        location: [-81.727866, 25.973595],
        name: "Snook Inn",
        popUpHTML: "Best Seafood in Marco Island!"
    },
    {
        location: [-80.261391, 25.784601],
        name: "La Rosa Fine Cuban Cuisine",
        popUpHTML: "Bienvenidas de La Rosa!"
    }
]


    // favRestaurants.forEach(function (favrestaurant){
    //     new mapboxgl.Marker()
    //         .setLngLat(favrestaurant.location)
    //         .addTo(map);
    // })

function postMarkers(arr){
    for(let i = 0; i < arr.length; i++) {
        let popup = new mapboxgl.Popup()
            .setHTML(arr[i].popUpHTML);
        let marker = new mapboxgl.Marker()
            .setLngLat(arr[i].location)
            .addTo(map)
            .setPopup(popup);
    }
}

postMarkers(favRestaurants);
