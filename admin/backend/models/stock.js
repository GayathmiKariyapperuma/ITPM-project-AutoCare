const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const add_stock = new Schema({

    itemNo : {
        type : String,
        required : true
    },

    stockNo : {
        type : String,
        required : true
    },

    itemName : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    brand : {
        type : String,
        required : true
    },

    quantity : {
        type : String,
        required : true
    },

    agentName : {
        type : String,
        required : true
    },

    unitPrice : {
        type : Number,
        required : true
    },

    date : {
        type : String,
        required : true
    }
 })

 const stock = mongoose.model("add_stock", add_stock);

 module.exports = stock;