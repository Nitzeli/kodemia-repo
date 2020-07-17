
// modelo que representa al mentor 

const mongoose = require ('mongoose')

const mentorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 100
    },
    age: {
        type: Number,
        min: 15,
        max: 100,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'female',
            'male',
            'nonbinary'
        ]
    }
})

module.exports = mongoose.model('mentors', mentorSchema) 