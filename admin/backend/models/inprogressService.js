const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inprogress = new Schema({

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
    ename :{
        type : String,
        required : true,
    },
})

const data = mongoose.model("inprogress_Service",inprogress);
// console.log(staffschema);
module.exports = data;