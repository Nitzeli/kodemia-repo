
// uses cases van funciones, deben ser nombradas con verbos
// las acciones que el usurio puede ejercer en el sistema

const Koders = require ('../models/koder') // ruta relativa
// no usar rutas absolutas

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

module.exports = {
    getAll,
    create,
    updateById,
    deleteById
}