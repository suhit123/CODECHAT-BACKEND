const chatMessageSchema=require('../models/chatMessage');
exports.createMessage=async(req,res)=>{
    try{
        const {chatId,senderId,text}=req.body;
        const message=new chatMessageSchema({
            chatId,senderId,text
        })
        const response=await message.save();
        res.status(201).json(response);
    }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
};
exports.findMessage=async(req,res)=>{
    const {chatId}=req.params;
    try{
        const  messages=await chatMessageSchema.find({chatId});
        res.status(200).json(messages);
    }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
}
exports.deleteAll=async(req,res)=>{
    try{
        const  messages=await chatMessageSchema.deleteMany();
        res.status(200).json(messages);
    }
    catch(err){
        res.status(501).json({"message":"something gone wrong!"})
    }
}