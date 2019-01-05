var fs = require('fs');

fs.writeFile('myNewFile3.txt', 'This is my brand new world', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

// The fs.writeFile() method replaces the specified file and content. 