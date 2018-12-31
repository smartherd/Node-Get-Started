const http = require('http');

const requestListener = (request, response) => {
	
	// console.dir(request, {depth:0});
	console.dir(response, {depth:0});
	
	response.write('Hello from different World\n');
	response.end();
}

const server = http.createServer(requestListener);

const confirmationCallback = () => {
	console.log('Server is running...');
}

server.listen(9000, confirmationCallback);
