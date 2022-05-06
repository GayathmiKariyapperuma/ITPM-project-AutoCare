const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const finish = new Schema({

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
    stype :{
        type : String,
        required : true,
    },
    cnumber :{
        type : Number,
        required : true,
    },
})

const data = mongoose.model("finish_Service",finish);
// console.log(staffschema);
module.exports = data;