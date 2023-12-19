const express=require('express')
const router=express.Router();
const controller=require('../controllers/chatMessage')
router.post('/',controller.createMessage)
.get('/:chatId',controller.findMessage)
.delete('/delete',controller.deleteAll)
exports.route=router