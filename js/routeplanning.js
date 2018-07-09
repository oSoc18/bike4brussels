var location1 = undefined;
var location1Marker = undefined;
var location2 = undefined;
var location2Marker = undefined;

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

/**
 * Calculates a route and shows it on the map
 * @param {[int, int]} origin - The LatLng Coords
 * @param {[int, int]} destination - The LatLng Coords
 * @param {String} profile - The routing profile
 * @param {boolean} instructions - Whether or not the route instructions should be requested from the server
 * @param {boolean} update - For my location, if we should do a silent update
 */
function calculateRoute(origin, destination, profile = "shortest", instructions = true, update = true) {
    // Swap around values for the API
    const originS = swapArrayValues(origin);
    const destinationS = swapArrayValues(destination);

    // Construct the url
    const url = `${urls.route}/route?loc1=${originS}&loc2=${destinationS}&profile=${profile}&instructions=${instructions}`;

    // TODO: The json should be requested instead of using a hardcoded example json. This hack is used because the backend server is not yet reachable.
    $.getJSON(url, function (json) {
            console.log(json);

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
                            profile === 'shortest'
                                ? 'darkgrey'
                                : {
                                    type: 'identity',
                                    property: 'colour'
                                },
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
    ) // TODO: uncomment when routeplanner backnd is available

        .catch(ex => {
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
        calculateRoute(location1, location2);
    }
}

function createMarker(loc, color = '#3FB1CE') {
    return new mapboxgl.Marker({color: color})
        .setLngLat(loc)
        .addTo(map);
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
