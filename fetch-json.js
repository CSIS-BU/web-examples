`use strict`;
var jsonObj;

// Ref: Fetch API
// 	https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function getJSON() {
	fetch('https://playground.bradley.edu/~djlin/web-examples/bu-courses.json')
	.then(function(response) {
		if(response.ok) {
			response.json().then(function(json) {
				jsonObj = json;
				updateHTML(jsonObj);
				console.log(jsonObj);
			});
		}
		else {
			console.log("Network response failed: " + response.status + " : " +
				response.statusText);
		}
	});

	// Ref: arrow functions
	// 	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	//.then(data => jsonObj = data)
	//.then(() => console.log(jsonObj));
}

function updateHTML(jsonObj) {
	document.getElementById("demo").innerHTML = "<h2>" + jsonObj.university + "</h2>"
		+ "<h3>" + jsonObj['course-semester'][2].semester + ", " + 
			jsonObj['course-semester'][2].year +  "</h3>"
		+ "<p>" + jsonObj['course-semester'][2]['courses'][0].name + "</p>"
		+ "<p>" + JSON.stringify(jsonObj['course-semester'][2]['courses'][0]) + "</p>";
}

window.onload = function() {
	getJSON();
};
