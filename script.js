//your JS code here. If required.

function incrementValue() {
	let currentValue = document.createElementById("counter").innerText;
	let newValue = parseInt(currentValue) + 1;

	document.getElementById("counter").innerText = newValue;
	alert(currentValue);
}