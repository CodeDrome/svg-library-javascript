class SVGLibrary
{
	static clear(id)
	{
		document.getElementById(id).innerHTML = "";
	}


	static circle(id, strokeColor, strokeWidth, fillColor, r, cx, cy)
	{
    	const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    	circle.setAttributeNS(null, "cx", cx);
    	circle.setAttributeNS(null, "cy", cy);
    	circle.setAttributeNS(null, "r", r);
    	circle.setAttributeNS(null, "stroke", strokeColor);
    	circle.setAttributeNS(null, "fill", fillColor);
    	circle.setAttributeNS(null, "stroke-width", strokeWidth);

    	document.getElementById(id).appendChild(circle);
  	}


	static fill(id, color)
	{
    	document.getElementById(id).style.backgroundColor = color;
	}


	static line(id, strokeColor, strokeWidth, x1, y1, x2, y2)
	{
    	const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    	line.setAttributeNS(null, "x1", x1);
    	line.setAttributeNS(null, "y1", y1);
    	line.setAttributeNS(null, "x2", x2);
    	line.setAttributeNS(null, "y2", y2);
    	line.setAttributeNS(null, "stroke", strokeColor);
    	line.setAttributeNS(null, "stroke-width", strokeWidth);

    	document.getElementById(id).appendChild(line);
	}


	static ellipse(id, cx, cy, rx, ry, fillColor, strokeColor, strokeWidth)
	{
    	const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

    	ellipse.setAttributeNS(null, "cx", cx);
    	ellipse.setAttributeNS(null, "cy", cy);
    	ellipse.setAttributeNS(null, "rx", rx);
    	ellipse.setAttributeNS(null, "ry", ry);
    	ellipse.setAttributeNS(null, "stroke", strokeColor);
    	ellipse.setAttributeNS(null, "fill", fillColor);
    	ellipse.setAttributeNS(null, "stroke-width", strokeWidth);

    	document.getElementById(id).appendChild(ellipse);
	}


	static rectangle(id, w, h, x, y, fillColor, strokeColor, strokeWidth)
	{
    	const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

    	rect.setAttributeNS(null, 'x', x);
    	rect.setAttributeNS(null, 'y', y);
    	rect.setAttributeNS(null, 'height', h);
    	rect.setAttributeNS(null, 'width', w);
    	rect.setAttributeNS(null, 'fill', fillColor);
    	rect.setAttributeNS(null, 'stroke', strokeColor);
    	rect.setAttributeNS(null, 'stroke-width', strokeWidth);

    	document.getElementById(id).appendChild(rect);
	}


	static text(id, x, y, fontFamily, fontSize, fillColor, strokeColor, text)
	{
    	const XLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");

    	XLabel.setAttributeNS(null, "x", x);
    	XLabel.setAttributeNS(null, "y", y);
    	XLabel.setAttributeNS(null, "fill", fillColor);
    	XLabel.setAttributeNS(null, "font-family", fontFamily);
    	XLabel.setAttributeNS(null, "font-size", fontSize);

    	const textNode = document.createTextNode(text);
    	XLabel.appendChild(textNode);
    	document.getElementById(id).appendChild(XLabel);
	}
}
