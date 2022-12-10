const express = require('express');
const dbRouter = express.Router();

// importing controlelrs
const { getMathsCourses } = require('../controllers/maths.controllers');

// Routing
dbRouter.get('/', getMathsCourses);

// exporting
module.exports = dbRouter;