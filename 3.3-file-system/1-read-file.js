const http = require('http'); 
const fs = require('fs');

const server = http.createServer((request, response) => {
	
	fs.readFile('demo-1.html', function(err, data) {

		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);	
		response.end();	
	});
	
});

server.listen(9000, () => { 
	console.log('Server is running...'); 
}); 

