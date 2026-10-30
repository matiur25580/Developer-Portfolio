const express=require('express'); const mongoose=require('mongoose'); const cors=require('cors'); require('dotenv').config();
const app=express(); app.use(cors()); app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.log(e));
app.use('/api/contact', require('./routes/contact'));
app.get('/api/health',(req,res)=>res.json({status:'ok'}));
app.listen(process.env.PORT||5000, ()=>console.log('Server running'));
