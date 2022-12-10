// importing database (for learning)
const { courses } = require('../db/courses');

// GET Requests
const getProgrammingCourses = (request, response) => {
    response.status(200).send(JSON.stringify(courses.programming));
};

const getProgrammingCoursesByLanguage = (request, response) => {
    // extract language
    const language = request.params.language;
    // extract courses by language
    const result = courses.programming.filter(course => course.language === language);
    
    if(result.length === 0){
        return response.status(404).send(`No ${language} courses found`);
    }

    if(request.query['sort'] === 'views'){
        return response.status(200).send(JSON.stringify(result.sort((a,b)=> b.views - a.views )));
    }
    
    response.status(200).send(JSON.stringify(result));
    

    
};

// POST Requests
const insertNewProgrammingCourse = (request, response) => {
    // extract body 
    const payload = request.body;

    courses.programming.push(payload);
    response.send(courses.programming);
};

// PUT Requests
const updateProgrammingCourse = (request, response) => {
    // extract id 
    const id = request.params.id;
    console.log(id);
    // extract body
    const payload = request.body;
    console.log(payload);

    const index = courses.programming.findIndex(element => element.id == id);
    console.log(courses.programming[index]);

    if(index >= 0){
        courses.programming[index] = payload
    }

    response.send(courses.programming);

};
const updateProgrammingCourse2 = (request, response) => {
    // extract id 
    const id = request.params.id;
    // extract body
    const payload = request.body;

    const index = courses.programming.findIndex(element => element.id == id);

    if(index >= 0){
        Object.assign(courses.programming[index], payload);
    }

    response.send(JSON.stringify(courses.programming));

};

// DELETE Request
const deleteProgrammingCourse = (request, response) => {
    // extract id 
    const id = request.params.id;

    const index = courses.programming.findIndex(element => element.id == id);

    if(index >= 0){
        courses.programming.splice( index, 1 );
    }

    response.send(courses.programming);
};

module.exports = { getProgrammingCourses, getProgrammingCoursesByLanguage, insertNewProgrammingCourse, updateProgrammingCourse, updateProgrammingCourse2, deleteProgrammingCourse };