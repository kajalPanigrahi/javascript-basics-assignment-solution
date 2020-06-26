function flattenArray(inputArray) {

	let output = inputArray.reduce(
		function(arr, element) {
			return arr.concat(Array.isArray(element) ? flattenArray(element) : element);
		}, []
	);
	return output;
 }
 
 const flatten = (inputArray) => {

	if(!Array.isArray(inputArray)) {
		return null;
	}		

	inputArray = [1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]];
 
	if(Array.isArray(inputArray)) { 
		return flattenArray(inputArray);
	}
 };

module.exports = flatten;
