var fs = require('fs');

fs.rename('myNewFile1.txt', 'myFile1-GotRenamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

// The fs.rename() method renames the specified file.