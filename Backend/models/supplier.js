// importing dependencies 
const mongoose = require('mongoose');

//Create scheam with variables
const supplierSchema = new mongoose.Schema({

    supplierNo:{
        type:String,
        
    },
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    phoneNo:{
        type: Number,
        
    },
    address:{
        type:String,
       
        
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