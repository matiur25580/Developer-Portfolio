const express=require('express'); const mongoose=require('mongoose'); const cors=require('cors'); require('dotenv').config();
const app=express(); app.use(cors()); app.use(express.json());
if(process.env.MONGO_URI){ mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.log('Mongo error:',e.message)); }
app.use('/api/contact', require('./routes/contact'));
app.get('/api/health',(req,res)=>res.json({status:'ok', dev:'Rubel Ali'}));
const PORT=process.env.PORT||5000;
app.listen(PORT, ()=>console.log('Server running on '+PORT));
