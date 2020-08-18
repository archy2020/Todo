//require the library
const mongoose = require('mongoose');
const dateonly=require('mongoose-dateonly')(mongoose); 
const todoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    completed: {
        type: Number,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    date: {
        type: dateonly,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema );
module.exports = Todo;