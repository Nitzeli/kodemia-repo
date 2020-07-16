
// este archivo es la defición del servidor

const express = require ('express')

const app = express ()

const kodersRouter = require ('./routes/koders')

app.use(express.json())

// montando el router de koders

app.use('/koders', kodersRouter)

app.get ('/', (request, response) =>{
    response.json ({
        success: true,
        message: 'Kodemia APIv8'
    })
})

//debemos exportar app, porque quien escucha es index

module.exports = app