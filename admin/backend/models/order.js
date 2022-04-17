const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    orderNo : {
        type : String,
        required: true
    },
    supplierNo : {
        type : String,
        required: true
    },
    itemCodes:{
        type : String,
        required: true
    },
    orderDate:{
        type : String,
        required: true
    },

})

const order = mongoose.model("order_details",orderSchema);

module.exports = order;