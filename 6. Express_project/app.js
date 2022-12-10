// import express
const express = require('express');

// define an express application
const app = express();

// import routes
const coursesRoutes = require('./routes/courses.routes');
const programmingRoutes = require('./routes/programming.routes');
const mathsRoutes = require('./routes/maths.routes');

// routing
app.get('/', (request, response) => {
    response.send('My first Http server built with Node.js + Express.js');
});
// routing using controllers
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/courses', coursesRoutes);
app.use('/api/programming',programmingRoutes);
app.use('/api/maths', mathsRoutes);

// server listening
const PORT = process.env.PORT || 3000;
app.listen( PORT, ()=>console.log(`Server listening at port ${PORT}`));