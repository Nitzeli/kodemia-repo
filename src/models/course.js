
const mongoose = require ('mongoose')

const courseSchema = new mongoose.Schema ({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    instructor: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        match: /^.+@.+\..+$/ 
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    }
})

module.exports = mongoose.model ('courses', courseSchema)