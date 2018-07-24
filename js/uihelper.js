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
    id = id.replace("-mobile", "");
    sidebarDisplayProfile(profileButtonIds[id]);
}

function sidebarDisplayProfile(profile) {
    selectedProfile = profile;
    if (location1 && location2) {
        for (var i in profileHtmlId) {
            try {
                if (map.getLayer(i)) {
                    map.setPaintProperty(i, 'line-color', "grey");
                    map.setPaintProperty(i, 'line-opacity', 0.25);
                }
            } catch (e) {
                console.warn(e);
            }
        }
        if (map.getLayer(profile)) {
            map.setPaintProperty(profile, 'line-color', {   // always use the colors of the cycling network
                type: 'identity',
                property: 'cyclecolour'
            });
            map.setPaintProperty(profile, 'line-opacity', 1);
            map.moveLayer(profile);
        }
    }
    $(".route-instructions").addClass("height-zero");
    $(`#${profileHtmlId[profile]}`).removeClass("height-zero");
    $("#sidebar-top>span").removeClass("active");
    $("#top-overlay-profile-buttons-mobile>span").removeClass("active");
    $(`#${getKeyByValue(profileButtonIds, profile)}`).addClass("active");
    $(`#${getKeyByValue(profileButtonIds, profile)}-mobile`).addClass("active");
}

function getBootstrapDeviceSize() {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let cat;
    switch (true) {
        case width <= 576:
            cat = "xs";
            break;
        case width > 576 && width <= 768:
            cat = "sm";
            break;
        case width > 768 && width <= 992:
            cat = "md";
            break;
        case width > 992 && width <= 1200:
            cat = "lg";
            break;
        case width > 1200:
            cat = "xl";
            break;
    }
    return cat;
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
    applyLanguage(language);
}

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
        "<p id='image_for_crop'>" /*+ mapimgHtml */ + "</p>" + `${selectedProfile} route` +
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
    setTimeout(function () {
        window.frames["print_frame"].window.print();
    }, 100);
}

function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // in case params look like: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });

            // set parameter value (use 'true' if empty)
            //var paramValue = a[1];
            let paramValue;
            if (typeof(a[1]) === 'undefined') {
                paramValue = true;
            } else {
                paramValue = a[1].toLowerCase();
                //check if the value is a comma sepperated list
                var b = paramValue.split(',');
                paramValue = typeof(b[1]) === 'undefined' ? b[0] : b;
            }

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();


            // if parameter name already exists
            if (obj[paramName]) {
                // convert value to array (if still string)
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // if no array index number specified...
                if (typeof paramNum === 'undefined') {
                    // put the value on the end of the array
                    obj[paramName].push(paramValue);
                }
                // if array index number specified...
                else {
                    // put the value at that index number
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // if param name doesn't exist yet, set it
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}

function setCurrentUrl(params) {
    currentUrl = window.location.href;
    currentUrl = currentUrl.split('?')[0] + '?';  //verwijder huidige parameters (if any)
    for (var i in params) {
        currentUrl += i + '=' + params[i] + "&";
    }
    //window.location.href = currentUrl;
    window.history.pushState("object or string", "Title", currentUrl);
}

function applyLanguage(lang) {
    $(".button-collapse-instructions").html(getString("instructionsCollapseButton", lang));
    $("#fromInput").attr("placeholder", getString("fromInputPlaceholder", lang));
    $("#toInput").attr("placeholder", getString("toInputPlaceholder", lang));

    $("#profile-button-text-fast").html(getString("profileNameFast", lang));
    $("#profile-button-text-balanced").html(getString("profileNameBalanced", lang));
    $("#profile-button-text-relaxed").html(getString("profileNameRelaxed", lang));
    $("#profile-button-text-networks").html(getString("profileNameNetworks", lang));

    $("#profile-button-text-fast-mobile").html(getString("profileNameFast", lang));
    $("#profile-button-text-balanced-mobile").html(getString("profileNameBalanced", lang));
    $("#profile-button-text-relaxed-mobile").html(getString("profileNameRelaxed", lang));
    $("#profile-button-text-networks-mobile").html(getString("profileNameNetworks", lang));

    $("#other-instruction div p").html(getString("profileDescriptionNetworks", lang));
    $("#relaxed-instruction div p").html(getString("profileDescriptionRelaxed", lang));
    $("#balanced-instruction div p").html(getString("profileDescriptionBalanced", lang));
    $("#fast-instruction div p").html(getString("profileDescriptionFast", lang));

    $("#other-instruction div .sub-title").html(getString("profileTitleNetwork", lang));
    $("#relaxed-instruction div .sub-title").html(getString("profileTitleRelaxed", lang));
    $("#balanced-instruction div .sub-title").html(getString("profileTitleBalanced", lang));
    $("#fast-instruction div .sub-title").html(getString("profileTitleFast", lang));

    $("#other-instruction div h4").html(getString("profileProposal", lang));
    $("#relaxed-instruction div h4").html(getString("profileProposal", lang));
    $("#balanced-instruction div h4").html(getString("profileProposal", lang));
    $("#fast-instruction div h4").html(getString("profileProposal", lang));
}

function fromFieldInputDetected(el) {
    if (!el.value || el.value === "") {
        //show location button
        $("#clearInputFieldFromButton").hide();
        $("#useLocationInputFieldButton").show();
        location1 = undefined;
        showLocationsOnMap();
    } else {
        //show empty button
        $("#clearInputFieldFromButton").show();
        $("#useLocationInputFieldButton").hide();
    }
}

function toFieldInputDetected(el) {
    if (!el.value || el.value === "") {
        //show location button
        $("#clearInputFieldToButton").hide();
        location2 = undefined;
        showLocationsOnMap();
    } else {
        //show empty button
        $("#clearInputFieldToButton").show();
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
    applyLanguage(language);
    let urlparams = getAllUrlParams();
    if (urlparams.loc1) {
        location1 = urlparams.loc1;
        reverseGeocode(location1, function (adress) {
            $("#fromInput").val(adress);
        });
    } else {
        if (!(typeof(Storage) !== "undefined" && new Date(localStorage.getItem("geolocation.permission.denieddate")).addDays(7) > new Date() )) {
            setTimeout(function () {
                useCurrentLocation();
            }, 1000);
        }
    }
    if (urlparams.loc2) {
        location2 = urlparams.loc2;
        reverseGeocode(location2, function (adress) {
            $("#toInput").val(adress);
        });
    }
    if (location1 || location2) {
        showLocationsOnMap();
    }
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }), 'top-left');

};

function clearInputFieldFrom() {
    $("#fromInput").val("");
    location1 = undefined;
    showLocationsOnMap();
    fromFieldInputDetected(document.getElementById("fromInput"));
}

function clearInputFieldTo() {
    $("#toInput").val("");
    location2 = undefined;
    showLocationsOnMap();
    toFieldInputDetected(document.getElementById("toInput"));
}