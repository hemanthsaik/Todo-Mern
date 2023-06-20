//how data will save into db 
//creation of model and schema 

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('ToDo',todoSchema)   //model name and schema name 
