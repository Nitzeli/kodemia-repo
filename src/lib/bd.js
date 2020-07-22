
// aquí se crea la función que me sirve para conectarme con la base de datos 

const mongoose = require ('mongoose')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

function connect (){
    return mongoose.connect (
         `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME} `,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    )
}

module.exports = connect
// mongoose.conect nos regresa una promesa que podemos ocupar en otro lado
// donde la mandemos a llamar a connect () y luego utilizar .then y .catch