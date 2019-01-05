const http = require('http'); 
const url = require('url');

const server = http.createServer((request, response) => {
	
	response.setHeader('Location', 'www.map.smartherd.com/index');
	response.setHeader('X-Foo', 'bar');
	response.writeHead(200, {'Content-Type':'text/html', 'X':'y'});

	const queryData = url.parse(request.url, true).query;
	const msg = queryData.name + " is " + queryData.age + " years old";

	response.write(msg);
	response.end(); 
}); 

server.listen(9000, () => { 
	console.log('Server is running...'); 
}); 
