const express=require('express');
const app=express();
const cors=require('cors');
const connectwithdb =require('./db');
const connection=connectwithdb.connectwithdb;
connection();
app.use(cors())
app.use(express.json())
const createroute=require('./routes/create');
const loginroute=require('./routes/login');
const userdataroute=require('./routes/userdata');
const forgotpassword=require('./routes/forgotpassword');
const chat=require('./routes/chat');
const chatMessage=require('./routes/chatMessage');
app.use('/',createroute.route);
app.use('/',loginroute.route);
app.use('/',userdataroute.route);
app.use('/',forgotpassword.route);
app.use('/chat',chat.route);
app.use('/messages',chatMessage.route);
app.get('/',(req,res)=>{
    res.status(200).send({"status":"success"})
})
app.listen(4001,()=>{
    console.log("Listening to port 4001")
})