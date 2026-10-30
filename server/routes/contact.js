const express = require('express');
const Message = require('../models/Message');
const router = express.Router();
const ADMIN_PASS = process.env.ADMIN_PASS || "rubel2026";

router.post('/', async (req, res) => {
  try {
    const m = await Message.create({ name: req.body.name, email: req.body.email, message: req.body.msg || req.body.message });
    res.json({ success: true, data: m });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});
router.get('/', async (req, res) => {
  try { const msgs = await Message.find().sort({ createdAt: -1 }); res.json(msgs); }
  catch(e){ res.status(500).json({ error: e.message }); }
});
router.delete('/:id', async (req,res)=>{
  if(req.headers['x-admin-pass'] !== ADMIN_PASS) return res.status(401).json({error:'Unauthorized'});
  await Message.findByIdAndDelete(req.params.id); res.json({success:true});
});
router.delete('/', async (req,res)=>{
  if(req.headers['x-admin-pass'] !== ADMIN_PASS) return res.status(401).json({error:'Unauthorized'});
  await Message.deleteMany({}); res.json({success:true});
});
module.exports = router;
