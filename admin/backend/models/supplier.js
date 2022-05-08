const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplier_details = new Schema({
    
    supplierNo : {
        type : String,
        required: true
    },
    compName:{
        type : String,
        required: true
    },
    compAddress:{
        type : String,
        required: true
    },
    compEmail:{
        type : String,
        required: true
    },
    compPhone:{
        type : Number,
        required: true
    },
    agentName:{
        type : String,
        required: true
    },
    agentEmail:{
        type : String,
        required: true
    },
    agentPhone:{
        type : Number,
        required: true
    }

})

const supplier = mongoose.model("supplier_details",supplier_details);

module.exports = supplier;