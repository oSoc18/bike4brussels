const urls = {
    mapStyle: 'https://openmaptiles.github.io/positron-gl-style/style-cdn.json',
    network: 'https://cyclenetworks.osm.be/brumob/data/network.geojson',
    route: 'https://cyclerouting-api.osm.be'
};

//const center = { latlng: [4.355975, 50.860633], zoom: 11 };

// TODO: remove example json as soon as we have a test-server for this purpose
const examplejson = {
    "route": {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.295167, 50.87766], [4.295036, 50.87762], [4.294991, 50.87754], [4.294858, 50.87749], [4.294643, 50.8774], [4.294581, 50.87735], [4.294474, 50.8773], [4.294319, 50.87725], [4.294212, 50.87719], [4.294168, 50.87715], [4.294119, 50.87708], [4.294102, 50.87703], [4.29336, 50.87644]]
            },
            "properties": {
                "highway": "path",
                "profile": "bicycle.brussels",
                "distance": "190.8543",
                "time": "45.80502",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.29336, 50.87644], [4.293894, 50.87623], [4.293983, 50.87616], [4.294189, 50.87597], [4.294248, 50.87593]]
            },
            "properties": {
                "highway": "path",
                "profile": "bicycle.brussels",
                "distance": "276.5543",
                "time": "66.37302",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.294248, 50.87593], [4.294272, 50.87591]]},
            "properties": {
                "bridge": "yes",
                "highway": "path",
                "profile": "bicycle.brussels",
                "distance": "279.5543",
                "time": "67.09302",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.294272, 50.87591], [4.29428, 50.8759]]},
            "properties": {
                "highway": "path",
                "profile": "bicycle.brussels",
                "distance": "280.5543",
                "time": "67.33302",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.29428, 50.8759], [4.293711, 50.87566], [4.293314, 50.87548], [4.293032, 50.87533], [4.292865, 50.87524], [4.292227, 50.87492]]
            },
            "properties": {
                "highway": "path",
                "profile": "bicycle.brussels",
                "distance": "461.3543",
                "time": "110.725",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.292227, 50.87492], [4.292299, 50.87489], [4.292355, 50.87486]]
            },
            "properties": {
                "name": "Rue Nestor Martin - Nestor Martinstraat",
                "highway": "residential",
                "oneway": "yes",
                "oneway:bicycle": "no",
                "profile": "bicycle.brussels",
                "distance": "472.8543",
                "time": "113.485",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.292355, 50.87486], [4.293061, 50.8746], [4.293414, 50.8744]]
            },
            "properties": {
                "name": "Rue Nestor Martin - Nestor Martinstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "563.4543",
                "time": "135.229",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.293414, 50.8744], [4.293494, 50.87435], [4.293517, 50.87433], [4.293547, 50.87432]]
            },
            "properties": {
                "name": "Rue Nestor Martin - Nestor Martinstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "576.2543",
                "time": "138.301",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.293547, 50.87432], [4.293709, 50.87423]]},
            "properties": {
                "name": "Rue Nestor Martin - Nestor Martinstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "590.9543",
                "time": "141.829",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.293709, 50.87423], [4.293748, 50.87421], [4.294215, 50.87395]]
            },
            "properties": {
                "name": "Rue Nestor Martin - Nestor Martinstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "638.0543",
                "time": "153.133",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.294215, 50.87395], [4.294167, 50.87392], [4.290807, 50.87249]]
            },
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "927.7543",
                "time": "222.661",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.290807, 50.87249], [4.290777, 50.87247], [4.290549, 50.87238]]
            },
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "949.3542",
                "time": "227.845",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.290549, 50.87238], [4.290394, 50.87231]]},
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "962.3542",
                "time": "230.965",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.290394, 50.87231], [4.29026, 50.87226]]},
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "973.6542",
                "time": "233.677",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.29026, 50.87226], [4.289996, 50.87215], [4.28996, 50.87213]]
            },
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "999.1542",
                "time": "239.797",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.28996, 50.87213], [4.289911, 50.8721], [4.289867, 50.87209], [4.289848, 50.87207]]
            },
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "profile": "bicycle.brussels",
                "distance": "1008.954",
                "time": "242.149",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.289848, 50.87207], [4.289826, 50.87206], [4.289799, 50.87204]]
            },
            "properties": {
                "name": "Rue Bois des Îles - Eilandenhoutstraat",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1014.054",
                "time": "243.373",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.289799, 50.87204], [4.289895, 50.87193]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1028.354",
                "time": "246.805",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.289895, 50.87193], [4.290103, 50.8717], [4.290341, 50.87144]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1090.654",
                "time": "261.757",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.290341, 50.87144], [4.290593, 50.87115]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1127.754",
                "time": "270.661",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.290593, 50.87115], [4.290648, 50.87108]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1135.954",
                "time": "272.629",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.290648, 50.87108], [4.290755, 50.87094]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1153.254",
                "time": "276.781",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.290755, 50.87094], [4.290897, 50.87085], [4.290954, 50.87081]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "1173.554",
                "time": "281.653",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.290954, 50.87081], [4.291031, 50.87071]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1185.454",
                "time": "284.509",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.291031, 50.87071], [4.291098, 50.87063], [4.29137, 50.87031], [4.291687, 50.86995]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1282.254",
                "time": "307.741",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.291687, 50.86995], [4.291677, 50.86993], [4.291656, 50.86988]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1289.354",
                "time": "309.445",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.291656, 50.86988], [4.291659, 50.86986], [4.291896, 50.86958], [4.291928, 50.86956]]
            },
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "footway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1330.454",
                "time": "319.309",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.291928, 50.86956], [4.291951, 50.86953]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "footway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1334.154",
                "time": "320.197",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.291951, 50.86953], [4.291989, 50.86949], [4.292025, 50.86944]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1345.154",
                "time": "322.837",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.292025, 50.86944], [4.292125, 50.8694], [4.292175, 50.86938]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1357.854",
                "time": "325.885",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.292175, 50.86938], [4.292202, 50.86935]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a,PV-GW",
                "profile": "bicycle.brussels",
                "distance": "1361.654",
                "time": "326.797",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.292202, 50.86935], [4.292342, 50.86918]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1382.354",
                "time": "331.765",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.292342, 50.86918], [4.292439, 50.86906]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1397.154",
                "time": "335.317",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.292439, 50.86906], [4.293292, 50.86808]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1521.454",
                "time": "365.149",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.293292, 50.86808], [4.293422, 50.86794]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1540.254",
                "time": "369.661",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.293422, 50.86794], [4.293529, 50.86782], [4.293614, 50.86772]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1567.554",
                "time": "376.213",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.293614, 50.86772], [4.293651, 50.86768]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1572.854",
                "time": "377.485",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.293651, 50.86768], [4.293698, 50.86763]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1579.254",
                "time": "379.021",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.293698, 50.86763], [4.293981, 50.86734], [4.294094, 50.86723]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1631.654",
                "time": "391.597",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.294094, 50.86723], [4.294096, 50.8672], [4.294104, 50.8671]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1645.654",
                "time": "394.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.294104, 50.8671], [4.294572, 50.8667]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "footway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1701.354",
                "time": "408.325",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.294572, 50.8667], [4.294695, 50.86662], [4.294897, 50.86645], [4.294919, 50.86643]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1740.154",
                "time": "417.637",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.294919, 50.86643], [4.29496, 50.86642], [4.295028, 50.86641]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1748.154",
                "time": "419.557",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.295028, 50.86641], [4.295083, 50.86636]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1754.554",
                "time": "421.093",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.295083, 50.86636], [4.295165, 50.86629]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1764.354",
                "time": "423.445",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.295165, 50.86629], [4.295856, 50.86571]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1844.954",
                "time": "442.789",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.295856, 50.86571], [4.296156, 50.86545]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1880.254",
                "time": "451.261",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.296156, 50.86545], [4.296304, 50.86533]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1897.254",
                "time": "455.341",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.296304, 50.86533], [4.296516, 50.86512], [4.296637, 50.86501], [4.296847, 50.86485]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "1962.954",
                "time": "471.109",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.296847, 50.86485], [4.297047, 50.86469], [4.297208, 50.86457]]
            },
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2002.954",
                "time": "480.709",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.297208, 50.86457], [4.297289, 50.86451]]},
            "properties": {
                "name": "Chaussée de Gand - Gentsesteenweg",
                "ref": "N9a",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2011.754",
                "time": "482.821",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.297289, 50.86451], [4.297304, 50.8645]]},
            "properties": {
                "name": "Place Docteur Schweitzer - Dokter Schweitzerplein",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2013.354",
                "time": "483.205",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.297304, 50.8645], [4.29733, 50.86451], [4.297405, 50.86452], [4.297417, 50.86453]]
            },
            "properties": {
                "name": "Avenue Josse Goffin - Josse Goffinlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2021.954",
                "time": "485.269",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.297417, 50.86453], [4.297593, 50.86458]]},
            "properties": {
                "name": "Avenue Josse Goffin - Josse Goffinlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2035.654",
                "time": "488.557",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.297593, 50.86458], [4.297781, 50.86464]]},
            "properties": {
                "name": "Avenue Josse Goffin - Josse Goffinlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2050.254",
                "time": "492.061",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.297781, 50.86464], [4.297814, 50.86464], [4.297941, 50.86462], [4.298693, 50.86484], [4.29914, 50.86497], [4.299908, 50.8652]]
            },
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2214.154",
                "time": "531.397",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.299908, 50.8652], [4.300037, 50.86524]]},
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2223.954",
                "time": "533.749",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.300037, 50.86524], [4.300147, 50.86527]]},
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2232.354",
                "time": "535.765",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.300147, 50.86527], [4.301854, 50.86577]]},
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2364.554",
                "time": "567.493",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.301854, 50.86577], [4.301978, 50.86581]]},
            "properties": {
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2374.154",
                "time": "569.797",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.301978, 50.86581], [4.301999, 50.86578], [4.302983, 50.86528]]
            },
            "properties": {
                "name": "Avenue Laure - Lauralaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2466.654",
                "time": "591.997",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.302983, 50.86528], [4.304394, 50.86377]]},
            "properties": {
                "name": "Avenue Laure - Lauralaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2661.554",
                "time": "638.773",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.304394, 50.86377], [4.30507, 50.86304], [4.305493, 50.86258], [4.305533, 50.86252]]
            },
            "properties": {
                "name": "Avenue Laure - Lauralaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2821.654",
                "time": "677.197",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.305533, 50.86252], [4.306285, 50.86266], [4.30639, 50.86268]]
            },
            "properties": {
                "name": "Avenue de Koekelberg - Koekelberglaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "2884.254",
                "time": "692.221",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.30639, 50.86268], [4.306515, 50.8627], [4.306805, 50.86276], [4.308657, 50.86314]]
            },
            "properties": {
                "name": "Avenue Édouard Bénès - Édouard Bénèslaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "3051.554",
                "time": "732.373",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.308657, 50.86314], [4.308891, 50.86319]]},
            "properties": {
                "name": "Avenue Édouard Bénès - Édouard Bénèslaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "3068.854",
                "time": "736.525",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.308891, 50.86319], [4.312409, 50.86394]]},
            "properties": {
                "name": "Avenue Édouard Bénès - Édouard Bénèslaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11a",
                "profile": "bicycle.brussels",
                "distance": "3329.254",
                "time": "799.021",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.312409, 50.86394], [4.312428, 50.86391], [4.312459, 50.8639], [4.312498, 50.86388], [4.312542, 50.86388], [4.312586, 50.86388]]
            },
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3344.954",
                "time": "802.789",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.312586, 50.86388], [4.312634, 50.86384], [4.313354, 50.86329], [4.313996, 50.86281]]
            },
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3499.154",
                "time": "839.797",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.313996, 50.86281], [4.31463, 50.86233]]},
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3568.654",
                "time": "856.477",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.31463, 50.86233], [4.31513, 50.86195]]},
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3623.654",
                "time": "869.677",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.31513, 50.86195], [4.3152, 50.86189], [4.315255, 50.86184]]
            },
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3638.754",
                "time": "873.301",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.315255, 50.86184], [4.315296, 50.8618], [4.315378, 50.86172]]
            },
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3654.854",
                "time": "877.165",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.315378, 50.86172], [4.31544, 50.86166]]},
            "properties": {
                "name": "Avenue du Château - Kasteellaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3662.854",
                "time": "879.085",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.31544, 50.86166], [4.315499, 50.8616]]},
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3670.354",
                "time": "880.885",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.315499, 50.8616], [4.31564, 50.8615]]},
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3685.454",
                "time": "884.509",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.31564, 50.8615], [4.315917, 50.86128], [4.315953, 50.86126]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3720.054",
                "time": "892.813",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.315953, 50.86126], [4.31606, 50.86116], [4.316113, 50.86113], [4.316315, 50.86101], [4.316583, 50.86089], [4.316756, 50.86085]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3793.554",
                "time": "910.453",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.316756, 50.86085], [4.317039, 50.86079], [4.317123, 50.86079]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3820.254",
                "time": "916.861",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.317123, 50.86079], [4.317214, 50.86078], [4.317298, 50.86081]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3833.154",
                "time": "919.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.317298, 50.86081], [4.31734, 50.86079], [4.317406, 50.86077]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3841.654",
                "time": "921.9969",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.317406, 50.86077], [4.317487, 50.86077], [4.31757, 50.8608]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3853.654",
                "time": "924.8769",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.31757, 50.8608], [4.317629, 50.86084], [4.317645, 50.86086], [4.317659, 50.86088]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3864.654",
                "time": "927.5169",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.317659, 50.86088], [4.317784, 50.8609]]},
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "3873.754",
                "time": "929.7009",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.317784, 50.8609], [4.31792, 50.86093], [4.318974, 50.86115], [4.319735, 50.86131]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4018.054",
                "time": "964.3329",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.319735, 50.86131], [4.322184, 50.86185], [4.322469, 50.86191], [4.322576, 50.86193]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4228.954",
                "time": "1014.949",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.322576, 50.86193], [4.322627, 50.86192]]},
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4232.854",
                "time": "1015.885",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.322627, 50.86192], [4.322697, 50.86191], [4.322764, 50.86192], [4.322813, 50.86195]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4247.054",
                "time": "1019.293",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.322813, 50.86195], [4.322834, 50.86196], [4.322852, 50.86199]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4252.454",
                "time": "1020.589",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.322852, 50.86199], [4.322999, 50.86201], [4.323354, 50.86209]]
            },
            "properties": {
                "name": "Avenue de la Liberté - Vrijheidslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4289.454",
                "time": "1029.469",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.323354, 50.86209], [4.32343, 50.86198], [4.323678, 50.86192], [4.324495, 50.86172], [4.324869, 50.86164], [4.325083, 50.8616]]
            },
            "properties": {
                "name": "Rue de Normandie - Normandiëstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4426.054",
                "time": "1062.253",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.325083, 50.8616], [4.325799, 50.86141], [4.326732, 50.8612], [4.326979, 50.86108], [4.327167, 50.86094], [4.327381, 50.86059]]
            },
            "properties": {
                "name": "Rue de Normandie - Normandiëstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4634.454",
                "time": "1112.269",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.327381, 50.86059], [4.327366, 50.86049], [4.327901, 50.86026]]
            },
            "properties": {
                "name": "Rue de Ganshoren - Ganshorensestraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4690.654",
                "time": "1125.757",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.327901, 50.86026], [4.328022, 50.8603], [4.328918, 50.86077]]
            },
            "properties": {
                "name": "Rue Jules Debecker - Jules Debeckerstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4782.254",
                "time": "1147.741",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.328918, 50.86077], [4.330766, 50.86057], [4.330901, 50.86055]]
            },
            "properties": {
                "name": "Rue de la Tannerie - Huidevetterijstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4923.754",
                "time": "1181.701",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.330901, 50.86055], [4.331248, 50.86052], [4.331522, 50.86036]]
            },
            "properties": {
                "name": "Place Vanhuffel - Vanhuffelplein",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4973.854",
                "time": "1193.725",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.331522, 50.86036], [4.331576, 50.86033]]},
            "properties": {
                "name": "Place Vanhuffel - Vanhuffelplein",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "4978.954",
                "time": "1194.949",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.331576, 50.86033], [4.331681, 50.8604], [4.331805, 50.86049], [4.332021, 50.86064]]
            },
            "properties": {
                "name": "Rue de l'Église Sainte-Anne - Sint-Annakerkstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5025.054",
                "time": "1206.013",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.332021, 50.86064], [4.332083, 50.86068]]},
            "properties": {
                "name": "Rue de l'Église Sainte-Anne - Sint-Annakerkstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5031.354",
                "time": "1207.525",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.332083, 50.86068], [4.332172, 50.86064]]},
            "properties": {
                "name": "Rue Emile Sergijsels - Emile Sergijselsstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5039.054",
                "time": "1209.373",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.332172, 50.86064], [4.332771, 50.86028]]},
            "properties": {
                "name": "Rue Emile Sergijsels - Emile Sergijselsstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5096.654",
                "time": "1223.197",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.332771, 50.86028], [4.333311, 50.85998], [4.333378, 50.85995]]
            },
            "properties": {
                "name": "Rue Emile Sergijsels - Emile Sergijselsstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5152.954",
                "time": "1236.709",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.333378, 50.85995], [4.333445, 50.85992], [4.333666, 50.85981], [4.333967, 50.85973]]
            },
            "properties": {
                "name": "Rue Emile Sergijsels - Emile Sergijselsstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5201.354",
                "time": "1248.325",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.333967, 50.85973], [4.334344, 50.85964]]},
            "properties": {
                "name": "Rue Emile Sergijsels - Emile Sergijselsstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5229.654",
                "time": "1255.117",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.334344, 50.85964], [4.334798, 50.85963], [4.335101, 50.85967]]
            },
            "properties": {
                "name": "Rue Emile Sergijsels - Emile Sergijselsstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5283.154",
                "time": "1267.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.335101, 50.85967], [4.335155, 50.85957], [4.335286, 50.85933], [4.335379, 50.85923], [4.335584, 50.85907], [4.336215, 50.85864]]
            },
            "properties": {
                "name": "Chaussée de Jette - Jetsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5423.954",
                "time": "1301.749",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.336215, 50.85864], [4.336588, 50.85839]]},
            "properties": {
                "name": "Chaussée de Merchtem - Steenweg op Merchtem",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5461.654",
                "time": "1310.797",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.336588, 50.85839], [4.33665, 50.85835]]},
            "properties": {
                "name": "Chaussée de Merchtem - Steenweg op Merchtem",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5468.354",
                "time": "1312.405",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.33665, 50.85835], [4.336698, 50.85831]]},
            "properties": {
                "name": "Chaussée de Merchtem - Steenweg op Merchtem",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5473.354",
                "time": "1313.605",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.336698, 50.85831], [4.336793, 50.85821], [4.336866, 50.8581], [4.336958, 50.85751], [4.336967, 50.85747]]
            },
            "properties": {
                "name": "Chaussée de Merchtem - Steenweg op Merchtem",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5570.254",
                "time": "1336.861",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.336967, 50.85747], [4.337076, 50.85744], [4.337906, 50.85721]]
            },
            "properties": {
                "name": "Rue du Presbytère - Pastorijstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5642.354",
                "time": "1354.165",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.337906, 50.85721], [4.338679, 50.85698], [4.338792, 50.85695]]
            },
            "properties": {
                "name": "Rue du Presbytère - Pastorijstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5711.054",
                "time": "1370.653",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.338792, 50.85695], [4.338869, 50.85688]]},
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5719.654",
                "time": "1372.717",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.338869, 50.85688], [4.338916, 50.85684]]},
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5725.354",
                "time": "1374.085",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.338916, 50.85684], [4.339445, 50.85635]]},
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5791.054",
                "time": "1389.853",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.339445, 50.85635], [4.339467, 50.85633], [4.33952, 50.85629]]
            },
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5799.954",
                "time": "1391.989",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.33952, 50.85629], [4.339616, 50.85632], [4.339643, 50.85633]]
            },
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5809.554",
                "time": "1394.293",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.339643, 50.85633], [4.340079, 50.85644]]},
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5842.554",
                "time": "1402.213",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.340079, 50.85644], [4.340169, 50.85644]]},
            "properties": {
                "name": "Parvis Saint-Jean-Baptiste - Sint-Jan-Baptistvoorplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5848.854",
                "time": "1403.725",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.340169, 50.85644], [4.340705, 50.85624], [4.340812, 50.85619]]
            },
            "properties": {
                "name": "Rue de l'Avenir - Toekomststraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5901.454",
                "time": "1416.349",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.340812, 50.85619], [4.340874, 50.85617], [4.341609, 50.85589]]
            },
            "properties": {
                "name": "Rue de l'Avenir - Toekomststraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5966.854",
                "time": "1432.045",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.341609, 50.85589], [4.341924, 50.85576]]},
            "properties": {
                "name": "Rue de l'Avenir - Toekomststraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "5992.954",
                "time": "1438.309",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.341924, 50.85576], [4.34265, 50.85546]]},
            "properties": {
                "name": "Rue de l'Avenir - Toekomststraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6054.154",
                "time": "1452.997",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.34265, 50.85546], [4.342774, 50.85537]]},
            "properties": {
                "name": "Rue de l'Avenir - Toekomststraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6067.154",
                "time": "1456.117",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.342774, 50.85537], [4.342901, 50.85535]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6076.254",
                "time": "1458.301",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.342901, 50.85535], [4.342929, 50.85534], [4.34295, 50.85533]]
            },
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6080.354",
                "time": "1459.285",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.34295, 50.85533], [4.343234, 50.85522]]},
            "properties": {
                "bridge": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6103.654",
                "time": "1464.877",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.343234, 50.85522], [4.343246, 50.85522]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6104.554",
                "time": "1465.093",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.343246, 50.85522], [4.343289, 50.8552], [4.343326, 50.85519], [4.343427, 50.85514]]
            },
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6119.554",
                "time": "1468.693",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.343427, 50.85514], [4.343315, 50.85502]]},
            "properties": {
                "ref": "R20",
                "name": "Boulevard de Nieuport - Nieuwpoortlaan",
                "highway": "primary",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6135.154",
                "time": "1472.437",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.343315, 50.85502], [4.343392, 50.85498], [4.344427, 50.85449]]
            },
            "properties": {
                "name": "Rue de Witte de Haelen - De Witte de Haelenstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6233.154",
                "time": "1495.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.344427, 50.85449], [4.345151, 50.85415]]},
            "properties": {
                "name": "Rue de Witte de Haelen - De Witte de Haelenstraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6296.654",
                "time": "1511.197",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.345151, 50.85415], [4.345024, 50.85389], [4.345, 50.85385]]
            },
            "properties": {
                "name": "Rue d'Ophem - Oppemstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6331.354",
                "time": "1519.525",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.345, 50.85385], [4.345012, 50.85379], [4.345125, 50.85328], [4.345131, 50.85298], [4.345118, 50.85293]]
            },
            "properties": {
                "name": "Rue d'Ophem - Oppemstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6434.254",
                "time": "1544.221",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.345118, 50.85293], [4.345248, 50.85291], [4.345439, 50.85287], [4.345544, 50.85283]]
            },
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6466.654",
                "time": "1551.997",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.345544, 50.85283], [4.345644, 50.85278], [4.345699, 50.85275], [4.345769, 50.8527], [4.345824, 50.85266], [4.345862, 50.85262], [4.345893, 50.85258]]
            },
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6503.654",
                "time": "1560.877",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.345893, 50.85258], [4.345934, 50.85251]]},
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6512.154",
                "time": "1562.917",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.345934, 50.85251], [4.346191, 50.85204]]},
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6566.954",
                "time": "1576.069",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.346191, 50.85204], [4.346327, 50.8518]]},
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6595.254",
                "time": "1582.861",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.346327, 50.8518], [4.346378, 50.85171]]},
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6606.354",
                "time": "1585.525",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.346378, 50.85171], [4.346572, 50.85138]]},
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6645.654",
                "time": "1594.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.346572, 50.85138], [4.346669, 50.85121], [4.346759, 50.85108]]
            },
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6680.854",
                "time": "1603.405",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.346759, 50.85108], [4.346858, 50.85094]]},
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6697.554",
                "time": "1607.413",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.346858, 50.85094], [4.347037, 50.85069], [4.347101, 50.85063]]
            },
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6736.654",
                "time": "1616.797",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.347101, 50.85063], [4.347123, 50.85061], [4.347148, 50.85058]]
            },
            "properties": {
                "name": "Rue de Flandre - Vlaamsesteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6743.054",
                "time": "1618.333",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.347148, 50.85058], [4.347192, 50.85053]]},
            "properties": {
                "name": "Place Sainte-Catherine - Sint-Katelijneplein",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6748.954",
                "time": "1619.749",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.347192, 50.85053], [4.347353, 50.85038]]},
            "properties": {
                "name": "Place Sainte-Catherine - Sint-Katelijneplein",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6769.254",
                "time": "1624.621",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.347353, 50.85038], [4.347415, 50.85032]]},
            "properties": {
                "name": "Place Sainte-Catherine - Sint-Katelijneplein",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6777.254",
                "time": "1626.541",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.347415, 50.85032], [4.347486, 50.85025]]},
            "properties": {
                "name": "Rue Sainte-Catherine - Sint-Katelijnestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6785.954",
                "time": "1628.629",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.347486, 50.85025], [4.34777, 50.85009]]},
            "properties": {
                "name": "Rue Sainte-Catherine - Sint-Katelijnestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6812.954",
                "time": "1635.109",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.34777, 50.85009], [4.348855, 50.84953], [4.348936, 50.84949]]
            },
            "properties": {
                "name": "Rue Sainte-Catherine - Sint-Katelijnestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6918.454",
                "time": "1660.429",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.348936, 50.84949], [4.34901, 50.84955]]},
            "properties": {
                "name": "Rue de la Vierge Noire - Zwarte Lievevrouwstraat",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "tertiary",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6926.954",
                "time": "1662.469",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.34901, 50.84955], [4.349107, 50.84951], [4.349599, 50.84932]]
            },
            "properties": {
                "name": "Rue du Marché aux Poulets - Kiekenmarkt",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "6975.454",
                "time": "1674.109",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.349599, 50.84932], [4.350164, 50.84909]]},
            "properties": {
                "name": "Rue du Marché aux Poulets - Kiekenmarkt",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7022.554",
                "time": "1685.413",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.350164, 50.84909], [4.350349, 50.84902]]},
            "properties": {
                "name": "Rue du Marché aux Poulets - Kiekenmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7037.954",
                "time": "1689.109",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.350349, 50.84902], [4.350477, 50.84893]]},
            "properties": {
                "name": "Rue du Marché aux Poulets - Kiekenmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7050.854",
                "time": "1692.205",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.350477, 50.84893], [4.351125, 50.84857], [4.351653, 50.84834], [4.351758, 50.8483]]
            },
            "properties": {
                "name": "Rue du Marché aux Poulets - Kiekenmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7165.254",
                "time": "1719.661",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.351758, 50.8483], [4.351962, 50.8482]]},
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7183.354",
                "time": "1724.005",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.351962, 50.8482], [4.352087, 50.84814]]},
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7194.154",
                "time": "1726.597",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.352087, 50.84814], [4.352168, 50.84811]]},
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7200.954",
                "time": "1728.229",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.352168, 50.84811], [4.352296, 50.84805]]},
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7212.154",
                "time": "1730.917",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.352296, 50.84805], [4.352445, 50.84781], [4.352502, 50.84772]]
            },
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7250.954",
                "time": "1740.229",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.352502, 50.84772], [4.352646, 50.84758], [4.352921, 50.84741]]
            },
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7297.054",
                "time": "1751.293",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.352921, 50.84741], [4.353395, 50.84721]]},
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7336.754",
                "time": "1760.821",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.353395, 50.84721], [4.353447, 50.8472]]},
            "properties": {
                "name": "Rue du Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7340.654",
                "time": "1761.757",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.353447, 50.8472], [4.353683, 50.84711]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7359.554",
                "time": "1766.293",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.353683, 50.84711], [4.353755, 50.84708], [4.353857, 50.84703]]
            },
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7374.854",
                "time": "1769.965",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.353857, 50.84703], [4.35403, 50.84692]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7392.454",
                "time": "1774.189",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.35403, 50.84692], [4.354083, 50.84687]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7398.654",
                "time": "1775.677",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.354083, 50.84687], [4.35414, 50.84684], [4.35425, 50.84681]]
            },
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "oneway:bicycle": "no",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7412.454",
                "time": "1778.989",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.35425, 50.84681], [4.354294, 50.84679]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7415.954",
                "time": "1779.829",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.354294, 50.84679], [4.354414, 50.84675]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7425.554",
                "time": "1782.133",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.354414, 50.84675], [4.354393, 50.84671]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7429.554",
                "time": "1783.093",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.354393, 50.84671], [4.354374, 50.84668], [4.354368, 50.84666], [4.354379, 50.84664], [4.354556, 50.84645]]
            },
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7462.654",
                "time": "1791.037",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.354556, 50.84645], [4.354687, 50.84631]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7480.454",
                "time": "1795.309",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.354687, 50.84631], [4.354719, 50.84628]]},
            "properties": {
                "name": "Rue Marché aux Herbes - Grasmarkt",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "bicycle": "yes",
                "highway": "pedestrian",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7484.454",
                "time": "1796.269",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.354719, 50.84628], [4.354776, 50.84622], [4.354784, 50.8462], [4.35479, 50.84613]]
            },
            "properties": {
                "name": "Rue de la Madeleine - Magdalenasteenweg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7502.954",
                "time": "1800.709",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.35479, 50.84613], [4.354864, 50.84608], [4.354936, 50.84603], [4.355631, 50.8456], [4.355717, 50.84553]]
            },
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7595.754",
                "time": "1822.981",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.355717, 50.84553], [4.355774, 50.84548], [4.355842, 50.84542]]
            },
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7610.454",
                "time": "1826.509",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.355842, 50.84542], [4.356014, 50.84529], [4.35618, 50.84515]]
            },
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7648.754",
                "time": "1835.701",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.35618, 50.84515], [4.356256, 50.8451]]},
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7656.954",
                "time": "1837.669",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.356256, 50.8451], [4.356351, 50.84502], [4.356453, 50.84495]]
            },
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2,#89C13D",
                "cycleref": "11,1",
                "profile": "bicycle.brussels",
                "distance": "7678.154",
                "time": "1842.757",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.356453, 50.84495], [4.356577, 50.84484]]},
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2,#89C13D",
                "cycleref": "11,1",
                "profile": "bicycle.brussels",
                "distance": "7693.554",
                "time": "1846.453",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.356577, 50.84484], [4.356667, 50.84476]]},
            "properties": {
                "name": "Rue de l'Infante Isabelle - Infante Isabellastraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2,#89C13D",
                "cycleref": "11,1",
                "profile": "bicycle.brussels",
                "distance": "7704.054",
                "time": "1848.973",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.356667, 50.84476], [4.35674, 50.84471]]},
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7711.854",
                "time": "1850.845",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.35674, 50.84471], [4.356757, 50.8447]]},
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7713.554",
                "time": "1851.253",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.356757, 50.8447], [4.356906, 50.84462]]},
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "tunnel": "building_passage",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7727.254",
                "time": "1854.541",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.356906, 50.84462], [4.35708, 50.84451]]},
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7743.954",
                "time": "1858.549",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.35708, 50.84451], [4.358167, 50.84387]]},
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7848.354",
                "time": "1883.605",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.358167, 50.84387], [4.358322, 50.84378]]},
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "tunnel": "yes",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7863.254",
                "time": "1887.181",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.358322, 50.84378], [4.358427, 50.84372], [4.358545, 50.84366]]
            },
            "properties": {
                "name": "Mont des Arts - Kunstberg",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cycleway": "lane",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7883.654",
                "time": "1892.077",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.358545, 50.84366], [4.35845, 50.84364]]},
            "properties": {
                "name": "Coudenberg - Koudenberg",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7890.854",
                "time": "1893.805",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.35845, 50.84364], [4.358375, 50.84362], [4.358301, 50.84354], [4.358268, 50.84348], [4.358239, 50.8434]]
            },
            "properties": {
                "name": "Coudenberg - Koudenberg",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7922.354",
                "time": "1901.365",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.358239, 50.8434], [4.358241, 50.8433], [4.358271, 50.84316], [4.358299, 50.84307], [4.358335, 50.843], [4.358384, 50.84293], [4.35845, 50.84286], [4.358521, 50.84281], [4.35859, 50.84277]]
            },
            "properties": {
                "name": "Coudenberg - Koudenberg",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "7999.754",
                "time": "1919.941",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.35859, 50.84277], [4.358776, 50.84266], [4.358877, 50.84259], [4.358994, 50.8425], [4.359043, 50.84246]]
            },
            "properties": {
                "name": "Coudenberg - Koudenberg",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8045.954",
                "time": "1931.029",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.359043, 50.84246], [4.359058, 50.84246], [4.359088, 50.84243], [4.3591, 50.84237]]
            },
            "properties": {
                "name": "Coudenberg - Koudenberg",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "service",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8058.154",
                "time": "1933.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.3591, 50.84237], [4.358941, 50.84225], [4.358949, 50.84216]]
            },
            "properties": {
                "name": "Place Royale - Koningsplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8084.954",
                "time": "1940.389",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.358949, 50.84216], [4.359097, 50.84208]]},
            "properties": {
                "name": "Place Royale - Koningsplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8098.954",
                "time": "1943.749",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.359097, 50.84208], [4.359197, 50.84202]]},
            "properties": {
                "name": "Place Royale - Koningsplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8108.354",
                "time": "1946.005",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.359197, 50.84202], [4.359283, 50.84197]]},
            "properties": {
                "name": "Place Royale - Koningsplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8116.754",
                "time": "1948.021",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.359283, 50.84197], [4.359351, 50.84178], [4.35937, 50.84175], [4.359391, 50.84174]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8143.254",
                "time": "1954.381",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.359391, 50.84174], [4.359406, 50.84174], [4.35943, 50.84172]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8146.954",
                "time": "1955.269",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.35943, 50.84172], [4.359434, 50.84172], [4.359438, 50.84172]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "tunnel": "building_passage",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8147.754",
                "time": "1955.461",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.359438, 50.84172], [4.359466, 50.8417], [4.359478, 50.84169], [4.359715, 50.84116], [4.359723, 50.84112], [4.359758, 50.84063]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8271.554",
                "time": "1985.173",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.359758, 50.84063], [4.359766, 50.84054], [4.359789, 50.84044]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#932F34,#77AAD2",
                "cycleref": "PP,11",
                "profile": "bicycle.brussels",
                "distance": "8292.854",
                "time": "1990.285",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.359789, 50.84044], [4.359866, 50.84031], [4.360069, 50.84002], [4.360189, 50.83992]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8358.153",
                "time": "2005.957",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.360189, 50.83992], [4.360298, 50.83984], [4.360604, 50.83967]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8398.253",
                "time": "2015.581",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.360604, 50.83967], [4.360634, 50.83965], [4.360791, 50.83955]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8416.853",
                "time": "2020.045",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.360791, 50.83955], [4.361146, 50.83932]]},
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8452.753",
                "time": "2028.661",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.361146, 50.83932], [4.361181, 50.83929], [4.361265, 50.83925]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "oneway:bicycle": "no",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8463.753",
                "time": "2031.301",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.361265, 50.83925], [4.361572, 50.83901], [4.361685, 50.83892]]
            },
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8510.653",
                "time": "2042.557",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.361685, 50.83892], [4.361777, 50.83886]]},
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8519.953",
                "time": "2044.789",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.361777, 50.83886], [4.361895, 50.83877]]},
            "properties": {
                "name": "Rue de Namur - Naamsestraat",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8533.354",
                "time": "2048.005",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.361895, 50.83877], [4.36181, 50.83873], [4.361766, 50.83867]]
            },
            "properties": {
                "name": "Boulevard de Waterloo - Waterloolaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8547.953",
                "time": "2051.509",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.361766, 50.83867], [4.361768, 50.83862], [4.361785, 50.83858], [4.361821, 50.83855]]
            },
            "properties": {
                "name": "Boulevard de Waterloo - Waterloolaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8562.354",
                "time": "2054.965",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.361821, 50.83855], [4.361843, 50.83851], [4.361866, 50.83843]]
            },
            "properties": {
                "name": "Avenue de la Toison d'Or - Gulden-Vlieslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8575.453",
                "time": "2058.109",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.361866, 50.83843], [4.362054, 50.83852]]},
            "properties": {
                "name": "Avenue de la Toison d'Or - Gulden-Vlieslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8591.553",
                "time": "2061.973",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.362054, 50.83852], [4.362083, 50.83853], [4.362136, 50.83856], [4.36217, 50.8386]]
            },
            "properties": {
                "name": "Avenue de la Toison d'Or - Gulden-Vlieslaan",
                "highway": "primary",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8604.053",
                "time": "2064.973",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.36217, 50.8386], [4.362281, 50.83865]]},
            "properties": {
                "name": "Avenue Marnix - Marnixlaan",
                "ref": "R20a",
                "highway": "primary",
                "oneway": "yes",
                "maxspeed": "50",
                "profile": "bicycle.brussels",
                "distance": "8613.853",
                "time": "2067.325",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.362281, 50.83865], [4.362327, 50.83867]]},
            "properties": {
                "name": "Avenue Marnix - Marnixlaan",
                "ref": "R20a",
                "highway": "primary",
                "oneway": "yes",
                "maxspeed": "50",
                "profile": "bicycle.brussels",
                "distance": "8617.652",
                "time": "2068.237",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.362327, 50.83867], [4.362418, 50.83872]]},
            "properties": {
                "name": "Avenue Marnix - Marnixlaan",
                "ref": "R20a",
                "highway": "primary",
                "oneway": "yes",
                "maxspeed": "50",
                "profile": "bicycle.brussels",
                "distance": "8625.752",
                "time": "2070.181",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.362418, 50.83872], [4.362495, 50.83865], [4.362659, 50.83866]]
            },
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "8646.252",
                "time": "2075.101",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.362659, 50.83866], [4.362769, 50.83866]]},
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "profile": "bicycle.brussels",
                "distance": "8653.952",
                "time": "2076.949",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.362769, 50.83866], [4.362961, 50.83867]]},
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8667.353",
                "time": "2080.165",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.362961, 50.83867], [4.363073, 50.83868], [4.36369, 50.83868]]
            },
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8718.652",
                "time": "2092.477",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.36369, 50.83868], [4.364832, 50.8387]]},
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8798.853",
                "time": "2111.725",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.364832, 50.8387], [4.365926, 50.83872], [4.366054, 50.83872]]
            },
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8884.553",
                "time": "2132.293",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.366054, 50.83872], [4.36615, 50.83871], [4.366718, 50.83866]]
            },
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8931.652",
                "time": "2143.597",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.366718, 50.83866], [4.366974, 50.83864]]},
            "properties": {
                "name": "Rue du Champ de Mars - Marsveldstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8949.752",
                "time": "2147.941",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.366974, 50.83864], [4.367208, 50.83876], [4.367254, 50.83878]]
            },
            "properties": {
                "name": "Rue de Paris - Parijsstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "8974.852",
                "time": "2153.965",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.367254, 50.83878], [4.367486, 50.83889], [4.367576, 50.83894]]
            },
            "properties": {
                "name": "Rue de Paris - Parijsstraat",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "cyclecolour": "#77AAD2",
                "cycleref": "11",
                "profile": "bicycle.brussels",
                "distance": "9003.552",
                "time": "2160.853",
                "colour": "#77AAD2"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.367576, 50.83894], [4.367643, 50.83889], [4.368513, 50.8382]]
            },
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9109.151",
                "time": "2186.197",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.368513, 50.8382], [4.368571, 50.83815]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9115.651",
                "time": "2187.757",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.368571, 50.83815], [4.368637, 50.83809]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9123.451",
                "time": "2189.629",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.368637, 50.83809], [4.368719, 50.83802], [4.368791, 50.83796], [4.369059, 50.83774]]
            },
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9172.451",
                "time": "2201.389",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.369059, 50.83774], [4.369103, 50.8377]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9177.651",
                "time": "2202.637",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.369103, 50.8377], [4.369887, 50.83707]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9266.651",
                "time": "2223.997",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.369887, 50.83707], [4.370537, 50.83658]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9337.852",
                "time": "2241.085",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.370537, 50.83658], [4.37063, 50.8365]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9348.852",
                "time": "2243.725",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.37063, 50.8365], [4.370706, 50.83644]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9357.752",
                "time": "2245.861",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.370706, 50.83644], [4.37082, 50.83635], [4.371427, 50.83587]]
            },
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9438.652",
                "time": "2265.277",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.371427, 50.83587], [4.37147, 50.83582]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9445.252",
                "time": "2266.861",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.37147, 50.83582], [4.371522, 50.83576]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9452.552",
                "time": "2268.613",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.371522, 50.83576], [4.371727, 50.83558], [4.372211, 50.83519], [4.372932, 50.83463], [4.372991, 50.83458]]
            },
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9619.651",
                "time": "2308.717",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.372991, 50.83458], [4.373021, 50.83455], [4.373424, 50.83423], [4.373906, 50.83384], [4.374525, 50.83333], [4.374556, 50.8333]]
            },
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "9799.251",
                "time": "2351.821",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.374556, 50.8333], [4.37473, 50.83316], [4.374987, 50.83295]]
            },
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "9848.651",
                "time": "2363.677",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.374987, 50.83295], [4.375103, 50.83285]]},
            "properties": {
                "name": "Rue du Trône - Troonstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "9861.951",
                "time": "2366.869",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.375103, 50.83285], [4.375184, 50.83279]]},
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cycleway": "lane",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "9870.751",
                "time": "2368.981",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.375184, 50.83279], [4.375537, 50.83252]]},
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "9909.751",
                "time": "2378.341",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.375537, 50.83252], [4.375699, 50.83239]]},
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "9928.351",
                "time": "2382.805",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.375699, 50.83239], [4.3758609999999996, 50.83226], [4.376584, 50.83168], [4.376603, 50.83167]]
            },
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "10030.55",
                "time": "2407.333",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.376603, 50.83167], [4.377238, 50.83115]]},
            "properties": {
                "bridge": "yes",
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "10102.75",
                "time": "2424.661",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.377238, 50.83115], [4.377384, 50.83104]]},
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "10119.35",
                "time": "2428.645",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.377384, 50.83104], [4.37741, 50.83101]]},
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "10122.45",
                "time": "2429.389",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.37741, 50.83101], [4.378512, 50.83013]]},
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "10247.25",
                "time": "2459.341",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.378512, 50.83013], [4.378748, 50.82994], [4.378898, 50.82982]]
            },
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5,A",
                "profile": "bicycle.brussels",
                "distance": "10290.95",
                "time": "2469.829",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.378898, 50.82982], [4.379059, 50.8297], [4.37909, 50.82967]]
            },
            "properties": {
                "name": "Avenue de la Couronne - Kroonlaan",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549",
                "cycleref": "5",
                "profile": "bicycle.brussels",
                "distance": "10312.55",
                "time": "2475.013",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.37909, 50.82967], [4.379199, 50.82969], [4.379286, 50.82971]]
            },
            "properties": {
                "name": "Rue du Germoir - Mouterijstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A,#2E3192",
                "cycleref": "5a,A,MM",
                "profile": "bicycle.brussels",
                "distance": "10327.15",
                "time": "2478.517",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.379286, 50.82971], [4.379336, 50.82973], [4.379542, 50.82985]]
            },
            "properties": {
                "name": "Rue du Germoir - Mouterijstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A,#2E3192",
                "cycleref": "5a,A,MM",
                "profile": "bicycle.brussels",
                "distance": "10350.75",
                "time": "2484.181",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.379542, 50.82985], [4.379742, 50.82996], [4.379856, 50.83002]]
            },
            "properties": {
                "bridge": "yes",
                "name": "Rue du Germoir - Mouterijstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5a,A",
                "profile": "bicycle.brussels",
                "distance": "10379.85",
                "time": "2491.165",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.379856, 50.83002], [4.379945, 50.83006]]},
            "properties": {
                "bridge": "yes",
                "name": "Rue du Germoir - Mouterijstraat",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5a,A",
                "profile": "bicycle.brussels",
                "distance": "10387.65",
                "time": "2493.037",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.379945, 50.83006], [4.379988, 50.83007]]},
            "properties": {
                "name": "Rue Philippe Baucq - Philippe Baucqstraat",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5a,A",
                "profile": "bicycle.brussels",
                "distance": "10390.75",
                "time": "2493.781",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.379988, 50.83007], [4.38014, 50.83011], [4.380315, 50.83014], [4.380424, 50.83016]]
            },
            "properties": {
                "name": "Rue Philippe Baucq - Philippe Baucqstraat",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "highway": "secondary",
                "cyclecolour": "#009549,#F6A31A",
                "cycleref": "5a,A",
                "profile": "bicycle.brussels",
                "distance": "10422.85",
                "time": "2501.485",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.380424, 50.83016], [4.380483, 50.83012]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10428.45",
                "time": "2502.829",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.380483, 50.83012], [4.380572, 50.83006]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "oneway": "yes",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10437.65",
                "time": "2505.037",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.380572, 50.83006], [4.38062, 50.83002]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "50",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10443.05",
                "time": "2506.333",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.38062, 50.83002], [4.381711, 50.82919]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10563.45",
                "time": "2535.229",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.381711, 50.82919], [4.382403, 50.82867]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10639.15",
                "time": "2553.397",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.382403, 50.82867], [4.382301, 50.82854], [4.382296, 50.82837], [4.382361, 50.82824], [4.382435, 50.82817]]
            },
            "properties": {
                "name": "Square de Léopoldville - Leopoldstadplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10697.95",
                "time": "2567.509",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.382435, 50.82817], [4.382503, 50.82812]]},
            "properties": {
                "name": "Square de Léopoldville - Leopoldstadplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10705.55",
                "time": "2569.333",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.382503, 50.82812], [4.382593, 50.82806], [4.382797, 50.82797], [4.383074, 50.82792], [4.383249, 50.82795]]
            },
            "properties": {
                "name": "Square de Léopoldville - Leopoldstadplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10765.25",
                "time": "2583.661",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.383249, 50.82795], [4.38337, 50.82796]]},
            "properties": {
                "name": "Square de Léopoldville - Leopoldstadplein",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "tertiary",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10773.95",
                "time": "2585.749",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.38337, 50.82796], [4.384805, 50.8269]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "10929.65",
                "time": "2623.117",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.384805, 50.8269], [4.385417, 50.82645], [4.38616, 50.82585]]
            },
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11079.85",
                "time": "2659.165",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.38616, 50.82585], [4.386793, 50.8254]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11147.05",
                "time": "2675.293",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.386793, 50.8254], [4.387629, 50.82476]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11239.05",
                "time": "2697.373",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.387629, 50.82476], [4.389971, 50.82299]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11495.15",
                "time": "2758.837",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.389971, 50.82299], [4.389982, 50.82299]]},
            "properties": {
                "name": "Avenue Nouvelle - Nieuwelaan",
                "highway": "residential",
                "brussels": "yes",
                "cyclenetwork": "yes",
                "maxspeed": "30",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11496.25",
                "time": "2759.101",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.389982, 50.82299], [4.390179, 50.82296]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11510.25",
                "time": "2762.461",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.390179, 50.82296], [4.390276, 50.82294], [4.390346, 50.82298], [4.390373, 50.82295], [4.390396, 50.82293], [4.390425, 50.82291], [4.390453, 50.82292]]
            },
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11535.95",
                "time": "2768.629",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.390453, 50.82292], [4.390505, 50.82293], [4.390541, 50.8229]]
            },
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11544.35",
                "time": "2770.645",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.390541, 50.8229], [4.39062, 50.82284]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11552.75",
                "time": "2772.661",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.39062, 50.82284], [4.39065, 50.82284], [4.390693, 50.82285], [4.390735, 50.82287]]
            },
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11562.05",
                "time": "2774.893",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.390735, 50.82287], [4.39078, 50.8229]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11566.05",
                "time": "2775.853",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.39078, 50.8229], [4.390804, 50.8229]]},
            "properties": {
                "brussels": "yes",
                "cyclenetwork": "yes",
                "highway": "cycleway",
                "cyclecolour": "#009549",
                "cycleref": "5a",
                "profile": "bicycle.brussels",
                "distance": "11567.85",
                "time": "2776.285",
                "colour": "#009549"
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.390804, 50.8229], [4.391509, 50.82327]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "11631.95",
                "time": "2791.669",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.391509, 50.82327], [4.391562, 50.8233]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "11636.65",
                "time": "2792.797",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.391562, 50.8233], [4.391617, 50.82333]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "11641.75",
                "time": "2794.021",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.391617, 50.82333], [4.392053, 50.82355]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "11681.45",
                "time": "2803.549",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.392053, 50.82355], [4.393537, 50.8243]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "11814.75",
                "time": "2835.541",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.393537, 50.8243], [4.393639, 50.82434]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "11823.25",
                "time": "2837.581",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.393639, 50.82434], [4.394781, 50.82492], [4.395924, 50.82549], [4.395954, 50.82551]]
            },
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "12031.05",
                "time": "2887.453",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.395954, 50.82551], [4.39599, 50.82552]]},
            "properties": {
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "12034.05",
                "time": "2888.173",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {"type": "LineString", "coordinates": [[4.39599, 50.82552], [4.396159, 50.82561]]},
            "properties": {
                "oneway": "yes",
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "12049.35",
                "time": "2891.845",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "ShapeMeta",
            "geometry": {
                "type": "LineString",
                "coordinates": [[4.396159, 50.82561], [4.396328, 50.82567], [4.397011, 50.82604]]
            },
            "properties": {
                "oneway": "yes",
                "highway": "cycleway",
                "profile": "bicycle.brussels",
                "distance": "12126.05",
                "time": "2910.253",
                "colour": ""
            }
        }, {
            "type": "Feature",
            "name": "Stop",
            "Shape": "0",
            "geometry": {"type": "Point", "coordinates": [4.29534, 50.87718]},
            "properties": {"distance": "0", "time": "0"}
        }, {
            "type": "Feature",
            "name": "Stop",
            "Shape": "532",
            "geometry": {"type": "Point", "coordinates": [4.39712, 50.82583]},
            "properties": {"distance": "12126.05", "time": "2910.253"}
        }]
    }, "instructions": null
};