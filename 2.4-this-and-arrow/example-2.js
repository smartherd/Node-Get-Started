// 'this' here is exports 

this.objectName = 'The Exports Object';
console.log(this);

const testerObj = {

	// Regular Function 
	func1: function() {
		console.log('func1', this);
	},

	// Arrow Function 
	func2: () => {
		console.log('func2', this);
	}
};


testerObj.func1();
testerObj.func2();