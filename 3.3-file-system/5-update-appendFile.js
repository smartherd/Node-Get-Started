var fs = require('fs');

fs.appendFile('myNewFile1.txt', ' This is my appended text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// The fs.appendFile() method appends the specified content at the end of the specified file.