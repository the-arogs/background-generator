var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}





setGradient()
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function changeInputColor() {
	color1.value=generateRandomColor();
	color2.value=generateRandomColor();
	setGradient();
}


var button = document.getElementById("random")
button.addEventListener("click", changeInputColor)