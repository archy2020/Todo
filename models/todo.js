//require the library
const mongoose = require('mongoose');
const dateonly=require('mongoose-dateonly')(mongoose); 
const todoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    date: {
        type: dateonly,
        required: true
    },
   
    category: {
        type: String,
        required: true
    }

});

const Todo = mongoose.model('Todo', todoSchema );
module.exports = Todo;