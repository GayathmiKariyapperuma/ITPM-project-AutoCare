const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const item_regi = new Schema({

    supplierNo : {
        type : String,
        required : true
    },

    itemName : {
        type : String,
        required : true
    },

    itemCode : {
        type : String,
        required : true
    }
 })

 const items = mongoose.model("item_regi", item_regi);

 module.exports = items;