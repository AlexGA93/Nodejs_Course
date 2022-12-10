// importing database (for learning)
const { courses } = require('../db/courses');

const getCourses = (request, response) => {
    response.status(200).send(JSON.stringify(courses));
};

module.exports = { getCourses };