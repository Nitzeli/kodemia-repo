
const Courses = require ('../models/course')
const { response } = require('express')

function getAll (){
    return Courses.find ()
}

function create(courseData){
    return Courses.create(courseData)
}

function update (idCourse, CoursesToUpdate){
    return Courses.findByIdAndUpdate (idCourse, CoursesToUpdate)
}

function deleteById (idCourse ) {
    return Courses.findByIdAndRemove(idCourse)
  }

module.exports = {
    getAll, 
    create,
    update,
    deleteById
}