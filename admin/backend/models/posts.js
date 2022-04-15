const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

 Firstname:{
        type:String,
        required:true
    },
 Lastname:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },

    Phonenumber:{
        type:Number,
        required:true
    }

    });

module.exports =  mongoose.model('Posts', postSchema);
