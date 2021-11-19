// importing dependencies 
const mongoose = require('mongoose');

//Create scheam with variables
const supplierSchema = new mongoose.Schema({

    supplierNo:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNo:{
        type: Number,
        required: true
    },
    address:{
        type:String,
        required: true
        
    },
    itemName:{
        type:String,
        
    },
    price:{
        type:Number,
        
    },
    regDate:{
        type: Date,
        default: new Date()
    }



});

module.exports =  mongoose.model('Supplier',supplierSchema);