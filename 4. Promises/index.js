// asynchronous code
/**
 * Asynchronous programming is a technique that enables your program to start a potentially 
 * long-running task and still be able to be responsive to other events while that task runs, 
 * rather than having to wait until that task has finished. Once that task has finished, 
 * your program is presented with the result
 */

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