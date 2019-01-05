var fs = require('fs');

fs.appendFile('myNewFile1.txt', 'Hello NEW World!', function(err) {
	if (err) throw err;
	console.log('File Created and Saved!');
})

// The fs.appendFile() method appends specified content to a file. 
// If the file does not exist, the file will be created. 