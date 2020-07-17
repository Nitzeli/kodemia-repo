
// caso de uso que representa al mentor

const Mentors = require ('../models/mentor')

function getAll ( ) {
    return Mentors.find ()
}

function create(mentorData){
    return Mentors.create(mentorData)
}


function updateById (idKoder, KodersToUpdate){
    return Mentors.findByIdAndUpdate(idKoder, KodersToUpdate)
}

function deleteById (idMentor ) {
    return Mentors.findByIdAndRemove(idMentor)
  }
module.exports = {
    getAll, 
    create,
    updateById,
    deleteById
}