const url = require('url');

const reqUrl = 'http://localhost:9000/user?country=India&city=Delhi';

const urlObject = url.parse(reqUrl, true);

console.log(urlObject.host);			// localhost:9000 
console.log(urlObject.pathname);		//    /user 
console.log(urlObject.search);		// 	?country=India&city=Delhi 	

const queryData = urlObject.query			// { country: 'India', city: 'Delhi' } 
console.log(queryData.country);			// 'India'
console.log(queryData.city);			// 'Delhi'