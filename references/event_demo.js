const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myObjEmitter = new MyEmitter();

myObjEmitter.on('event', () => console.log('Event fired')); //arrow function listener

myObjEmitter.emit('event');
myObjEmitter.emit('event');
myObjEmitter.emit('event');
myObjEmitter.emit('event');
