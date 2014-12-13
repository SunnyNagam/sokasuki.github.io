function choice() {

	x = document.getElementById("input");
	if (x > 3) {
		document.getElementById("input").innerHTML = "Not a valid choice!";
	} else {
		document.getElementById("input").innerHTML = "Good choice!"
	}



}