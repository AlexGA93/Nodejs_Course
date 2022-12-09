# Course Node.js 
## Index
- [Creating and Importing Javascript Modules](#creating-and-importing-javascript-modules)
- [Built-in Modules](#built-in-modules)
    - [Console](#console)
    - [Timers](#timers)
    - [Proccess](#proccess)
    - [O.S](#operate-system-os)
    - [File System](#file-system-fs)
- [Emitters](#emitters)
- [Promises](#promises)
    - [Synchronous Promises](#synchronous-promises)
    - [Async/Await Promises](#async--await-promises)

## Creating and Importing Javascript Modules
We can create  custom modules with some functionallities that can be exported and imported in any other javascript module.

In the first place We are going to define a module's content that It will be exported to another module:
```
function salute(name) {
  return `Hello ${name}`;
}

function HelloWorld(){
  return 'Hello World!';
}

// export multiple funcions
module.exports = {
  salute_fucntion: salute,
  hello_world_function: HelloWorld
};
```

In second place, We are going to import our module's methods to use them to another purpose:
```
const { salute_fucntion, hello_world_function } = require('./modules');

console.log(`${salute_fucntion('John')}\n${hello_world_function()}`);
```

## Built-in Modules
In this section We're going to test most of the Node built-in modules:

- ### Console
```
 console.log(`Hello World \n${2+5}`);
 console.warn('Ths is a warning');
 console.assert('This is an assert');
 console.error(new Error('This is an error'));
 
 const people = [
     ["Tyrone", "Jones"],
     ["Janet", "Smith"],
     ["Maria", "Cruz"],
 ];
 console.table(people);
```
- ### Timers
Contains functins that they are executed in a certain period of time
```
function addNumbers(a, b) {
    console.log(a+b);
}

console.log('Before setImmediate function code');
setInterval(addNumbers, 1500, 5, 3);
console.log('After setImmediate function code');
```
- ### Proccess
Provides information about the Node.js process that is running.
```
// If We use arguments i nthe terminal order
console.log(process.argv);
// example:         node ./app.js 6 7
// transformed to:  [node, ./app.js,  6,  7] with indexes {0, 1, 2, 3}

// terminal order: node ./app.js 6 hello
console.log(process.argv[2]);

// how much memory is being used
console.log(process.memoryUsage());
```
- ### Operate System (os)
Provides Operate system information:
```
const os = require('os');

console.log(os.type()); // Windows_NT

// Returns the string path of the current user's home directory.
console.log(os.homedir());

// Returns the system uptime in number of seconds.
console.log(os.uptime());

// Returns information about the currently effective user
console.log(os.userInfo());
```
- ### File System (fs)
Module that contains useful file system's functionallity. All the methods are asynchronous by default BUT We can choose sync versions adding 'Sync' in the funcion name.
- #### Read
    ```
    fs.readdir( directory, (err, files)=>{
        if(err) throw err;
        console.log(files);
    });

    fs.readFile(
        pathName,
        'utf-8',
        (err, content) => {
            if(err) throw err;
            console.log(content);
        }
    );
    ```
- #### Modify
    ```
    fs.appendFile(
        pathFile,
        content,
        (err) => {
            if(err) throw err;
            console.log('File updated successfully!');
        }
    );

    // Replace all the file's content
    fs.writeFile(
        pathFile,
        'new content',
        (err) => {
            if(err) throw err;
            console.log('File updated successfully!!');
        }
    );
    ```
- #### Delete
    ```
    // Delete files
    fs.unlink(
        __dirname+'\\index.html',
        (err) => {
            if(err) throw err;
            console.log('file deleted');
        }
    );
    ```
- #### Change Name
    ```
    fs.rename(
        pathName,
        newPathName,
        (err) => {
            if(err) throw err;
            console.log('File name changed successfully');
        }
    )
    ```

## Emitters
All EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener' when existing listeners are removed.

```
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
```

## Promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Synchronous Promises
```
const isResolved = false;

// first promise
const firstPromise = new Promise((resolve, reject)=>{
    // we're going to apply a timeout of 3 seconds to check how async code works
    setTimeout(()=>{
        if (isResolved){
            resolve('Resolved!');// resolve statement sends an argument when promise is resolved
        }else{
            reject('Something went wrong!');
        }
    },3000);
});

firstPromise
.then((resolveValue)=>console.log(resolveValue)) // when promiseis resolved we can access to the 'resolve' statement's argument
.catch((rejectValue)=>console.log(rejectValue));







////////////////////////////////////////////////////////////////////////////////

// another example
const randomNumber = () => Math.random() < 0.5;

const orderedProduct = new Promise((resolve, reject) => setTimeout(() => randomNumber() ? resolve('Pizza on the way!') : reject('Not Pizza tonight :('), 5000));

// What will happen when the promise is rejected or resolved?
orderedProduct
.then((value) => console.log(value))
.catch((value) => console.log(value))
```
### Async / Await Promises
The async function declaration declares an async function where the await 
keyword is permitted within the function body. The async and await keywords 
enable asynchronous, promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.
```
// First proccess: Ordering product
const orderProduct = (product) => {
    return new Promise((resolve, reject)=>{
        console.log(`Ordering: ${product} of Ecommerce App`);
        // time out
        setTimeout(()=>{
            if(product === 'cup'){
                resolve('Ordering a Ecommerce cup');
            }else{
                reject('Something went wrong with the order!');
            }   
        }, 2000);
    });
};


// Second proccess: Processing order
function processingOrder(response){
    return new Promise((resolve)=>{
        console.log('Proccessing order ...');
        console.log(`Response was: "${response}"`);

        setTimeout(()=>{
            resolve('Thanks for your order. Enjoy it!')
        }, 4000);
    });
};


///////////////////////////////// USING ASYNC/AWAIT /////////////////////////////////
const orderingProduct = async (product) => {
    try {
        // 'wait' to the called method when it's completed
        const response = await orderProduct(product);
        console.log('Recieved response!');

        // 'wait' to the called method when it's completed
        const proccessedResponse = await processingOrder(response);
        console.log(proccessedResponse);

    } catch (error) {
        console.log(error);
    }

};

orderingProduct('cup');
```