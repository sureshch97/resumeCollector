const mongoose = require('mongoose')


const profileSchema = mongoose.Schema({

    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'

    },

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    resume: {
        type: String,

    },
    phonenumber: {
        type: Number,
        require: true
    },
    location: {
        type: String,
        required: true
    }

   
});
module.exports = mongoose.model('profile', profileSchema)
