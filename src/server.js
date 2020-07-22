
// este archivo es la defición del servidor

const express = require ('express')

const cors = require ('cors')

const app = express ()

const kodersRouter = require ('./routes/koders')
const mentorsRouter = require('./routes/mentors') 
const authRouter = require ('./routes/auth')
const methods = require ('./middlewares/methods')
const coursesRouter = require ('./routes/courses')

app.use(cors())
app.use(express.json())

// middleware a nivel de aplicación
// app.use (funcion(request, response, next))
// app.use(...funcion)

app.use((request, response, next)=>{
    console.log ('middleware de aplicación')
    next ()
},(request, response, next)=>{
    console.log ('middleware 2')
    request.charles = 'hola soy charles'
    next ()
}, (request, response, next)=>{
    console.log ('middleware 3', request.charles)
    next ()
})


// montando el router 
app.use(methods)
app.use('/koders', kodersRouter)
app.use('/mentors',mentorsRouter)
app.use ('/auth', authRouter)
app.use('/courses', coursesRouter)


app.get('/', (request,response)=>{
    response.json({
        succes: true,
        message: 'Kodemia APIv8'
    })
})

//debemos exportar app, porque quien escucha es index

module.exports = app