
// este archivo es la defición del servidor

const express = require ('express')

const app = express ()

const kodersRouter = require ('./routes/koders')

const mentorsRouter = require('./routes/mentors') 

app.use(express.json())

// montando el router de koders

app.use('/koders', kodersRouter)
app.use('/mentors',mentorsRouter)

app.get('/', (request,response)=>{
    response.json({
        succes: true,
        message: 'Kodemia APIv8'
    })
})

//debemos exportar app, porque quien escucha es index

module.exports = app