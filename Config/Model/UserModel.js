const mongoose = require('mongoose')    

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
      type  : String
    },
    phoneNum: {
        type: String
    },
    isFemale: {
        type: Boolean
    }
})

const userModel = 
mongoose.model('student', userSchema);

module.exports = userModel
