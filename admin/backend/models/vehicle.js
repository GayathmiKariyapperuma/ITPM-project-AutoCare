const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    NIC:{
        type:String,
        required:true
    },

    VehicleNo:{
        type:String,
        required:true
    },

    Colour:{
        type:String,
        required:true
    },

    Model:{
        type:String,
        required:true
    },

    Brand:{
        type:String,
        required:true
    },

    EngineOil:{
        type:String,
        required:true
    },

    LastServiceDate:{
        type:String,
        required:true
    },


});

module.exports =  mongoose.model('vehicle', postSchema);

// the name that we want to create in mongodb database