var location1 = undefined;
var location1Marker = undefined;
var location2 = undefined;
var location2Marker = undefined;
var routes = [];
let language = "en";
const availableProfiles = ["fast", "shortest", "balanced", "networks", "brussels"];

//set the corect language
var userLang = navigator.language || navigator.userLanguage;
if(userLang==='nl' || userLang === 'fr'){
    language = userLang;
}
// Check browser support
if (typeof(Storage) !== "undefined") {
    let temp_lang = localStorage.getItem("lang");
    if(temp_lang){
        language = temp_lang;
    }
} else {
    console.log("Sorry, your browser does not support Web Storage.");
}

const profileHtmlId = {
    "fast": "fast-instruction",
    "shortest": "shortest-instruction", // Currently not in use
    "balanced": "balanced-instruction",
    "networks": "relaxed-instruction",
    "brussels": "other-instruction"
};
const profileButtonIds = {
    "fastest-route": "fast",
    "shortest-route": "shortest", // Currently not in use
    "balanced-route": "balanced",
    "relaxed-route": "networks",
    "other-route": "brussels"
};

function timeToText(s) {
    if (s < 60) {
        return '1min';
    }
    if (s < 3600) {
        return `${Math.round(s / 60)}min`;
    }
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    return `${h} h ${m}min`;
}

function roundToThree(num) {
    return +(Math.round(num + "e+3")  + "e-3");
}

/**
 * Calculates all routes and shows it on the map
 * @param {[int, int]} origin - The LatLng Coords
 * @param {[int, int]} destination - The LatLng Coords
 * @param {[String]} profiles - for every profile, a route will be requested
 * @param {boolean} instructions - Whether or not the route instructions should be requested from the server
 * @param {String} lang - en/nl/fr select the language for the instructions
 */
function calculateAllRoutes(origin, destination, profiles = availableProfiles, instructions = true, lang = language) {
    $(".route-instructions ul").html("Loading...");
    $(`.route-instructions  .instructions-resume`).html("");
    $(`.route-instructions .elevation-info`).html("");
    profiles.forEach(function (profile) {
        calculateRoute(origin, destination, profile, instructions, lang);
    });
}

/**
 * Calculates a route and shows it on the map
 * @param {[int, int]} origin - The LatLng Coords
 * @param {[int, int]} destination - The LatLng Coords
 * @param {String} profile - The routing profile
 * @param {boolean} instructions - Whether or not the route instructions should be requested from the server
 * @param {String} lang - en/nl(/fr) select the language for the instructions
 */
function calculateRoute(origin, destination, profile = "balanced", instructions = true, lang = 'en') {
    // Swap around values for the API
    const originS = swapArrayValues(origin);
    const destinationS = swapArrayValues(destination);

    // Construct the url
    let profile_url;
    if (profile == "fast") {
        profile_url = "";
    } else {
        profile_url = profile;
    }
    const url = `${urls.route}/route?loc1=${originS}&loc2=${destinationS}&instructions=${instructions}&lang=${lang}` + (profile_url === "" ? "" : `&profile=${profile_url}`);

    $.getJSON(url, function (json) {
            console.log(json);

            let routeStops = [];
            let heightInfo = [];

            route = json.route.features;
            for (let i in route) {
                if(route[i].name === "Stop"){
                    routeStops.push(route[i]);
                }
                if (route[i].properties.cyclecolour === undefined) {
                    route[i].properties.cyclecolour = "#979797";
                } else if (route[i].properties.cyclecolour.length !== 7) {
                    if (route[i].properties.cyclecolour.length > 7) {
                        route[i].properties.cyclecolour = route[i].properties.cyclecolour.substring(0, 7);
                    } else {
                        route[i].properties.cyclecolour = "#979797";
                    }
                }
                try {
                    heightInfo.push(route[i].geometry.coordinates[0][2]);
                } catch (e){
                    console.log("Failed to read height info", e);
                }
            }

            let $instrResume = $(`#${profileHtmlId[profile]} .instructions-resume`);
            if(routeStops.length === 2) {
                $instrResume.html(`<div>${roundToThree(routeStops[1].properties.distance / 1000)}km</div><div>${timeToText(routeStops[1].properties.time)}</div>`);
            } else {
                $instrResume.html("");
            }
            $(`#${profileHtmlId[profile]} .elevation-info`).html(`<div><canvas id="chart-${profile}" style="width: 100%; height: 100px"></canvas></div>`);

            displayChart(`chart-${profile}`, heightInfo);

            // Shows the instructions in the sidebar
            let $profileInstructions = $(`#${profileHtmlId[profile]} ul`);
            $profileInstructions.html("");
            $profileInstructions.append(`<li class="startpoint-li">${$("#fromInput").val()}</li>`);
            for (let i in json.instructions.features) {
                $profileInstructions.append(`<li class="type-${json.instructions.features[i].properties.type}  angle-${json.instructions.features[i].properties.angle}">${json.instructions.features[i].properties.instruction}</li>`);
            }
            $profileInstructions.append(`<li class="endpoint-li">${$("#toInput").val()}</li>`);
            $profileInstructions.append(`</ul>`);

            // Check if profile already exists
            const calculatedRoute = map.getSource(profile);
            if (calculatedRoute) {
                // Just set the data
                calculatedRoute.setData(json.route);
            } else {
                // Add a new layer
                map.addLayer({
                    id: profile,
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: json.route
                    },
                    paint: {
                        'line-color':
                            {   // always use the colors of the cycling network
                                type: 'identity',
                                property: 'cyclecolour'
                            }
                        ,
                        'line-width': 4
                    },
                    layout: {
                        'line-cap': 'round'
                    }
                });
            }

            /*if (profile === 'shortest') {
                // If the route is the 'shortest' then the duration (time) of the route (which is contained in the last
                // route segment) was originally shown in a popup displayed at the middle line segment of all the lines.
                // This code still works but is not used at the moment. Could be useful though.
                const time = json.route.features[json.route.features.length - 1].properties.time;
                const text = timeToText(time);
                const middleFeature = json.route.features[Math.round(json.route.features.length / 2)];
                const LatLng = middleFeature.geometry.coordinates[0];
            }*/

            // Move the network layer always on top
            if (profile === 'shortest' && map.getSource('brussels')) {
                map.moveLayer('shortest', 'brussels');
            }

            //fitToBounds(origin, destination);
            /*setTimeout(() => {
                fitToBounds(origin, destination);
                // hide the loading icon
                //view.toggleMapLoading();
            }, 350);*/
        }
    )
        .catch(ex => {
            console.log(profile);
            $(`#${profileHtmlId[profile]} ul`).html("Fout :(");

            if (map.getLayer(profile)) {
                map.removeLayer(profile);
            }
            if (map.getSource(profile)) {
                map.removeSource(profile);
            }
            // eslint-disable-next-line
            console.warn('Problem calculating route: ', ex);
            if (profile === 'brussels') {
                /*
                mapController.clearRoutes();
                mapController.clearMapObject('shortestPopup');
                view.toggleMapLoading();
                view.toggleErrorDialog();
                */
            }
        });
}

function removeAllRoutesFromMap(){
    for(let i in Object.keys(profileHtmlId)) {
        profile = Object.keys(profileHtmlId)[i];
        console.log(profile);
        if (map.getLayer(profile)) {
            map.removeLayer(profile);
        }
        if (map.getSource(profile)) {
            map.removeSource(profile);
        }
    }
}


function showLocationsOnMap() {
    if (location1 !== undefined) {
        if (location1Marker !== undefined) {
            location1Marker.remove();
        }
        location1Marker = createMarker(location1, '#47b200');
    }
    if (location2 !== undefined) {
        if (location2Marker !== undefined) {
            location2Marker.remove();
        }
        location2Marker = createMarker(location2, '#b50000');
    }
    if (location1 !== undefined && location2 !== undefined) {
        calculateAllRoutes(location1, location2);
    }
}

function createMarker(loc, color = '#3FB1CE') {
    return new mapboxgl.Marker({color: color})
        .setLngLat(loc)
        .addTo(map);
}

map.on('click', function (e) {
    console.log(e.lngLat);
    var lngLatArray = [e.lngLat.lng, e.lngLat.lat];
    if (location1 === undefined) {
        location1 = lngLatArray;
        reverseGeocode(location1, function (adress) {
            $("#fromInput").val(adress);
        });
    } else {
        location2 = lngLatArray;
        reverseGeocode(location2, function (adress) {
            $("#toInput").val(adress);
        });
    }
    showLocationsOnMap();
});

function initInputGeocoders() {
    $('.geocoder-input').typeahead({
        source: function (query, callback) {
            // MapBox Geocoder:
            /*$.getJSON(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxAccessCode}&proximity=50.861%2C4.356&country=BE&bbox=3.9784240723%2C50.6485897217%2C4.7282409668%2C51.0552073386&limit=5`, function (data) {
                var resArray = [];
                for(var feature in data.features){
                    resArray.push({name: data.features[feature].place_name, loc: data.features[feature].center});
                }
                callback(resArray);
            });*/

            // Nominatim Geocoder
            $.getJSON(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon=0&addressdetails=0&countrycodes=BE`/*bounded=1&viewbox=4.239465,50.930741,4.501558,50.784803`*/, function (data) {
                var resArray = [];
                for (var feature in data) {
                    resArray.push({name: data[feature].display_name, loc: [data[feature].lon, data[feature].lat]});
                }
                callback(resArray);
            });

        },
        matcher: function (s) {   //Fix display results when query contains space
            return true;
        },
        afterSelect: function (activeItem) {
            var id = this.$element.attr('id');
            if (id == "fromInput") {
                //set the origin, add to the map
                location1 = activeItem.loc;
            } else if (id == "toInput") {
                //set the destination, add to the map
                location2 = activeItem.loc;
            } else {
                //fout
                console.log("NIET GEVONDEN!");
            }
            showLocationsOnMap();
        }
    });
}

function reverseGeocode(location, callback) {
    var lng = location[0];
    var lat = location[1];
    $.getJSON(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=0`, function (data) {
        console.log(data);
        callback(data.display_name);
    });
}

function useCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    location1 = [position.coords.longitude, position.coords.latitude];
    showLocationsOnMap();
    reverseGeocode(location1, function (adress) {
        $("#fromInput").val(adress);
    });
}

function fitToBounds(origin, destination) {
    let bounds = new mapboxgl.LngLatBounds();
    bounds.extend(origin);
    bounds.extend(destination);
    //console.log(origin, destination, bounds);
    // Fit the map to the route
    map.fitBounds(bounds, {
        padding: {
            top: 75,
            right: 50,
            bottom: 75,
            left: 50
        }
    });
}

function swapOriginDestination() {
    var locTemp = location1;
    location1 = location2;
    location2 = locTemp;

    var fromInput = $("#fromInput");
    var toInput = $("#toInput");

    var adress1 = fromInput.val();
    fromInput.val(toInput.val());
    toInput.val(adress1);

    showLocationsOnMap();
}

function swapArrayValues(array) {
    var newArray = [];
    newArray[0] = array[1];
    newArray[1] = array[0];
    /*const temp = array[1];
    array[1] = array[0];
    array[0] = temp;*/
    return newArray;
}

/*function startCalculation() {
    calculateRoute([4.320122, 50.858051], [4.397713, 50.854367], "shortest");
}*/

initInputGeocoders();
//setTimeout(startCalculation, 2000);
