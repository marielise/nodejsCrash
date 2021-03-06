const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    this.emit('log', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
