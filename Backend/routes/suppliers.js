//importing dependencies
const router = require('express').Router();
const Supplier = require('../models/supplier');




//Insert supplier deatils 
router.post('/supplier/add',(req,res)=>{

    let newSupplier = new Supplier(req.body);

    newSupplier.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Supplier created Successfully!"
        });

        });
});

//get Suppliers details 
router.get('/supplier',(req,res)=>{
    Supplier.find().exec((err,suppliers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSuppliers: suppliers
        });
    }) ;          
});

//get Individuale Gide deatils
router.get("/supplier/:id",(req,res)=>{
    let gId = req.params.id;
    Supplier.findById(gId,(err,supplier)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            supplier
        });
    });
});

//update supplier deatils
router.put('/supplier/update/:id',(req,res)=>{
    Supplier.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,supplier)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete supplier

router.delete('/supplier/delete/:id',(req,res)=>{
    Supplier.findByIdAndRemove(req.params.id).exec((err,deleteGuide)=>{
        if (err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Successful",deleteGuide
        });

    });
});


module.exports = router;
