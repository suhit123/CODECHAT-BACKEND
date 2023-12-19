const express=require('express');
const router=express.Router();
const controllers=require('../controllers/userdata');
router.post('/userdetails',controllers.authorize);
router.get('/user/:userId',controllers.getUser);
exports.route=router;