const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create (init) customer lead model

const CustomerLeadSchema = new Schema({

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    },

    comments:{
        type: String
    },

    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = CustomerLead = mongoose.model('custLeads', CustomerLeadSchema);