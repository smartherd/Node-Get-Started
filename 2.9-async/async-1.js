const https = require('https');

// Our Long Operation  
function fetchData(url) {
  const promiseToken = new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (rd) => data = data + rd);
      response.on('end', () => resolve(data));
    });
  });
  return promiseToken;
}

console.log('Program Starts');

const promiseToken = fetchData('https://www.javascript.com/');
promiseToken.then((promisedData) => {
	console.log(promisedData.length);
});

console.log('Program Ends'); 

