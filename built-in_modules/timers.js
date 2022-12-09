// Contains functins that they are executed in a certain period of time


// Execute code in a certain period of milliseconds
// 1 sec = 1000 milliseconds
// setTimeout( function, retard, args )

function printStuff(stuff) {
    console.log(`I'm learning ${stuff}`);
}

// call a function after X milliseconds passing arguments to the function
setTimeout(
    printStuff,
    5000,
    'Node.js'
);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setImmediate()
// Execute asynchronous code in the next iteration
// It will be executed after the async code (when all the synchronous code is done it will execute this event)

function displayMesssage(mssg) {
    console.log(`message showed after sync code: ${mssg}`);
}

console.log('Before setImmediate function code');
setImmediate(displayMesssage, 'Hello');
console.log('After setImmediate function code');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setInterval()
// Execute code an infinite number of times with a specific retard

function addNumbers(a, b) {
    console.log(a+b);
}

console.log('Before setImmediate function code');
setInterval(addNumbers, 1500, 5, 3);
console.log('After setImmediate function code');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


