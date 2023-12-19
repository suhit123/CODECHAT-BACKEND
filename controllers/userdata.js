const jwt=require('jsonwebtoken');
const userschema=require('../models/usermodel.js');
require('dotenv').config();
exports.authorize=async(req,res)=>{
    try{
        const token=req.body.token;
    if(token){
        const decode=await jwt.verify(token,"shhhsecret");
        const userdata=await userschema.findOne({_id:decode.id});
        res.status(200).json({id:userdata._id,Name:userdata.Name,Email:userdata.Email,Profile:userdata.Profile});
    }
    else{
        res.status(500).json({message:"Session expired!"})
    }}
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
};
exports.getUser=async(req,res)=>{
    try{
        const userId=req.params.userId;
        const userdata=await userschema.findOne({_id:userId}).select('-Password');
        res.status(200).json({id:userdata._id,Name:userdata.Name,Email:userdata.Email,Profile:userdata.Profile});
   }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
}