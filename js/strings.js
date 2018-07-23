const dict = {
    locationMissing: {  //Currently not used
        en: "Please enter at least 2 locations before continuing.",
        fr: "[TBT]",
        nl: "Gelieve minstens 2 locaties op te geven alvorens verder te gaan."
    },
    routeMissing: {
        en: "No route found for the given selections.",
        fr: "[TBT]",
        nl: "Er is geen route gevonden voor de gegevens selecties."
    },
    instructionsCollapseButton: {
        en: "Instructions",
        fr: "[TBT]",
        nl: "Instructies"
    },
    fromInputPlaceholder: {
        en: "From",
        fr: "[TBT]",
        nl: "Van"
    },
    toInputPlaceholder: {
        en: "To",
        fr: "[TBT]",
        nl: "Naar"
    },
    profileNameFast: {
        en: "Fast",
        fr: "[TBT]",
        nl: "Snel"
    },
    profileNameBalanced: {
        en: "Balanced",
        fr: "[TBT]",
        nl: "Gebalanceerd"
    },
    profileNameRelaxed: {
        en: "Relaxed",
        fr: "[TBT]",
        nl: "Ontspannen"
    },
    profileNameNetworks: {
        en: "Networks",
        fr: "[TBT]",
        nl: "Netwerk"
    },
};

function getString(stringId, lang){
    return dict[stringId][lang];
}