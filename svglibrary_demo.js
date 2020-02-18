window.onload = function()
{
    classes();

    // randomPattern();
}


function classes()
{
    const w = document.getElementById("svgdiv").offsetWidth;
    const h = document.getElementById("svgdiv").offsetHeight;

    SVGLibrary.fill("svg1", "#8080FF");

    SVGLibrary.addLineClass("svg1", "redline", "#FF0000", 8);
    SVGLibrary.line("svg1", 16, h - 16, w - 16, 16, "redline");

    SVGLibrary.addEllipseClass("svg1", "blueellipse", "#0000A0", 6, "#0000FF");
    SVGLibrary.ellipse("svg1", w / 2, h / 2, (w / 3), h / 3, "blueellipse");

    SVGLibrary.addCircleClass("svg1", "greencircle", "#008000", 4, "#00FF00");
    SVGLibrary.circle("svg1", w / 2, h / 2, Math.min(w, h)  / 4, "greencircle");

    SVGLibrary.addRectangleClass("svg1", "orangerect", "#FF8000", 2, "#FFC000");
    SVGLibrary.rectangle("svg1", w / 8, h / 8, (w / 2) - ((w / 8) / 2), (h / 2) - ((h / 8) / 2), "orangerect");

    SVGLibrary.addTextClass("svg1", "purpletext", "#800080", 2, "#C000C0", "serif", 64, "italic", "normal");
	SVGLibrary.text("svg1", 16, 72, "SVG", "purpletext");
}


function randomPattern()
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

    SVGLibrary.rectangle("svg1", width, height, x, y, null, fillColor, strokeColor, 1);
}


function randomEllipse(w, h)
{
    const fillColor = randomColor();
    const strokeColor = randomColor();
    const rx = randomBetween(8, 32);
    const ry = randomBetween(8, 32);
    const cx  = randomBetween(0, w);
    const cy  = randomBetween(0, h);

    SVGLibrary.ellipse("svg1", cx, cy, rx, ry, null, fillColor, strokeColor, 1);
}


function randomCircle(w, h)
{
    const fillColor = randomColor();
    const strokeColor = randomColor();
    const r = randomBetween(8, 32);
    const cx  = randomBetween(0, w);
    const cy  = randomBetween(0, h);

    SVGLibrary.circle("svg1", cx, cy, r, null, fillColor, strokeColor, 1);
}
