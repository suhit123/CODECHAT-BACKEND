const chatschema=require('../models/chat');
exports.createchat=async(req,res)=>{
    const {firstId,secondId}=req.body;
    try{
        const chat=await chatschema.findOne({
            members:{$all:[firstId,secondId]},
        })
        if (chat) return res.status(200).json({...chat,added:true});
        const newChat=new chatschema({
            members:[firstId,secondId],
        })
        const response=await newChat.save();
        res.status(200).json(response)
    }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
}
exports.findUserChats=async(req,res)=>{
    const userId=req.params.userId;
    try{
        const chats=await chatschema.find({
            members:{$in:[userId]}
        })
        res.status(200).json(chats)
    }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
}
exports.findChat=async(req,res)=>{
    const {firstId,secondId}=req.params
    try{
        const chats=await chatschema.findOne({
            members:{$all:[firstId,secondId]}
        })
        res.status(200).json(chats)
    }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
}