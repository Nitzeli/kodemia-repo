
const bcrypt = require ('bcrypt')

const saltRound = 10 

function hash (plainText) { // encriptado de la contraseña
    return bcrypt.hash(plainText, saltRound) //esta parte es para configurar, hace un wrapper, volverla reusable
}

module.exports = { //exportar un objeto, extender el objeto
    ...bcrypt,
    hash // es para sobreescribir la función
}