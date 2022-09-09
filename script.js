const cars = new Array("img/mercedes.jpeg","img/redbull.jpeg","img/ferrari.jpeg","img/alpine.jpeg");
const logoes = document.getElementsByClassName("logo");
const boxes = document.getElementsByClassName("box");
let inserted = new Array(false,false,false,false);

for(let i=0;i<logoes.length;i++)
{
	logoes[i].addEventListener("click",function()
	{
		if(!inserted[i])
		{
		let image = document.createElement("img");					
		boxes[i].appendChild(image);
		image.src = cars[i];
		inserted[i] = true;
		}
		else
		{
			boxes[i].removeChild(boxes[i].firstChild);
			inserted[i] = false;
		}
	});	
}

