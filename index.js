function choice() {

	var x = document.getElementById("input").value;
	if (x > 3) {
		document.getElementById("response").innerHTML = "Not a valid choice!";
	} else {
		document.getElementById("response").innerHTML = "Good choice!"
	}



}