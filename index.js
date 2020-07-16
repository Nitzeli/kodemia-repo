
// este archivo debería poner la aplicación en marcha 

const dbConnect = require ('./src/lib/bd')
const server = require ('./src/server')

dbConnect ()
.then(() => {
    console.log ('DB connected')
    server.listen (8080, ( )=>{
        console.log ('server is listening')
    })
}) 
.catch( error => {
    console.error ('Error', error)
})