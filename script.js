
var body = document.querySelector("body");
var title = document.querySelector("h2");
var color = document.querySelector(".color");

var bodyColor;
var TitleColor;

function changeBackgrndColor()
{
    bodyColor = color.value;
}

function changeTitleColor()
{
    TitleColor = color.value;
}

function adjustColors()
{
    body.style.backgroundColor = bodyColor;
    title.style.color = TitleColor;
}