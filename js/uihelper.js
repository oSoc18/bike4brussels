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
        for (var i in profileHtmlId) {
            try {
                map.setPaintProperty(i, 'line-color', "grey");
                map.setPaintProperty(i, 'line-opacity', 0.1);
            } catch (e) {
                console.log(e);
            }
        }
        map.setPaintProperty(profile, 'line-color', {   // always use the colors of the cycling network
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

function switchLanguage(element) {
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

function printExport() {
    let mapimg = new Image();
    mapimg.id = "map-pic";
    mapimg.src = document.getElementsByClassName("mapboxgl-canvas")[0].toDataURL();
    /*let graphImg = new Image();
    graphImg.id = "graph-pic";
    graphImg.src = document.getElementById(`chart-${selectedProfile}`).toDataURL();*/
    let html = "<head>" +
        "<title>Bike For Brussels - Route export</title>" +
        '<link href="style/printstyle.css" rel="stylesheet" type="text/css">' +
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"\n' +
        '          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">' +
        "</head>" +
        "<body>" +
        "<h1>Bike For Brussels - Routeplanner</h1>" +
        "<p id='image_for_crop'>" /*+ mapimgHtml */+ "</p>" + `${selectedProfile} route` +
        "<div id='instructionsPrintContainer'>" +
        document.getElementById(profileHtmlId[selectedProfile]).innerHTML +
        "</div></body>";
    window.frames["print_frame"].document.body.innerHTML = html;
    window.frames["print_frame"].document.getElementById("image_for_crop").appendChild(mapimg);
    window.frames["print_frame"].document.getElementsByClassName("elevation-info")[0].innerHTML = "";
    //window.frames["print_frame"].document.getElementsByClassName("elevation-info")[0].appendChild(graphImg);
    //var c = window.frames["print_frame"].document.getElementById(`chart-${selectedProfile}`);
    //var ctx = c.getContext("2d");
    //ctx.fillStyle = "#ECB900";
    //c.style.backgroundColor = "#ECB900";
    //ctx.fillRect(0, 0, c.width, c.height);
    //ctx.drawImage(graphImg,0,0);
    //c.width+=0;
    window.frames["print_frame"].window.focus();
    setTimeout(function() {
        window.frames["print_frame"].window.print();
    }, 100);
}