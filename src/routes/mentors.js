// crearemos router de app

const express = require ('express')

const router = express.Router ( )

const mentors = require ('../usecases/mentors')

router.get ('/', async (request, response) => {

    try {
        const allMentors = await mentors.getAll ()

        response.json ({
            success: true,
            data:{
                mentors: allMentors
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

router.post('/',async (request, response)=>{
    try {
        const newMentorsData = request.body
        console.log (newMentorsData)
        const newMentor = await mentors.create(newMentorsData)
        response.json({
            success:true,
            data: {
                newMentor
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

router.post('/',async (request, response)=>{
    try {
        console.log ('post')
        const newKodersData = request.body
        console.log (newKodersData)
        const newKoder = await koders.create(newKodersData)
        console.log (newKoder)
        response.json({
            success:true,
            data: {
                newKoder
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

router.patch('/:id' , async (request, response) =>{
  try {
    const id = request.params.id
    const MentorsToUpdate = request.body
    const mentorUpdated = await mentors.updateById(id,MentorsToUpdate)
    response.json({
        success: true,
        data: {
            mentorUpdated
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
        const mentorDeleted = await mentors.deleteById(id)
        response.json({
            success: true,
            data:{
                mentorDeleted
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