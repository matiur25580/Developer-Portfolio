const mongoose=require('mongoose');
// Stores visitor contact submissions so the portfolio owner can review them in the admin inbox.
module.exports=mongoose.model('Message', new mongoose.Schema({ name:String, email:String, message:String, createdAt:{type:Date, default:Date.now} }));
