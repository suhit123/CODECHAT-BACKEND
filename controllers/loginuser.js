const jwt=require('jsonwebtoken');
const userschema=require('../models/usermodel');
const bcrypt=require('bcrypt');
exports.loginuser=async(req,res)=>{
    let user;
    try{
    if(req.body.Name!=='' &&req.body.Password!==''  ){
        user= await userschema.findOne({Name:req.body.Name})
        const match=await bcrypt.compare(req.body.Password,user.Password);
        if(!user){
            return res.status(401).json({error:1});//username not registered!
        }
        else if(user && !(match)){
            return res.status(401).json({error:2});//"Incorrect password!"
        }
        }
        else{
            return res.status(401).json({error:3});//"Enter both the fields"
        }
    }
    catch(err){
        console.log(err);
    }
    let token;
    try{
       token=jwt.sign({id:user.id},"shhhsecret",{expiresIn:"24h"});
    }
    catch(err){
        return res.status(401).json({error:"something went wrong!"});
    };
    res.status(200).json({token:token,message:"Login success"});
}