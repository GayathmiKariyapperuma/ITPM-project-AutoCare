const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const add_service = new Schema({

    name :{
        type: String,
        required : true,
    },
    nic :{
        type: String,
        required : true,
    },
    vnumber :{
        type : String,
        required : true,
    },
    cemail :{
        type : String,
        required : true,
    },
    
})

const data = mongoose.model("add_service",add_service);
// console.log(staffschema);
module.exports = data;