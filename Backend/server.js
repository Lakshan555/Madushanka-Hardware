const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //use for convert json format to javaScript
const cors = require('cors');


const app = express();


//routes
const SuppliersRoute = require("./routes/Suppliers");


// //app middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use(SuppliersRoute);


const PORT = process.env.PORT ||8000;
const DB_URL = process.env.MONGODB_URI ||'mongodb+srv://madu:123@hardware.icbmg.mongodb.net/Hardware?retryWrites=true&w=majority'


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


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}

app.listen(PORT, ()=>{
         console.log(`App is running on ${PORT}`);
});