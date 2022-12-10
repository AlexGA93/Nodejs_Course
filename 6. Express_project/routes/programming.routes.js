const express = require("express");
const dbRouter = express.Router();

// importing controlelrs
const {
  getProgrammingCourses,
  getProgrammingCoursesByLanguage,
  insertNewProgrammingCourse,
  updateProgrammingCourse,
  deleteProgrammingCourse,
  updateProgrammingCourse2
} = require("../controllers/programming.controllers");

// Routing
dbRouter.get("/", getProgrammingCourses);
dbRouter.get("/:language", getProgrammingCoursesByLanguage);

dbRouter.post("/", insertNewProgrammingCourse);

dbRouter.put("/:id", updateProgrammingCourse);
// change only parameters that we want
dbRouter.patch("/:id", updateProgrammingCourse2);

dbRouter.delete("/:id", deleteProgrammingCourse)

// exporting
module.exports = dbRouter;
