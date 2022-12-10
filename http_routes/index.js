/**
 * Using HTTP protocol
 * 
 * HTTP is a protocol for fetching resources such as HTML documents. 
 * It is the foundation of any data exchange on the Web and it is a client-server protocol, 
 * which means requests are initiated by the recipient, usually the Web browser. A complete 
 * document is reconstructed from the different sub-documents fetched, for instance, text, 
 * layout description, images, videos, scripts, and more. 
 * 
 * We can define a couple of elements
 * - HTTP Methods
 * - Path
 * - HTTP Version
 * - Headers
 * - Body
 */

// Node.js server
const http = require('http');

// creating server instance
const server = http.createServer(
    // every time our server recieves a request it will execute this functionallity
    (request, response) => {
        // console.log(request);
        console.log(request.url);
        console.log(request.method);
        console.log(request.headers);

        // console.log(response);
        console.log(response.statusCode);
        // set headers info
        // response.setHeader('content-type', 'application/json');
        // console.log(response.getHeaders());

        // end response sending a response
        response.end('Welcome to my Node.js server');
    }
);

// server listening at a defined port
const PORT = 5000;
server.listen(PORT, ()=>console.log(`Server listening at port ${PORT}`));