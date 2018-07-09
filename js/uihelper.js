var isSidebarVisible = false;

function toggleSidebar() {
    $("#sidebar-right-container").animate({width: 'toggle'}, 350);
    isSidebarVisible = !isSidebarVisible;
    if (isSidebarVisible) {
        $("#top-overlay-center-spacer").addClass("col-lg-1").addClass("col-md-0").removeClass("col-lg-2").removeClass("col-md-2");
        $("#top-overlay-input").addClass("col-lg-7").removeClass("col-lg-8");
    } else {
        $("#top-overlay-center-spacer").addClass("col-lg-2").addClass("col-md-2").removeClass("col-lg-1").removeClass("col-md-0");
        $("#top-overlay-input").addClass("col-lg-8").removeClass("col-lg-7");
    }

}

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
            $.getJSON(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon=0&addressdetails=0`, function (data) {
                var resArray = [];
                for(var feature in data){
                    resArray.push({name: data[feature].display_name, loc: [data[feature].lon, data[feature].lat]});
                }
                callback(resArray);
            });

        },
        matcher: function(s){   //Fix display results when query contains space
            return true;
        },
        afterSelect: function(activeItem){
            var id = this.$element.attr('id');
            if(id == "fromInput"){
                //set the origin, add to the map
                location1 = activeItem.loc;
            } else if(id == "toInput"){
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
