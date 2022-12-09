/**
 * The async function declaration declares an async function where the await 
 * keyword is permitted within the function body. The async and await keywords 
 * enable asynchronous, promise-based behavior to be written in a cleaner style, 
 * avoiding the need to explicitly configure promise chains.
 */
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


// We need to execute this methods ina proper order
// orderProduct('cup')
// .then( response => {
//     console.log(`Response: ${response}`);
//     return processingOrder(response); // Only this method will be called if the first promise is resolved
// } );

// orderProduct('cup')
// .then( response => {
//     console.log(`Response: ${response}`);
//     return processingOrder(response); // Only this method will be called if the first promise is resolved
// })
// .then(proccessedResponse => {
//     console.log(proccessedResponse);
// })
// .catch(error => console.log(error))


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