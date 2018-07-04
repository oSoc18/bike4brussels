/**
 * Calculates a route and shows it on the map
 * @param {Array[int, int]} origin - The LatLng Coords
 * @param {Array[int, int]} destination - The LagLng Coords
 * @param {String} profile - The routing profile
 * @param {boolean} update - For my location, if we should do a silent update
 */
function calculateRoute(origin, destination, profile, update = true) {
    // Swap around values for the API
    const originS = swapArrayValues(origin);
    const destinationS = swapArrayValues(destination);

    // Construct the url
    const url = `${urls.route}/route?loc1=${originS}&loc2=${destinationS}&profile=${profile}`;

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
                            ? 'lightgrey'
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

        if (profile === 'shortest') {
            const lastFeature = json.route.features[json.route.features.length - 1];
            const {properties: {time}} = lastFeature;
            const text = displayTime(time);
            const middleFeature =
                json.route.features[Math.round(json.route.features.length / 2)];
            const LatLng = middleFeature.geometry.coordinates[0];
            // if there's already a popup, clear it before adding a new one
            mapController.clearMapObject('shortestPopup');
            mapController.addPopup(LatLng, text);
        }

        // Move the network layer always on top
        if (profile === 'shortest' && map.getSource('brussels')) {
            map.moveLayer('shortest', 'brussels');
        }

        // If the profile is brussels, initiate the nav stuff
        if (profile === 'brussels') {
            const oldHandler = handlers.nav;

            // prepare the navigation stuff when a userposition is found
            // and the destination isn't the userposition
            const prepareToNavigate =
                geolocController.userPosition &&
                !geolocController.myLocationSelected['destination'];
            if (prepareToNavigate) {
                const {destination} = places;
                // set origin as default start, use slice to copy
                const origin = geolocController.userPosition.slice();

                // Set the new handler
                handlers.nav = () => {
                    router.prepareNavHistory(
                        swapArrayValues(origin),
                        swapArrayValues(destination)
                    );

                    router.goToNavigation(
                        swapArrayValues(origin),
                        swapArrayValues(destination)
                    );
                };
            }

            // Always hide the layers
            mapController.toggleLayer('GFR_routes', 'none');
            mapController.toggleLayer('GFR_symbols', 'none');

            // Activate none
            view.clearShowAllRoutes('none');

            // Show the navigation box, change the handler

            const lastFeature = json.route.features[json.route.features.length - 1];
            const {properties: {distance, time}} = lastFeature;
            view.showNavigationBox(
                oldHandler,
                handlers.nav,
                distance,
                time,
                prepareToNavigate
            );

            // do not fit to bounds if updating
            if (update) return;

            // only fit bounds once we know the map is fully resized
            setTimeout(() => {
                mapController.fitToBounds(origin, destination);
                // hide the loading icon
                view.toggleMapLoading();
            }, 350);
        }
    })
        .catch(ex => {
            // eslint-disable-next-line
            console.warn('Problem calculating route: ', ex);
            if (profile === 'brussels') {
                mapController.clearRoutes();
                mapController.clearMapObject('shortestPopup');
                view.toggleMapLoading();
                view.toggleErrorDialog();
            }
        });
}

function swapArrayValues(array) {
    var temp = array[1];
    array[1] = array[0];
    array[0] = temp;
    return array;
}

calculateRoute([4.320122, 50.858051], [4.397713, 50.854367], "brussels");