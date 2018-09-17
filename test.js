window.onload = function () {
    document.getElementById("button").onclick = addText;
}

function addText() {
    let span = document.getElementById("output");
    span.innerHTML += " ... goodbye";
}
