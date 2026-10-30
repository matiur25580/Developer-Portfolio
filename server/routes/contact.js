const express=require('express'); const Message=require('../models/Message'); const router=express.Router();
router.post('/', async (req,res)=>{ try{ const m=await Message.create({name:req.body.name,email:req.body.email,message:req.body.msg||req.body.message}); res.json({success:true,data:[STRIPPED] }catch(e){ res.status(500).json({success:false,error:e.message}); } });
router.get('/', async (req,res)=>{ try{ const msgs=await Message.find().sort({createdAt:-1}); res.json(msgs); }catch(e){ res.status(500).json({error:e.message}); } });
module.exports=router;
