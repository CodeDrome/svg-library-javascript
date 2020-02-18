class SVGLibrary
{
	static fill(id, color)
	{
    	document.getElementById(id).style.backgroundColor = color;
	}

	static clear(id)
	{
		document.getElementById(id).innerHTML = "";
	}

	static line(id, x1, y1, x2, y2, classname, strokeColor, strokeWidth)
	{
    	const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    	line.setAttributeNS(null, "x1", x1);
    	line.setAttributeNS(null, "y1", y1);
    	line.setAttributeNS(null, "x2", x2);
    	line.setAttributeNS(null, "y2", y2);

		if(classname !== null)
		{
    		line.setAttributeNS(null, "class", classname);
		}
		else
		{
    		line.setAttributeNS(null, "stroke", strokeColor);
    		line.setAttributeNS(null, "stroke-width", strokeWidth);
		}

    	document.getElementById(id).appendChild(line);
	}

	static circle(id, cx, cy, r, classname, fillColor, strokeColor, strokeWidth)
	{
    	const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    	circle.setAttributeNS(null, "cx", cx);
    	circle.setAttributeNS(null, "cy", cy);
    	circle.setAttributeNS(null, "r", r);

		if(classname !== null)
		{
    		circle.setAttributeNS(null, "class", classname);
		}
		else
		{
    		circle.setAttributeNS(null, "stroke", strokeColor);
    		circle.setAttributeNS(null, "fill", fillColor);
    		circle.setAttributeNS(null, "stroke-width", strokeWidth);
		}

    	document.getElementById(id).appendChild(circle);
  	}

	static ellipse(id, cx, cy, rx, ry, classname, fillColor, strokeColor, strokeWidth)
	{
    	const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

    	ellipse.setAttributeNS(null, "cx", cx);
    	ellipse.setAttributeNS(null, "cy", cy);
    	ellipse.setAttributeNS(null, "rx", rx);
    	ellipse.setAttributeNS(null, "ry", ry);

		if(classname !== null)
		{
			ellipse.setAttributeNS(null, "class", classname);
		}
		else
		{
    		ellipse.setAttributeNS(null, "stroke", strokeColor);
    		ellipse.setAttributeNS(null, "fill", fillColor);
    		ellipse.setAttributeNS(null, "stroke-width", strokeWidth);
		}

    	document.getElementById(id).appendChild(ellipse);
	}

	static rectangle(id, w, h, x, y, classname, fillColor, strokeColor, strokeWidth)
	{
    	const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

    	rect.setAttributeNS(null, 'x', x);
    	rect.setAttributeNS(null, 'y', y);
    	rect.setAttributeNS(null, 'height', h);
    	rect.setAttributeNS(null, 'width', w);

		if(classname !== null)
		{
			rect.setAttributeNS(null, "class", classname);
		}
		else
		{
    		rect.setAttributeNS(null, 'fill', fillColor);
    		rect.setAttributeNS(null, 'stroke', strokeColor);
    		rect.setAttributeNS(null, 'stroke-width', strokeWidth);
		}

    	document.getElementById(id).appendChild(rect);
	}

	static text(id, x, y, text, classname, fontFamily, fontSize, fontStyle, fontWeight, fillColor, strokeColor, strokeWidth)
	{
    	const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");

    	txt.setAttributeNS(null, "x", x);
    	txt.setAttributeNS(null, "y", y);

		if(classname !== null)
		{
			txt.setAttributeNS(null, "class", classname);
		}
		else
		{
    		txt.setAttributeNS(null, 'stroke', strokeColor);
    		txt.setAttributeNS(null, "fill", fillColor);
    		txt.setAttributeNS(null, "font-family", fontFamily);
    		txt.setAttributeNS(null, "font-size", fontSize);
    		txt.setAttributeNS(null, "font-style", fontStyle);
    		txt.setAttributeNS(null, "font-weight", fontWeight);
    		txt.setAttributeNS(null, 'stroke-width', strokeWidth);
		}

    	const textNode = document.createTextNode(text);
    	txt.appendChild(textNode);
    	document.getElementById(id).appendChild(txt);
	}

	static getStyleElement(id)
	{
		const svgelement = document.getElementById(id);
		let styleelement = svgelement.getElementsByTagName("style").item(0);

		if(styleelement === null)
		{
			svgelement.appendChild(document.createElement('style'));
			styleelement = svgelement.getElementsByTagName("style").item(0);
		}

		return styleelement;
	}

	static addLineClass(id, name, strokeColor, strokeWidth)
	{
		let classstring = `line.${name}{stroke: ${strokeColor}; stroke-width: ${strokeWidth}px;}`;

		const styleelement = this.getStyleElement(id);

    	styleelement.appendChild(document.createTextNode(classstring));
	}

	static addCircleClass(id, name, strokeColor, strokeWidth, fillColor)
	{
		let classstring = `circle.${name}{stroke: ${strokeColor}; stroke-width: ${strokeWidth}px; fill: ${fillColor};}`;

		const styleelement = this.getStyleElement(id);

    	styleelement.appendChild(document.createTextNode(classstring));
	}

	static addEllipseClass(id, name, strokeColor, strokeWidth, fillColor)
	{
		let classstring = `ellipse.${name}{stroke: ${strokeColor}; stroke-width: ${strokeWidth}px; fill: ${fillColor};}`;

		const styleelement = this.getStyleElement(id);

    	styleelement.appendChild(document.createTextNode(classstring));
	}

	static addRectangleClass(id, name, strokeColor, strokeWidth, fillColor)
	{
		let classstring = `rect.${name}{stroke: ${strokeColor}; stroke-width: ${strokeWidth}px; fill: ${fillColor};}`;

		const styleelement = this.getStyleElement(id);

    	styleelement.appendChild(document.createTextNode(classstring));
	}

	static addTextClass(id, name, strokeColor, strokeWidth, fillColor, fontFamily, fontSize, fontStyle, fontWeight)
	{
		let classstring = `text.${name}
						   {stroke: ${strokeColor}; stroke-width: ${strokeWidth}px; fill: ${fillColor};
					   		font-family: ${fontFamily}; font-size: ${fontSize}px;
							font-style: ${fontStyle}; font-weight: ${fontWeight}}`;

		const styleelement = this.getStyleElement(id);

    	styleelement.appendChild(document.createTextNode(classstring));
	}
}
