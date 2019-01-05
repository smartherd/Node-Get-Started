
// function (exports, require, module, __filename, __dirname) {

exports.a = 21; 	// module.exports 

exports.display = () => {
	console.log('I am from wrapper.js module');
}

let score = 10; 

// console.log(exports);
// console.log(module.exports);

// returns module.exports; // OR return exports;
// } 
