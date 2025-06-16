const eventEmitter = require('events');

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn of the motor!');
  setTimeout(() => {
    console.log('Please turn of the motor! Its a gentle remainder');
  }, 3000);
});

console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");