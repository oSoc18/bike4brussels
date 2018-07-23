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
};

function getString(stringId, lang){
    return dict[stringId][lang];
}
