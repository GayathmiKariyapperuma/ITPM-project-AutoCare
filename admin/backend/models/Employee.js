const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const add_employee = new Schema({
    
    employeeno : {
        type : Number,
        required: true,
    },
    name : {
        type : String,
        required: true,
    },
    age : {
        type : Number,
        required: true,
    },
    phoneno : {
        type : Number,
        required: true,
    },
    address : {
        type : String,
        required: true,
    },
    nic : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    jobtitle : {
        type : String,
        required: true,
    },
    gender : {
        type : String,
        required: true,
    }

})

const Employee = mongoose.model("Employee",add_employee);

module.exports = Employee;