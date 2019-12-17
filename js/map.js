mapboxgl.accessToken = mapboxAccessCode;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [4.388443, 50.8486229], // starting position [lng, lat]
    zoom: 11, // starting zoom
    preserveDrawingBuffer: true
});
