const modify = document.getElementById("modify");
const background = document.getElementById("background");
const width = document.getElementById("width");
const height = document.getElementById("height");

background.onchange = function (event) {
    modify.style.background = event.srcElement.value;
}
width.onchange = function (event) {
    modify.style.width = event.srcElement.value;
}
height.onchange = function (event) {
    modify.style.height = event.srcElement.value;
}