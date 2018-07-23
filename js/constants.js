//const mapboxAccessCode = "pk.eyJ1IjoiZml6ejU1IiwiYSI6ImNqajVxcG9uajAwMDYza3VrcXY5bTkwMjYifQ.ixw4txr_8ykx5GOeWzUBKQ";
//const mapboxAccessCode = "pk.eyJ1IjoiYXJuYXVkd2V5dHMiLCJhIjoiY2o0cGt3d3oxMXl0cDMzcXNlbThnM3RtaCJ9.BMUyxqHH-FC69pW4U4YO9A";
const mapboxAccessCode = "pk.eyJ1IjoiZGFuaWVsbGV0ZXJyYXMiLCJhIjoiY2pqeWJheGxhMGwxODNxbW1sb2UzMGo0aiJ9.Y5HiKm7qjB1vrX7NGTOofA";

const urls = {
    mapStyle: 'https://openmaptiles.github.io/positron-gl-style/style-cdn.json',
    network: 'https://cyclenetworks.osm.be/brumob/data/network.geojson',
    route: 'https://bike4brussels.osm.be/api',
    geocoder: `https://api.mapbox.com/geocoding/v5/mapbox.places/{0}.json?access_token=${mapboxAccessCode}&proximity=50.861%2C4.356&country=BE&bbox=3.9784240723%2C50.6485897217%2C4.7282409668%2C51.0552073386&limit=5&types=place,locality,neighborhood,address,poi`,
    reverseGeocoder: `https://api.mapbox.com/geocoding/v5/mapbox.places/{0},{1}.json?limit=1&access_token=${mapboxAccessCode}`
    /*route: 'http://localhost:5000'*/
};

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
};

//const center = { latlng: [4.355975, 50.860633], zoom: 11 };
