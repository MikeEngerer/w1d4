var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, func) {
	var newArr = [];
	arr.forEach(function(element) {
		newArr.push(func(element))
	});
	return newArr;
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));
console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));