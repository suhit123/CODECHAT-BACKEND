const mongoose=require('mongoose')
const chatMessage=mongoose.Schema({
    "chatId":String,
    "senderId":String,
    "text":String
},
{ timestamps: true } 
)
const chatMessageModel=mongoose.model('chatMessage',chatMessage);
module.exports=chatMessageModel;