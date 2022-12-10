// C.R.U.D (Create, Read, Update, Delete)
// importing http module
const http = require('http');
// importing courses
const courses = require('./courses');

const dealGetRequests = (req, res) => {
    const path = req.url;
    if(path === '/'){
        res.writeHead(200, {'Content-type':'application/json'});
        res.statusCode = 200;
        return res.end('Welcome to my Node.js server and API!')
    }else if(path === '/api/courses'){
        res.statusCode = 200;
        return res.end(JSON.stringify(courses.infoCourses));
    }else if(path === '/api/courses/programming'){
        res.statusCode = 200;
        return res.end(JSON.stringify(courses.infoCourses.programming));
    }

    res.statusCode = 404;
    res.end('Request content not found!');
};

const dealPostRequests = (req, res) => {
    const path = req.url;
    console.log(path);

    if (path === '/api/courses/programming') {
        res.statusCode = 200;
        return res.end('Server recieved a POST request');
    }
};

/** HTTP Server  **/
const server = http.createServer((request, response)=>{
    const {method} = request;

    switch(method){
        case 'GET':
            return dealGetRequests(request, response);
        case 'POST':
            return dealPostRequests(request, response);
        default:
            res.statusCode = 501;
            res.end(`The used method cannot be dealed by the server: ${method}`);
    }
});

const PORT = 5000;

// server listening
server.listen(PORT, ()=>console.log(`Server listening at port ${PORT}`));