// importing database (for learning)
const { courses } = require('../db/courses');

const getMathsCourses = (request, response) => {
    response.status(200).send(JSON.stringify(courses.maths));
};

module.exports = { getMathsCourses };