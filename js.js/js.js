function toCelsius (f) {
	//Deduct 32, then multiply by 5, then divide by 9
	var c = ((f - 32) * 5) / 9;
	console.log(c);
		if (c > 32){
		document.getElementById("answer").innerHTML = "<h1 style=color:red>" + f + " degrees Fahr is " + c + " degrees Cels</h1>";
	} else if (c < 0){
		document.getElementById("answer").innerHTML = "<h1 style=color:blue>" + f + " degrees Fahr is " + c + " degrees Cels</h1>";
	} else {
		document.getElementById("answer").innerHTML = "<h1 style=color:green>" + f + " degrees Fahr is " + c + " degrees Cels</h1>";
	}
}
function toFahrenheit (c) {
	//Multiply by 9, then divide by 5, then add 32
	var f = ((c * 9) / 5) + 32;
	console.log(f);
	if (f > 90){
		document.getElementById("answer").innerHTML = "<h1 style=color:red>" + c + " degrees Cels is " + f + " degrees Fahr</h1>";
	} else if (f < 32){
		document.getElementById("answer").innerHTML = "<h1 style=color:blue>" + c + " degrees Cels is " + f + " degrees Fahr</h1>";
	} else {
		document.getElementById("answer").innerHTML = "<h1 style=color:green>" + c + " degrees Cels is " + f + " degrees Fahr</h1>";
	}
}
var F = document.getElementById("F");
var C = document.getElementById("C");
var button = document.getElementById("converter");
button.addEventListener("click", function(){
    var temp = document.getElementById("tobeconverted").value;
    if (F.checked){
    	console.log("F to C");
    	toCelsius(temp);
    } else if (C.checked){
    	console.log("C to F");
    	toFahrenheit(temp);
    } else {
    	console.log("nothing");
    }
});
document.addEventListener("keyup", function(event) {
	if (event.which === 13){
		var temp = document.getElementById("tobeconverted").value;
		if (F.checked){
    	console.log("F to C");
    	toCelsius(temp);
    	} else if (C.checked){
    	console.log("C to F");
    	toFahrenheit(temp);
   	 	} else {
    	console.log("nothing");
    }

	}
});