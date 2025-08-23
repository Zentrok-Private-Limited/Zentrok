// backend/routes/contact.js

const express= require("express");
const router= express.Router();
const Contact= require("../models/contact");

router.post("/",async(req,res)=>{
    const{name,email,message}=req.body;

    try{
    const newContact= new Contact({name,email,message});
    await newContact.save();

    res.status(201).json({
    success:true,
    message:"message sent",
    });
}
catch(err){
    console.error(err);
    res.status(201).json({
        success:false,
        message:" server error",
    });
}
});

module.exports=router;