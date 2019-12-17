!function(t,e){"use strict";"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):e(t.jQuery)}(this,function(t){"use strict";var e=function(s,i){this.$element=t(s),this.options=t.extend({},e.defaults,i),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.select=this.options.select||this.select,this.autoSelect="boolean"!=typeof this.options.autoSelect||this.options.autoSelect,this.highlighter=this.options.highlighter||this.highlighter,this.render=this.options.render||this.render,this.updater=this.options.updater||this.updater,this.displayText=this.options.displayText||this.displayText,this.itemLink=this.options.itemLink||this.itemLink,this.itemTitle=this.options.itemTitle||this.itemTitle,this.followLinkOnSelect=this.options.followLinkOnSelect||this.followLinkOnSelect,this.source=this.options.source,this.delay=this.options.delay,this.theme=this.options.theme&&this.options.themes&&this.options.themes[this.options.theme]||e.defaults.themes[e.defaults.theme],this.$menu=t(this.options.menu||this.theme.menu),this.$appendTo=this.options.appendTo?t(this.options.appendTo):null,this.fitToElement="boolean"==typeof this.options.fitToElement&&this.options.fitToElement,this.shown=!1,this.listen(),this.showHintOnFocus=("boolean"==typeof this.options.showHintOnFocus||"all"===this.options.showHintOnFocus)&&this.options.showHintOnFocus,this.afterSelect=this.options.afterSelect,this.afterEmptySelect=this.options.afterEmptySelect,this.addItem=!1,this.value=this.$element.val()||this.$element.text(),this.keyPressed=!1,this.focused=this.$element.is(":focus"),this.changeInputOnSelect=this.options.changeInputOnSelect||this.changeInputOnSelect,this.changeInputOnMove=this.options.changeInputOnMove||this.changeInputOnMove,this.openLinkInNewTab=this.options.openLinkInNewTab||this.openLinkInNewTab,this.selectOnBlur=this.options.selectOnBlur||this.selectOnBlur,this.showCategoryHeader=this.options.showCategoryHeader||this.showCategoryHeader};e.prototype={constructor:e,setDefault:function(t){if(this.$element.data("active",t),this.autoSelect||t){var e=this.updater(t);e||(e=""),this.$element.val(this.displayText(e)||e).text(this.displayText(e)||e).change(),this.afterSelect(e)}return this.hide()},select:function(){var t=this.$menu.find(".active").data("value");if(this.$element.data("active",t),this.autoSelect||t){var e=this.updater(t);e||(e=""),this.changeInputOnSelect&&this.$element.val(this.displayText(e)||e).text(this.displayText(e)||e).change(),this.followLinkOnSelect&&this.itemLink(t)?(this.openLinkInNewTab?window.open(this.itemLink(t),"_blank"):document.location=this.itemLink(t),this.afterSelect(e)):this.followLinkOnSelect&&!this.itemLink(t)?this.afterEmptySelect(e):this.afterSelect(e)}else this.afterEmptySelect();return this.hide()},updater:function(t){return t},setSource:function(t){this.source=t},show:function(){var e,s=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight}),i="function"==typeof this.options.scrollHeight?this.options.scrollHeight.call():this.options.scrollHeight;if(this.shown?e=this.$menu:this.$appendTo?(e=this.$menu.appendTo(this.$appendTo),this.hasSameParent=this.$appendTo.is(this.$element.parent())):(e=this.$menu.insertAfter(this.$element),this.hasSameParent=!0),!this.hasSameParent){e.css("position","fixed");var o=this.$element.offset();s.top=o.top,s.left=o.left}var n=t(e).parent().hasClass("dropup")?"auto":s.top+s.height+i,h=t(e).hasClass("dropdown-menu-right")?"auto":s.left;return e.css({top:n,left:h}).show(),!0===this.options.fitToElement&&e.css("width",this.$element.outerWidth()+"px"),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(e){if(this.query=null!=e?e:this.$element.val(),this.query.length<this.options.minLength&&!this.options.showHintOnFocus)return this.shown?this.hide():this;var s=t.proxy(function(){t.isFunction(this.source)&&3===this.source.length?this.source(this.query,t.proxy(this.process,this),t.proxy(this.process,this)):t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source&&this.process(this.source)},this);clearTimeout(this.lookupWorker),this.lookupWorker=setTimeout(s,this.delay)},process:function(e){var s=this;return e=t.grep(e,function(t){return s.matcher(t)}),(e=this.sorter(e)).length||this.options.addItem?(e.length>0?this.$element.data("active",e[0]):this.$element.data("active",null),"all"!=this.options.items&&(e=e.slice(0,this.options.items)),this.options.addItem&&e.push(this.options.addItem),this.render(e).show()):this.shown?this.hide():this},matcher:function(t){return~this.displayText(t).toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,s=[],i=[],o=[];e=t.shift();){var n=this.displayText(e);n.toLowerCase().indexOf(this.query.toLowerCase())?~n.indexOf(this.query)?i.push(e):o.push(e):s.push(e)}return s.concat(i,o)},highlighter:function(t){var e=this.query;if(""===e)return t;var s,i=t.match(/(>)([^<]*)(<)/g),o=[],n=[];if(i&&i.length)for(s=0;s<i.length;++s)i[s].length>2&&o.push(i[s]);else(o=[]).push(t);e=e.replace(/[\(\)\/\.\*\+\?\[\]]/g,function(t){return"\\"+t});var h,a=new RegExp(e,"g");for(s=0;s<o.length;++s)(h=o[s].match(a))&&h.length>0&&n.push(o[s]);for(s=0;s<n.length;++s)t=t.replace(n[s],n[s].replace(a,"<strong>$&</strong>"));return t},render:function(e){var s=this,i=this,o=!1,n=[],h=s.options.separator;return t.each(e,function(t,s){t>0&&s[h]!==e[t-1][h]&&n.push({__type:"divider"}),this.showCategoryHeader&&(!s[h]||0!==t&&s[h]===e[t-1][h]||n.push({__type:"category",name:s[h]})),n.push(s)}),e=t(n).map(function(e,n){if("category"==(n.__type||!1))return t(s.options.headerHtml||s.theme.headerHtml).text(n.name)[0];if("divider"==(n.__type||!1))return t(s.options.headerDivider||s.theme.headerDivider)[0];var h=i.displayText(n);return(e=t(s.options.item||s.theme.item).data("value",n)).find(s.options.itemContentSelector||s.theme.itemContentSelector).addBack(s.options.itemContentSelector||s.theme.itemContentSelector).html(s.highlighter(h,n)),s.options.followLinkOnSelect&&e.find("a").attr("href",i.itemLink(n)),e.find("a").attr("title",i.itemTitle(n)),h==i.$element.val()&&(e.addClass("active"),i.$element.data("active",n),o=!0),e[0]}),this.autoSelect&&!o&&(e.filter(":not(.dropdown-header)").first().addClass("active"),this.$element.data("active",e.first().data("value"))),this.$menu.html(e),this},displayText:function(t){return void 0!==t&&void 0!==t.name?t.name:t},itemLink:function(t){return null},itemTitle:function(t){return null},next:function(e){var s=this.$menu.find(".active").removeClass("active").next();for(s.length||(s=t(this.$menu.find(t(this.options.item||this.theme.item).prop("tagName"))[0]));s.hasClass("divider")||s.hasClass("dropdown-header");)s=s.next();s.addClass("active");var i=this.updater(s.data("value"));this.changeInputOnMove&&this.$element.val(this.displayText(i)||i)},prev:function(e){var s=this.$menu.find(".active").removeClass("active").prev();for(s.length||(s=this.$menu.find(t(this.options.item||this.theme.item).prop("tagName")).last());s.hasClass("divider")||s.hasClass("dropdown-header");)s=s.prev();s.addClass("active");var i=this.updater(s.data("value"));this.changeInputOnMove&&this.$element.val(this.displayText(i)||i)},listen:function(){this.$element.on("focus.bootstrap3Typeahead",t.proxy(this.focus,this)).on("blur.bootstrap3Typeahead",t.proxy(this.blur,this)).on("keypress.bootstrap3Typeahead",t.proxy(this.keypress,this)).on("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead",t.proxy(this.input,this)).on("keyup.bootstrap3Typeahead",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown.bootstrap3Typeahead",t.proxy(this.keydown,this));var e=t(this.options.item||this.theme.item).prop("tagName");"ontouchstart"in document.documentElement?this.$menu.on("touchstart",e,t.proxy(this.touchstart,this)).on("touchend",e,t.proxy(this.click,this)):this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter",e,t.proxy(this.mouseenter,this)).on("mouseleave",e,t.proxy(this.mouseleave,this)).on("mousedown",t.proxy(this.mousedown,this))},destroy:function(){this.$element.data("typeahead",null),this.$element.data("active",null),this.$element.unbind("focus.bootstrap3Typeahead").unbind("blur.bootstrap3Typeahead").unbind("keypress.bootstrap3Typeahead").unbind("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead").unbind("keyup.bootstrap3Typeahead"),this.eventSupported("keydown")&&this.$element.unbind("keydown.bootstrap3-typeahead"),this.$menu.remove(),this.destroyed=!0},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown)switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:if(t.shiftKey)return;t.preventDefault(),this.prev();break;case 40:if(t.shiftKey)return;t.preventDefault(),this.next()}},keydown:function(e){17!==e.keyCode&&(this.keyPressed=!0,this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.shown||40!=e.keyCode?this.move(e):this.lookup())},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},input:function(t){var e=this.$element.val()||this.$element.text();this.value!==e&&(this.value=e,this.lookup())},keyup:function(t){if(!this.destroyed)switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:if(!this.shown||this.showHintOnFocus&&!this.keyPressed)return;this.select();break;case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide()}},focus:function(t){this.focused||(this.focused=!0,this.keyPressed=!1,this.options.showHintOnFocus&&!0!==this.skipShowHintOnFocus&&("all"===this.options.showHintOnFocus?this.lookup(""):this.lookup())),this.skipShowHintOnFocus&&(this.skipShowHintOnFocus=!1)},blur:function(t){this.mousedover||this.mouseddown||!this.shown?this.mouseddown&&(this.skipShowHintOnFocus=!0,this.$element.focus(),this.mouseddown=!1):(this.selectOnBlur&&this.select(),this.hide(),this.focused=!1,this.keyPressed=!1)},click:function(t){t.preventDefault(),this.skipShowHintOnFocus=!0,this.select(),this.$element.focus(),this.hide()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(t){this.mousedover=!1,!this.focused&&this.shown&&this.hide()},mousedown:function(t){this.mouseddown=!0,this.$menu.one("mouseup",function(t){this.mouseddown=!1}.bind(this))},touchstart:function(e){e.preventDefault(),this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},touchend:function(t){t.preventDefault(),this.select(),this.$element.focus()}};var s=t.fn.typeahead;t.fn.typeahead=function(s){var i=arguments;return"string"==typeof s&&"getActive"==s?this.data("active"):this.each(function(){var o=t(this),n=o.data("typeahead"),h="object"==typeof s&&s;n||o.data("typeahead",n=new e(this,h)),"string"==typeof s&&n[s]&&(i.length>1?n[s].apply(n,Array.prototype.slice.call(i,1)):n[s]())})},e.defaults={source:[],items:8,minLength:1,scrollHeight:0,autoSelect:!0,afterSelect:t.noop,afterEmptySelect:t.noop,addItem:!1,followLinkOnSelect:!1,delay:0,separator:"category",changeInputOnSelect:!0,changeInputOnMove:!0,openLinkInNewTab:!1,selectOnBlur:!0,showCategoryHeader:!0,theme:"bootstrap3",themes:{bootstrap3:{menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',itemContentSelector:"a",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'},bootstrap4:{menu:'<div class="typeahead dropdown-menu" role="listbox"></div>',item:'<button class="dropdown-item" role="option"></button>',itemContentSelector:".dropdown-item",headerHtml:'<h6 class="dropdown-header"></h6>',headerDivider:'<div class="dropdown-divider"></div>'}}},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=s,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var s=t(this);s.data("typeahead")||s.typeahead(s.data())})});
var jquery = require("jquery");
window.$ = window.jQuery = jquery;

const mapboxAccessCode = "pk.eyJ1IjoibWljaGllbC1sZXltYW4iLCJhIjoiY2p6bDY2OTdjMGtpbjNic2FycHNqYzhrMiJ9.ixmQT1F7yzxXksnHbBco0A"; // OKBE token

const urls = {
    mapStyle: 'https://openmaptiles.github.io/positron-gl-style/style-cdn.json',
    network: 'https://cyclenetworks.osm.be/brumob/data/network.geojson',
    route: 'https://bike4brussels.osm.be/api',
    geocoder: `https://api.mapbox.com/geocoding/v5/mapbox.places/{0}.json?access_token=${mapboxAccessCode}&proximity=50.861%2C4.356&country=BE&bbox=3.9784240723%2C50.6485897217%2C4.7282409668%2C51.0552073386&limit=5&types=place,locality,neighborhood,address,poi`,
    reverseGeocoder: `https://api.mapbox.com/geocoding/v5/mapbox.places/{0},{1}.json?limit=1&access_token=${mapboxAccessCode}`
};

String.prototype.format = function () {
    let a = this;
    for (let k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
};

mapboxgl.accessToken = mapboxAccessCode;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [4.388443, 50.8486229], // starting position [lng, lat]
    zoom: 11, // starting zoom
    preserveDrawingBuffer: true
});

var location1 = undefined;
var location1Marker = undefined;
var location2 = undefined;
var location2Marker = undefined;
var routes = {};
let routeRequests = {};
let language = "en";
const availableProfiles = ["fast", "balanced", "brussels", "relaxed"];
let selectedProfile = "fast";

//set the corect language
var userLang = navigator.language || navigator.userLanguage;
if (userLang === 'nl' || userLang === 'fr') {
    language = userLang;
}
// Check browser support
if (typeof(Storage) !== "undefined") {
    let temp_lang = localStorage.getItem("lang");
    if (temp_lang) {
        language = temp_lang;
    }
} else {
    console.log("Sorry, your browser does not support Web Storage.");
}

/**
 * Map containing the html instruction elements id's for each profile.
 * @type {{fast: string, relaxed: string, balanced: string, brussels: string}}
 */
const profileHtmlId = {
    "fast": "fast-instruction",
    "relaxed": "relaxed-instruction", // Currently not in use
    "balanced": "balanced-instruction",
    //"networks": "relaxed-instruction",
    "brussels": "other-instruction"
};

/**
 * Map containing the html id's of the profile buttons
 * @type {{"fastest-route": string, "relaxed-route": string, "balanced-route": string, "other-route": string}}
 */
const profileButtonIds = {
    "fastest-route": "fast",
    "relaxed-route": "relaxed", // Currently not in use
    "balanced-route": "balanced",
    //"networks-route": "networks",
    "other-route": "brussels"
};

/**
 * Convert the time returned by the routing api to a string representation readable for humans
 * @param s
 * @returns {string}
 */
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
 * Round number to 3 decimals
 * @param num
 * @returns {number}
 */
function roundToThree(num) {
    return +(Math.round(num + "e+3") + "e-3");
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
    let deviceSize = getBootstrapDeviceSize();
    if (!isSidebarVisible && !(deviceSize === "xs" || deviceSize === "sm")) {
        toggleSidebar();
    }
    //$(".route-instructions ul").html("Loading...");
    $(".route-instructions ul").html("");
    $(`.route-instructions  .instructions-resume`).html("");
    $(`.route-instructions .elevation-info`).html("<img src='./img/Loading.gif' style='width: 100%;'  alt=\"Loading...\" />");
    routes = {};
    removeAllRoutesFromMap();
    profiles.forEach(function (profile) {
        calculateRoute(origin, destination, profile, instructions, lang);
    });
    fitToBounds(origin, destination);
}

/**
 * Calculates a route and shows it on the map
 * @param {[int, int]} origin - The LatLng Coords
 * @param {[int, int]} destination - The LatLng Coords
 * @param {String} profile - The routing profile
 * @param {boolean} instructions - Whether or not the route instructions should be requested from the server
 * @param {String} lang - en/nl/fr select the language for the instructions
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
    routes[profile] = [];

    if (routeRequests[profile]) {
        try {
            routeRequests[profile].abort();
        } catch (e) {
            console.warn(e, routeRequests[profile]);
        }
    }

    // send api-call via ajax
    routeRequests[profile] = $.ajax({
        dataType: "json",
        url: url,
        success: success,
        error: requestError
    });

    // method to be executed on successfull ajax call (we have a route now)
    function success(json) {
        //console.log(json);

        let routeStops = [];
        let heightInfo = [];

        route = json.route.features;
        for (let i in route) {
            if (route[i].name === "Stop") {
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
            } catch (e) {
                console.log("Failed to read height info", e);
            }
        }
        routes[profile] = route;

        let $instrResume = $(`#${profileHtmlId[profile]} .instructions-resume`);
        if (routeStops.length === 2) {
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
        if (json.instructions && json.instructions.features) {
            for (let i in json.instructions.features) {
                $profileInstructions.append(`<li class="type-${json.instructions.features[i].properties.type}  angle-${json.instructions.features[i].properties.angle}">${json.instructions.features[i].properties.instruction}</li>`);
            }
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
            if (profile === selectedProfile) {
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
                        'line-width': 6
                    },
                    layout: {
                        'line-cap': 'round'
                    }
                });
            } else {
                map.addLayer({
                    id: profile,
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: json.route
                    },
                    paint: {
                        'line-color': "grey",
                        'line-opacity': 0.25,
                        'line-width': 6
                    },
                    layout: {
                        'line-cap': 'round'
                    }
                });
            }
        }
        fitToBounds(origin, destination);   //Called again to make sure the start or endpoint are not hidden behind sidebar
    }

    // Request failed, cleanup nicely
    function requestError(jqXHR, textStatus, errorThrown) {
        if (textStatus !== "abort") {
            $(`#${profileHtmlId[profile]} .elevation-info`).html(language === "en" ? "Error :(" : language === 'fr' ? "Erreur :(" : "Fout :(");

            if (map.getLayer(profile)) {
                map.removeLayer(profile);
            }
            if (map.getSource(profile)) {
                map.removeSource(profile);
            }
            console.warn('Problem calculating route: ', errorThrown, textStatus, jqXHR);
        }
    }
}

/**
 * Removes routes from map.. obviously
 */
function removeAllRoutesFromMap() {
    for (let i in availableProfiles) {
        profile = availableProfiles[i];
        if (map.getLayer(profile)) {
            map.removeLayer(profile);
        }
        if (map.getSource(profile)) {
            map.removeSource(profile);
        }
    }
}

/**
 * Method to refresh / set markers on the map. Will also start route calculation if 2 locations are present
 */
function showLocationsOnMap() {
    if (location1 === undefined || location2 === undefined) {
        removeAllRoutesFromMap();
    }
    if (location1Marker !== undefined) {
        location1Marker.remove();
    }
    if (location1 !== undefined) {
        location1Marker = createMarker(location1, '#47b200');
    }
    if (location2Marker !== undefined) {
        location2Marker.remove();
    }
    if (location2 !== undefined) {
        location2Marker = createMarker(location2, '#b50000');
    }
    if (location1 !== undefined && location2 !== undefined) {
        calculateAllRoutes(location1, location2);
        setCurrentUrl({loc1: location1, loc2: location2});
    } else if (location1) {
        setCurrentUrl({loc1: location1});
    } else if (location2) {
        setCurrentUrl({loc2: location2});
    } else {
        setCurrentUrl({});
    }
}

/**
 * Create a marker to be shown on the map.
 * @param loc Location of the marker (LngLat)
 * @param color The color of the marker
 * @returns {*} A marker
 */
function createMarker(loc, color = '#3FB1CE') {
    return new mapboxgl.Marker({color: color})
        .setLngLat(loc)
        .addTo(map);
}

/**
 * Add hillshades to the map once it's loaded
 */
map.on('load', function () {
    map.addSource('dem', {
        "type": "raster-dem",
        "url": "mapbox://mapbox.terrain-rgb"
    });
    map.addLayer({
        "id": "hillshading",
        "source": "dem",
        "type": "hillshade"
        // insert below waterway-river-canal-shadow;
        // where hillshading sits in the Mapbox Outdoors style
    }, );//'waterway-river-canal-shadow');
});

/**
 * Detect clicks on the map. If you click on a route it gets selected, if not on a route, set new location
 * (start or end, depending on whether there already is a start).
 */
map.on('click', function (e) {
    var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
    var features = map.queryRenderedFeatures(
        bbox,
        {
            //options (none)
        }
    );
    let profile_found;
    for (let i in features) {
        if ($.inArray(features[i].layer.id, availableProfiles) !== -1) {
            if (!profile_found) {
                profile_found = features[i].layer.id;
            }
        }
    }
    if (profile_found) {    // select route
        sidebarDisplayProfile(profile_found);
    } else {                // set new location
        var lngLatArray = [e.lngLat.lng, e.lngLat.lat];
        if (location1 === undefined) {
            location1 = lngLatArray;
            reverseGeocode(location1, function (adress) {
                $("#fromInput").val(adress);
                fromFieldInputDetected(document.getElementById("fromInput"));
            });
        } else {
            location2 = lngLatArray;
            reverseGeocode(location2, function (adress) {
                $("#toInput").val(adress);
                toFieldInputDetected(document.getElementById("toInput"));
            });
        }
        showLocationsOnMap();
    }
});

/**
 * Utility method to start exporting the current route as a .GPX file.
 */
function exportCurrentRoute() {
    let route = routes[selectedProfile];
    let startpoint, endpoint;
    let routepoints = [];
    for (let i in route) {
        if (route[i].name === "Stop") {
            if (startpoint) {
                endpoint = route[i].geometry.coordinates;
            } else {
                startpoint = route[i].geometry.coordinates;
            }
        } else if (route[i].geometry.type === "LineString") {
            for (let j in route[i].geometry.coordinates) {
                routepoints.push(route[i].geometry.coordinates[j]);
            }
        }
    }
    exported = exportRoute(startpoint, endpoint, routepoints);
    if (exported) {
        download(exported, "Bike4Brussels-route.gpx", ".gpx");
    }
}

/**
 * Construct a .GPX file from the given startpoint, endpoint and routepoints
 * @param startpoint LatLng of the startpoint
 * @param endpoint LatLng of the endpoint
 * @param routepoints collection of routepoints
 * @returns {string} The .gpx file
 */
function exportRoute(startpoint, endpoint, routepoints) {
    if (!routepoints || !(startpoint && endpoint)) {
        alert(getString("routeMissing", language));
    } else {
        let gpx = '<?xml version="1.0" encoding="UTF-8"?><gpx xmlns="http://www.topografix.com/GPX/1/1" creator="RouteYou" version="1.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">';
        gpx +=
            `<wpt lat="${startpoint[1]}" lon="${startpoint[0]}">
            <name>Start</name>
            <desc>Startpoint route</desc>
            <type>Marker</type>
        </wpt>
        <wpt lat="${endpoint[1]}" lon="${endpoint[0]}">
            <name>End</name>
            <desc>Endpoint route</desc>
            <type>Marker</type>
        </wpt>`;
        gpx +=
            `\n\t\t<trk>
            <name>BikeForBrussels Export</name>
            <desc>Route exported using the Bike For Brussels Routeplaner.</desc>
            <trkseg>`;
        for (var i in routepoints) {
            gpx +=
                `\n\t\t\t\t<trkpt lat="${routepoints[i][1]}" lon="${routepoints[i][0]}">
                    <ele>${routepoints[i][2]}</ele>
                </trkpt>`;
        }
        gpx +=
            `\n\t\t\t</trkseg>
        </trk>
    </gpx>`;
        //console.log(gpx);
        return gpx;
    }
}

/**
 * Function to download data to a file
 */
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

/**
 * Initialise the geocoders for the input fields.
 */
function initInputGeocoders() {
    $('.geocoder-input').typeahead({
        source: function (query, callback) {
            // MapBox Geocoder:
            $.getJSON(urls.geocoder.format(query)/*`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxAccessCode}&proximity=50.861%2C4.356&country=BE&bbox=3.9784240723%2C50.6485897217%2C4.7282409668%2C51.0552073386&limit=5`*/,
                function (data) {
                    var resArray = [];
                    for (var feature in data.features) {
                        resArray.push({
                            name: data.features[feature].text + " (" + data.features[feature].place_name + ")",
                            loc: data.features[feature].center
                        });
                    }
                    callback(resArray);
                    fromFieldInputDetected(document.getElementById("fromInput"));
                    toFieldInputDetected(document.getElementById("toInput"));
                });

            // Nominatim Geocoder
            //$.getJSON(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon=0&addressdetails=0&countrycodes=BE`/*bounded=1&viewbox=4.239465,50.930741,4.501558,50.784803`*/, function (data) {
            /*    var resArray = [];
                for (var feature in data) {
                    resArray.push({name: data[feature].display_name, loc: [data[feature].lon, data[feature].lat]});
                }
                callback(resArray);
            });*/

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
                console.warn("FIELD NOT FOUND!");
            }
            showLocationsOnMap();
        }
    });
}

/**
 * Convert a location to an adress.
 * @param location LatLng of the location to be converted.
 * @param callback Function to be called when conversion is complete
 */
function reverseGeocode(location, callback) {
    var lng = location[0];
    var lat = location[1];
    //$.getJSON(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=0`, function (data) {
    $.getJSON(urls.reverseGeocoder.format(lng, lat), function (data) {
        callback(data.features[0].text + " (" + data.features[0].place_name + ")");
        //fromFieldInputDetected(document.getElementById("fromInput"));
        //toFieldInputDetected(document.getElementById("toInput"));
    });
}

/**
 * Use the current user location as a startpoint.
 */
function useCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, locationFetchFailed);
        if(typeof(Storage) !== "undefined") {
            localStorage.removeItem("geolocation.permission.denieddate");
        }
    } else {
        console.warn("Geolocation is not supported by this browser.");
    }
}

/**
 * Utility method to add days to a date object
 * @param days The number of days to add
 * @returns {Date} The calculated date
 */
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

/**
 * Set location1 to the specified position, show it on the map and fill in the adress in the input field
 * @param position the position to be set (LatLng)
 */
function showPosition(position) {
    location1 = [position.coords.longitude, position.coords.latitude];
    showLocationsOnMap();
    reverseGeocode(location1, function (adress) {
        $("#fromInput").val(adress);
        fromFieldInputDetected(document.getElementById("fromInput"));
    });
}

/**
 * Function that is called when geolocation failed. Sets value in localstorage so that the next time the page loads this can be taken into account.
 * @param error
 */
function locationFetchFailed(error) {
    if (error.code === error.PERMISSION_DENIED) {
        console.log("Geolocation permission denied");
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("geolocation.permission.denieddate", new Date());
        }
    } else {
        console.warn("Accessing geolocation failed.", error);
    }
}

/**
 * Zoom the map to the given 2 points.
 * @param origin
 * @param destination
 */
function fitToBounds(origin, destination) {
    let bounds = new mapboxgl.LngLatBounds();
    bounds.extend(origin);
    bounds.extend(destination);
    // Fit the map to the route
    let paddingRight = 50;
    if (isSidebarVisible) {
        paddingRight += $("#sidebar-right-container").width();
    }
    map.fitBounds(bounds, {
        padding: {
            top: 75,
            right: paddingRight,
            bottom: 75,
            left: 50
        }
    });
}

/**
 * Make location1 location2 and location2 location1.
 */
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

/**
 * Utility method to swap 2 array values (usefull for LatLng <=> LngLat)
 * @param array
 * @returns {Array}
 */
function swapArrayValues(array) {
    var newArray = [];
    newArray[0] = array[1];
    newArray[1] = array[0];
    /*const temp = array[1];
    array[1] = array[0];
    array[0] = temp;*/
    return newArray;
}

// initialise the geocoders already
initInputGeocoders();

var isSidebarVisible = false;
let windowLoaded = false;

/**
 * Make the sidebar visible/invisible
 */
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

/**
 * Select a profile with the given button id
 * @param id
 */
function sidebarDisplayProfileHtmlId(id) {
    id = id.replace("-mobile", "");
    sidebarDisplayProfile(profileButtonIds[id]);
}

/**
 * Select the profile
 * @param profile
 */
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

/**
 * Helper method to determin the screen size bootstrap-wise
 * @returns {*}
 */
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

/**
 * Get the key of the given value in a map
 * @param object
 * @param value
 * @returns {string | undefined}
 */
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

/**
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

/**
 * Display the elevation data in a nice graph
 * @param htmlCanvasId
 * @param heightInfo
 */
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

/**
 * Detect which language the user has selected
 * @param element
 */
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

/**
 * Prepare an iframe to be printed. (opens the print preview dialog)
 */
function printExport() {
    let mapimg = new Image();
    mapimg.id = "map-pic";
    mapimg.src = document.getElementsByClassName("mapboxgl-canvas")[0].toDataURL();
    let html = "<head>" +
        "<title>Bike For Brussels - Route export</title>" +
        '<link href="style/printstyle.css" rel="stylesheet" type="text/css">' +
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"\n' +
        '          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">' +
        "</head>" +
        "<body>" +
        "<h1>Bike For Brussels - Routeplanner</h1>" +
        "<p id='image_for_crop'>" /*+ mapimgHtml */ + "</p>" +
        "<div id='instructionsPrintContainer'>" +
        document.getElementById(profileHtmlId[selectedProfile]).innerHTML +
        "</div></body>";
    window.frames["print_frame"].document.body.innerHTML = html;
    window.frames["print_frame"].document.getElementById("image_for_crop").appendChild(mapimg);
    window.frames["print_frame"].document.getElementsByClassName("elevation-info")[0].innerHTML = "";
    window.frames["print_frame"].document.getElementsByClassName("profile-explanation-icons")[0].innerHTML = "";
    window.frames["print_frame"].window.focus();
    setTimeout(function () {
        window.frames["print_frame"].window.print();
    }, 100);
}

/**
 * Get the parameters that are encoded in the given url
 * @param url
 */
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

/**
 * Set the current url, so that refreshing the page will take you to the same locations.
 * @param params - map containing the parameters to encode (in this case probably loc1 and loc2)
 */
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

    $("#ModalExportOptions").html(getString("exportOptionsTitle", lang));
    $("#export-general-explanation").html(getString("exportgeneralexplanation", lang));
    $("#export-gpx-explanation").html(getString("exportgpxexplanation", lang));
    $("#export-print-explanation").html(getString("exportprintexplanation", lang));
    $("#exportgpxbutton").html(getString("exportgpxbutton", lang));
    $("#exportprintbutton").html(getString("exportprintbutton", lang));
    $(".btn-close-export").html(getString("close", lang));
}

/**
 * Method that gets called when input is detected in the Startpoint input field
 * @param el - The input field itself
 */
function fromFieldInputDetected(el) {
    if (!el.value || el.value === "") {
        //show location button
        $("#clearInputFieldFromButton").hide();
        $("#useLocationInputFieldButton").show();
        if (windowLoaded) {
            console.log("setting location 1 to undef");
            location1 = undefined;
            showLocationsOnMap();
        }
    } else {
        //show empty button
        $("#clearInputFieldFromButton").show();
        $("#useLocationInputFieldButton").hide();
    }
}

/**
 * Method that gets called when input is detected in the Endpoint input field
 * @param el - The input field itself
 */
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

/**
 * Do stuff when the window is done loading
 */
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
    } else {
        if (!(typeof(Storage) !== "undefined" && new Date(localStorage.getItem("geolocation.permission.denieddate")).addDays(7) > new Date())) {
            setTimeout(function () {
                useCurrentLocation();
            }, 2000);
        }
    }
    if (urlparams.loc2) {
        location2 = urlparams.loc2;
    }
    if (location1) {
        reverseGeocode(location1, function (adress) {
            $("#fromInput").val(adress);
        });
        $("#useLocationInputFieldButton").hide();
        $("#clearInputFieldFromButton").show();
    }
    if (location2) {
        reverseGeocode(location2, function (adress) {
            $("#toInput").val(adress);
        });
        $("#clearInputFieldToButton").show();
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
    windowLoaded = true;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(
            function (registrations) {
                for (let registration of registrations) {
                    registration.unregister();
                }
            }
        );
    }
};

let deferredPrompt;

/**
 * Logic for the "Add to homescreen" functionallity on mobile devices
 */
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    if (deferredPrompt) {
        //$("#btnAddToHomescreen").show();
        document.getElementById("btnAddToHomescreen").style.display = 'block';
    }
});

/**
 * Logic for the "Add to homescreen" functionallity on mobile devices
 */
document.getElementById("btnAddToHomescreen").addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    document.getElementById("btnAddToHomescreen").style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
});

/**
 * Empty the contents of the startpoint input field
 */
function clearInputFieldFrom() {
    $("#fromInput").val("");
    location1 = undefined;
    showLocationsOnMap();
    fromFieldInputDetected(document.getElementById("fromInput"));
}

/**
 * Empty the contents of the endpoint input field
 */
function clearInputFieldTo() {
    $("#toInput").val("");
    location2 = undefined;
    showLocationsOnMap();
    toFieldInputDetected(document.getElementById("toInput"));
}
const dict = {
    locationMissing: {  //Currently not used
        en: "Please enter at least 2 locations before continuing.",
        fr: "Veuillez entrer au moins deux endroits avant de continuer.",
        nl: "Gelieve minstens 2 locaties op te geven alvorens verder te gaan."
    },
    routeMissing: {
        en: "No route found for the given selections.",
        fr: "Aucun itinéraire trouvé pour les sélections données.",
        nl: "Er is geen route gevonden voor de gegevens selecties."
    },
    instructionsCollapseButton: {
        en: "Instructions",
        fr: "Instructions",
        nl: "Instructies"
    },
    fromInputPlaceholder: {
        en: "From",
        fr: "De",
        nl: "Van"
    },
    toInputPlaceholder: {
        en: "To",
        fr: "À",
        nl: "Naar"
    },
    profileNameFast: {
        en: "Fast",
        fr: "Rapide",
        nl: "Snel"
    },
    profileNameBalanced: {
        en: "Balanced",
        fr: "Équilibré",
        nl: "Gebalanceerd"
    },
    profileNameRelaxed: {
        en: "Relaxed",
        fr: "Détendu",
        nl: "Ontspannen"
    },
    profileNameNetworks: {
        en: "Networks",
        fr: "Réseaux",
        nl: "Netwerk"
    },
    profileDescriptionFast: {
      en: "This profile minimizes the time to destination.",
      fr: "Ce profil minimise le temps de destination.",
      nl: "Dit profiel minimaliseert de tijd naar uw bestemming.",
    },
    profileDescriptionBalanced: {
      en: "This profile avoids the biggest streets and prefers cycleways.",
      fr: "Ce profil évite les plus grandes rues et préfère les pistes cyclables.",
      nl: "Dit profiel vermijdt de grote wegen en verkiest voornamelijk het fietsnetwerk."
    },
    profileDescriptionRelaxed: {
      en: "This profile avoids big roads, highly prefers cycleways, avoids uncomfortable surfaces such as cobblestones, and avoids streets with parallel parked cars.",
      fr: "Ce profil évite les grandes routes, privilégie fortement les pistes cyclables, évite les surfaces inconfortables telles que les pavés, et évite les rues avec des voitures en stationnement parallèles.",
      nl: "Dit profiel vermijdt grote wegen, geeft de voorkeur aan fietspaden, vermijdt oncomfortabele oppervlakken zoals kasseien en vermijdt straten met parallel geparkeerde auto's."
    },
    profileDescriptionNetworks: {
      en: "This profile heavily prefers the Brussels cycle network.",
      fr: "Ce profil privilégie fortement le réseau cyclable Bruxellois.",
      nl: "Dit profiel verkiest het fietsnetwerk in Brussel."
    },
    profileTitleFast: {
      en: "This is the FAST route",
      fr: "C'est la route la plus RAPIDE.",
      nl: "Dit is de SNELSTE route.",
    },
    profileTitleBalanced: {
      en: "This is the BALANCED route",
      fr: "C'est la route ÉQUILIBRÉE.",
      nl: "Dit is de GEBLANCEERDE route"
    },
    profileTitleRelaxed: {
      en: "This is the RELAXED route",
      fr: "C'est la route RELAXÉE",
      nl: "Dit is de ONTSPANNEN route"
    },
    profileTitleNetwork: {
      en: "This is the NETWORK route",
      fr: "C'est la route avec le RÉSEAU CYCLABLE",
      nl: "Dit is de NETWERK route"
    },
    profileProposal: {
      en: "Proposed route for you",
      fr: "C'est la route proposée pour vous",
      nl: "Dit is de voorgestelde route"
    },
    exportOptionsTitle: {
      en: "Export Options",
      fr: "Options d'exportation",
      nl: "Exporteer opties"
    },
    exportgeneralexplanation: {
        en: "Please select a method to export your route.",
        fr: "Veuillez sélectionner une méthode pour exporter votre itinéraire.",
        nl: "Selecteer een manier om uw route te exporteren."
    },
    exportgpxexplanation: {
        en: "You can export .gpx files to navigation applications and GPS devices.",
        fr: "Vous pouvez exporter des fichiers .gpx vers des applications de navigation et des appareils GPS",
        nl: "U kan de route exporteren naar een .gpx bestand. Dit kan geopend worden door navigatie applicaties en gps toestellen."
    },
    exportprintexplanation: {
        en: "Not into digital? Print it out!",
        fr: "Not into digital? Print it out!",
        nl: "Houdt u niet van digitaal? Print uw route op papier!"
    },
    exportgpxbutton: {
        en: "Export as .gpx file",
        fr: "Exporter au format .gpx",
        nl: "Exporteer als .gpx bestand"
    },
    exportprintbutton: {
        en: "Print",
        fr: "Imprimer",
        nl: "Afdrukken"
    },
    close: {
        en: "Close",
        fr: "Fermer",
        nl: "Sluit"
    }
};

function getString(stringId, lang){
    return dict[stringId][lang];
}
