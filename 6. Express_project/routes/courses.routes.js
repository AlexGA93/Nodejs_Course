const express = require('express');
const dbRouter = express.Router();

// importing controlelrs
const { getCourses } = require('../controllers/courses.controllers');

// Routing
dbRouter.get('/', getCourses);

// exporting
module.exports = dbRouter;