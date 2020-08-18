//require the library
const mongoose = require('mongoose');
const dateonly=require('mongoose-dateonly')(mongoose); 
const habbitSchema = new mongoose.Schema({

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

const Habbit = mongoose.model('Habbit', habbitSchema );
module.exports = Habbit;