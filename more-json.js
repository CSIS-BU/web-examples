"use strict";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
var objString = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
    ]
}`;

var jsonObj = JSON.parse(objString);

window.onload = function() {
    document.getElementById("demo").innerHTML =
        jsonObj.squadName+ "'s hometown is " + jsonObj.homeTown + ", has power "
        + jsonObj['members'][1]['powers'][0];
};
