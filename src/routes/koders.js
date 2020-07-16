
//crear un router para nuestra aplicación 

const express = require ('express')

const router = express.Router ( )
// un Router es un conjunto o subconjunto de rutas y funciona como lo hace app

const koders = require ('../usecases/koders')

// (este es nuestro home) localhost:8080/koders
// localhost:8080/students

router.get ('/', async (request, response) =>{
try {   // lo que queremos intentar 
    const allKoders = await koders.getAll ()

   response.json({
       success: true,
       data:{
           koders:allKoders
       }
   })
} catch (error) {  // si falla dar respuesta
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

router.patch('/:id' , async (request, require) =>{
    console.log ('patch')
    try {
        const id = request.params
        const newKoder = request.body.id
        const koderUpdated = await koders.updateById(id, request.body)
        response.json ({
            success:true,
            message: 'Koder updated',
            data: {
                koderUpdated
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