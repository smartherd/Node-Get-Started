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

async function read() {
    const promisedData = await fetchData('https://www.javascript.com/');
    console.log(promisedData.length);
};


console.log('Program Starts');

read();

console.log('Program Ends');

