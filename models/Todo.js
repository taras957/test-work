const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
    },
    text:{
        type:String,
    }
})

TodoSchema.plugin(uniqueValidator);

module.exports = mongoose.model('articles',TodoSchema)