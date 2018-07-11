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

function sidebarDisplayProfile(profile){
    if(location1 && location2) {
        removeAllRoutesFromMap();
        calculateRoute(location1, location2, profile = profile);
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
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});

window.onload = function() {
    sidebarDisplayProfile("fast");
};
