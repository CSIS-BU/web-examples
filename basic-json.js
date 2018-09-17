"use strict";

let objString = '{ "name":"Bob", "age":40, "city":"Peoria"}';
let jsonObj = JSON.parse(objString);

window.onload = function() {
    document.getElementById("demo").innerHTML =
        jsonObj.name + " is " + jsonObj.age + " years old.";
};
