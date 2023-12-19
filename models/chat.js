const mongoose=require('mongoose')
const chat=mongoose.Schema({
    "members":Array,
    "senderId":String,
    "lastMessage":String
},
{ timestamps: true } 
)
const chatModel=mongoose.model('chat',chat);
module.exports=chatModel;