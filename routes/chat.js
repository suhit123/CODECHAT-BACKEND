const express=require('express')
const router=express.Router();
const controller=require('../controllers/chat')
router.post('/',controller.createchat)
.get('/:userId',controller.findUserChats)
.get('/find/:firstId/:secondId',controller.findChat)
exports.route=router