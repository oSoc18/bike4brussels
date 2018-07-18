var isSidebarVisible = false;

function toggleSidebar() {
    $("#sidebar-right-container").toggleClass('hidden-sidebar');
    isSidebarVisible = !isSidebarVisible;
    if (isSidebarVisible) {
        $("#top-overlay-center-spacer").addClass("col-lg-1").addClass("col-md-0").removeClass("col-lg-2").removeClass("col-md-2");
        $("#top-overlay-input").addClass("col-lg-7").removeClass("col-lg-8");
    } else {
        $("#top-overlay-center-spacer").addClass("col-lg-2").addClass("col-md-2").removeClass("col-lg-1").removeClass("col-md-0");
        $("#top-overlay-input").addClass("col-lg-8").removeClass("col-lg-7");
    }
}

function sidebarDisplayProfileHtmlId(id) {
    sidebarDisplayProfile(profileButtonIds[id]);
}

function sidebarDisplayProfile(profile) {
    selectedProfile = profile;
    if (location1 && location2) {
        for(var i in profileHtmlId){
            try {
                map.setPaintProperty(i, 'line-color', "grey");
                map.setPaintProperty(i, 'line-opacity', 0.1);
            } catch (e){ console.log(e);}
        }
        map.setPaintProperty(profile, 'line-color',  {   // always use the colors of the cycling network
            type: 'identity',
            property: 'cyclecolour'
        });
        map.setPaintProperty(profile, 'line-opacity', 1);
        map.moveLayer(profile);
    }
    console.log(`showing only ${profile}`);
    $(".route-instructions").addClass("height-zero");
    $(`#${profileHtmlId[profile]}`).removeClass("height-zero");
    $("#sidebar-top>span").removeClass("active");
    $(`#${getKeyByValue(profileButtonIds, profile)}`).addClass("active");
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});

function displayChart(htmlCanvasId, heightInfo) {
    //console.log(heightInfo);
    var ctx = document.getElementById(htmlCanvasId).getContext('2d');
    new Chart(ctx, {
        "type": "line",
        "data": {
            "labels": Array.apply(null, {length: heightInfo.length}).map(Number.call, Number),
            "datasets": [{
                "label": "",
                "data": heightInfo,
                "fill": false,
                "borderColor": "rgb(255, 255, 255)",
                "lineTension": 0.1
            }]
        },
        "options": {
            "legend": {
                "display": false
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            }
        },
    });
}

function switchLanguage(element){
    switch (element.id) {
        case "label-option-EN":
            //English
            language = "en";
            break;
        case "label-option-FR":
            //French
            language = "fr";
            break;
        case "label-option-NL":
            //Dutch
            language = "nl";
            break;
    }
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("lang", language);
    }
    if (location1 && location2) {
        calculateAllRoutes(location1, location2, availableProfiles, true, language);
    }
}

window.onload = function () {
    sidebarDisplayProfile(selectedProfile);
    $(".lang_label").removeClass("active");
    switch (language) {
        case "en":
            //English
            $("#label-option-EN").addClass("active");
            break;
        case "fr":
            //French
            $("#label-option-FR").addClass("active");
            break;
        case "nl":
            //Dutch
            $("#label-option-NL").addClass("active");
            break;
    }

};
