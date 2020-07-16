
// uses cases van funciones, deben ser nombradas con verbos
// las acciones que el usurio puede ejercer en el sistema

const Koders = require ('../models/koder') // ruta relativa
const { get } = require('mongoose')
// no usar rutas absolutas

function getAll (){
    return Koders.find ()
}

function create(koderData){
    return Koders.create(koderData)
}

function updateById (id, newKoderData){
    return Koders.findByIdAndUpdate(id, newKoderData, { new: true })
}

function deleteById (id) {
    return Koders.findByIdAndRemove(id)
  }

// solo se puede exportar una sola cosa y podemos crear el objeto {con llaves}
// function deleteById

module.exports = {
    getAll,
    create,
    updateById
}