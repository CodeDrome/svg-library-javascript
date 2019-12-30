window.onload = function()
{
    const w = document.getElementById("svgdiv").offsetWidth;
    const h = document.getElementById("svgdiv").offsetHeight;

    SVGLibrary.fill("svg1", randomColor());

    const functions = [randomRectangle, randomEllipse, randomCircle];

    const shapeCount = randomBetween(128, 256);

    for(let i = 0; i < shapeCount; i++)
    {
        functions[randomBetween(0, 2)](w, h);
    }
}


function randomBetween(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function randomColor()
{
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    return `rgb(${r}, ${g}, ${b})`;
}


function randomRectangle(w, h)
{
    const fillColor = randomColor();
    const strokeColor = randomColor();
    const width = randomBetween(16, 64);
    const height = randomBetween(16, 64);
    const x  = randomBetween(0, w);
    const y  = randomBetween(0, h);

    SVGLibrary.rectangle("svg1", width, height, x, y, fillColor, strokeColor, 1);
}


function randomEllipse(w, h)
{
    const fillColor = randomColor();
    const strokeColor = randomColor();
    const rx = randomBetween(8, 32);
    const ry = randomBetween(8, 32);
    const cx  = randomBetween(0, w);
    const cy  = randomBetween(0, h);

    SVGLibrary.ellipse("svg1", cx, cy, rx, ry, fillColor, strokeColor, 1);
}


function randomCircle(w, h)
{
    const fillColor = randomColor();
    const strokeColor = randomColor();
    const r = randomBetween(8, 32);
    const cx  = randomBetween(0, w);
    const cy  = randomBetween(0, h);

    SVGLibrary.circle("svg1", strokeColor, 1,  fillColor, r, cx, cy);
}
