const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(() => {
	myEmitter.emit('TEST-EVENT');
});

myEmitter.on('TEST-EVENT', ()=> {
	console.log('The test event was fired');
});

myEmitter.on('TEST-EVENT', ()=> {
	console.log('The test event was fired');
});

myEmitter.on('TEST-EVENT', ()=> {
	console.log('The test event was fired');
});

