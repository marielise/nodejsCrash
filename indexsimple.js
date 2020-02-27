const person = require('./person');
const Vehicule = require('./car');
const Logger = require('./Logger');

console.log(`The person ${person.name} is ${person.age}`);

const car = new Vehicule('Totota', 25000);

car.info();

const myLogger = new Logger();

myLogger.on('log', data => {
  //the callback on emit, send the structure {id:, msg}
  console.log('My call listener', data);
});

myLogger.log('hello');
myLogger.log('hello plus');
myLogger.log('hello bye');
