const mapboxAccessCode = "pk.eyJ1IjoiZGFuaWVsbGV0ZXJyYXMiLCJhIjoiY2pqeWJheGxhMGwxODNxbW1sb2UzMGo0aiJ9.Y5HiKm7qjB1vrX7NGTOofA";

const urls = {
    mapStyle: 'https://openmaptiles.github.io/positron-gl-style/style-cdn.json',
    network: 'https://cyclenetworks.osm.be/brumob/data/network.geojson',
    route: 'https://bike4brussels.osm.be/api',
    geocoder: `https://api.mapbox.com/geocoding/v5/mapbox.places/{0}.json?access_token=` + mapboxAccessCode + `&proximity=50.861%2C4.356&country=BE&bbox=3.9784240723%2C50.6485897217%2C4.7282409668%2C51.0552073386&limit=5&types=place,locality,neighborhood,address,poi`,
    reverseGeocoder: `https://api.mapbox.com/geocoding/v5/mapbox.places/{0},{1}.json?limit=1&access_token=` + mapboxAccessCode
};

String.prototype.format = function () {
    let a = this;
    for (let k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
};
