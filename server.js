const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //use for convert json format to javaScript
const cors = require('cors');
const path = require('path');
require("dotenv").config();


const app = express();


//routes
const SuppliersRoute = require("./routes/Suppliers");


// //app middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use(SuppliersRoute);


const PORT = process.env.PORT ;
const DB_URL = process.env.DB_URL ;


//crate options
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify: false
    
})


//db Connection
mongoose.connect(DB_URL)
.then(()=>{
    console.log('MongoDB Connected!');
})
.catch((err)=> console.log('DB Connection Error!',err));   


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'../frontend/build')));

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname,'frontend', 'build' ,'index.html'));
    })
}else{
    app.get('/',(req,res) =>{
        res.send("API is Running")
    })
}

app.listen(PORT, ()=>{
         console.log(`App is running on ${PORT}`);
});