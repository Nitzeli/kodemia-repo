
// uses cases van funciones, deben ser nombradas con verbos
// las acciones que el usurio puede ejercer en el sistema

const Koders = require ('../models/koder') // ruta relativa
// no usar rutas absolutas

const bcrypt = require ('../lib/bcrypt')

const jwt = require ('../lib/jwt')

function getAll (){
    return Koders.find ()
}

function create(koderData){
    return Koders.create(koderData)
}

function updateById (idKoder, KodersToUpdate){
    return Koders.findByIdAndUpdate(idKoder, KodersToUpdate)
}

function deleteById (idKoder ) {
    return Koders.findByIdAndRemove(idKoder)
  }

// solo se puede exportar una sola cosa y podemos crear el objeto {con llaves}
// function deleteById

async function signup (koderData){

    const {password} = koderData
    // siguiente paso encriptar la contraseña

    const passwordEncripted = await bcrypt.hash(password)

    return Koders.create({
        ...koderData, 
        password: passwordEncripted
    })
}
async function login (email, passwordPlain){
    // buscar usuario en base de datos
    
    const koderByEmail = await Koders.findOne({email})

    if (!koderByEmail){
        // se ejecuta cuando no hay un koder
        throw new Error('Email not found')
    }
    // verificar que si sea su password
    const isValid = bcrypt.compare(passwordPlain, koderByEmail.password)
    if (!isValid){
        throw new Error ('Password not valid')
    }

    const token = jwt.sign({ id: koderByEmail._id})
    // TODO: create token
    return token
}

module.exports = {
    getAll,
    create,
    updateById,
    deleteById,
    signup,
    login,
}