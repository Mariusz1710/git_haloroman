const logoes = document.getElementsByClassName("logo");
const boxes = document.getElementsByClassName("box");


for(let i=0;i<logoes.length;i++)
{
	logoes[i].addEventListener("click",function()
	{
		alert(i);					
		
		
	});	
}

