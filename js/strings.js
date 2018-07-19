const dict = {
    locationMissing: {  //Currently not used
        eng: "Please enter at least 2 locations before continuing.",
        fr: "",
        nl: "Gelieve minstens 2 locaties op te geven alvorens verder te gaan."
    },
    routeMissing: {
        eng: "No route found for the given selections.",
        fr: "",
        nl: "Er is geen route gevonden voor de gegevens selecties."
    }
};

function getString(stringId, lang){
    return dict[stringId][lang];
}