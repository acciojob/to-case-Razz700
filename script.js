function toCase(text) {
  // write your code here
	if (text=="") {
		text="-";
		return text;
	}
	text=text.toLowerCase();
	text=text+"-"+text.toUpperCase();
	return text;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
