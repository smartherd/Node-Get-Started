// ES5 
var normalFunction = function(x, y) {
   return x + y;
}

// ES6: Arrow Function 
const arrowFunction = (x, y) => {
	// line 1 
	// line 2
	return x + y;
}

const arrowExampleTwo = (x, y) => x + y;

const arrowExampleThree = message => message;


// Invoking Functions 
console.log(normalFunction(2, 3));

console.log(arrowFunction(2, 3));

console.log(arrowExampleTwo(2, 3));

console.log(arrowExampleThree('Hello Mr. Arrow'));