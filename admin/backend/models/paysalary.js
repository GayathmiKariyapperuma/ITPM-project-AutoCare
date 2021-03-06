const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payschema = new Schema({

    name :{
        type: String,
        required : true,
    },
    age :{
        type: String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    nic :{
        type : String,
        required : true,
    },
    allowance :{
        type : Number,
        required : true,
    },
    basicsalary :{
        type : Number,
        required : true,
    },
    date :{
        type : String,
        required : true,
    }
})

const data = mongoose.model("Pay_salary",payschema);
// console.log(staffschema);
module.exports = data;