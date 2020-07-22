
const express = require ('express')

const router = express.Router ( )

const courses = require ('../usecases/courses')

router.get ('/', async (request, response) => {

    try {
        const allCourses = await courses.getAll ()

        response.json ({
            success: true,
            data:{
                courses: allCourses
            }
        })
    } catch (error) {
        response.status (error.status || 400)
        response.json ({
            success:false,
            error: error.message
        })
    }

})

 router.post('/', async (request,response) => {
    try {
        const newCourseData = request.body
        const newCourse = await courses.create(newCourseData)

        response.json ({
            success: true,
            data: {
                newCourse
            }
        })
    } catch (error) {
        response.status (error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }
})

router.patch('/:id' , async (request, response) =>{
    try {
        const id = request.params.id
        const coursesToUpdate = request.body
        const courseUpdated = await courses.update(id,coursesToUpdate)
        
    response.json({
        success: true,
        data: {
            courseUpdated
        }
    })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete('/:id',async (request,response)=>{
    try {
        const id = request.params.id
        const courseDeleted = await courses.deleteById(id)
        response.json({
            success: true,
            data:{
                courseDeleted
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router