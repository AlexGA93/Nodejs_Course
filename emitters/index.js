// every emitter is an extension of 'EventEmitter'
const EventEmitter = require('events');// vents returns a class named 'EventEmitter'
// console.log(EventEmitter);

// event emitter
const productEmitter = new EventEmitter();

// Returns a reference to the EventEmitter, so that calls can be chained.
const dealWithEvent = (amount, numProducts) => {
    console.log(`Total amount: $${amount} for ${numProducts} products`);
};

let eventName = 'shopping';
////////////////////////////////////////////////////////////////////////
productEmitter.on(
    eventName,
    dealWithEvent
);
////////////////////////////////////////////////////////////////////////
// In a specific moment we want to emit the event
productEmitter.emit(eventName, 44.99, 3); // when code executes this emission it will associate to the 'on' method
////////////////////////////////////////////////////////////////////////
