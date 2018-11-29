var countdownGenerator = function (x) {
	var temp = x;
	var triggerElse = false
	return function() {
		if (temp > 0) {
			console.log("T-minus " + temp + "...");
			temp -= 1;
		} else if (temp === 0 && triggerElse === false) {
			console.log("Blast Off!");
			triggerElse = true;
		} else {
			console.log("Rockets already gone, bub!");
		}
	}
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!