
// aquí se crea la función que me sirve para conectarme con la base de datos 

const mongoose = require ('mongoose')

function connect (){
    return mongoose.connect (
        'mongodb+srv://Nitzeli:Paydelimon12@nitz-cluster.elywz.mongodb.net/Kodemia',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    )
}

module.exports = connect
// mongoose.conect nos regresa una promesa que podemos ocupar en otro lado
// donde la mandemos a llamar a connect () y luego utilizar .then y .catch