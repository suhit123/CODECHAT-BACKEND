const createusercontrol=require('../controllers/createuser');
const express=require('express');
const router=express.Router();
router.post('/create',createusercontrol.createuser)
.post('/changeprofile',createusercontrol.changeProfile);
exports.route=router;