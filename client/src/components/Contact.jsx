import { useState } from 'react';
const API="https://developer-portfolio-9c5f.onrender.com/api/contact";
export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',msg:''});
  const [ok,setOk]=useState('');
  const submit=async(e)=>{
    e.preventDefault(); setOk('');
    try{
      const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const d=await r.json();
      if(d.success){ setOk('✅ Message sent successfully!'); setForm({name:'',email:'',msg:''}); }
    }catch(e){ setOk('❌ Backend waking up, try again in 30s'); }
    setTimeout(()=>setOk(''),4000);
  };
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500 text-center">CONTACT</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">CONTACT ME</h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8 text-center">
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6"><p className="text-2xl">📍</p><h3 className="font-bold text-sm mt-2">My Address</h3><p className="text-xs text-gray-500 mt-1">Newtown, Kolkata, India</p></div>
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6"><p className="text-2xl">📧</p><h3 className="font-bold text-sm mt-2">Email Me</h3><p className="text-xs text-gray-500 mt-1">rahamanmatiur397@gmail.com</p></div>
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6"><p className="text-2xl">📞</p><h3 className="font-bold text-sm mt-2">Call Me</h3><p className="text-xs text-gray-500 mt-1">Available on request</p></div>
      </div>
      <form onSubmit={submit} className="max-w-2xl mx-auto bg-[#111] border border-gray-800 p-6 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-3">
          <input className="bg-black border border-gray-700 p-3 rounded-lg text-sm" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input className="bg-black border border-gray-700 p-3 rounded-lg text-sm" placeholder="Your Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        </div>
        <input className="w-full bg-black border border-gray-700 p-3 rounded-lg text-sm mt-3" placeholder="Subject" />
        <textarea className="w-full bg-black border border-gray-700 p-3 rounded-lg text-sm mt-3" placeholder="Message for HR / Interview" rows="5" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} required />
        <button className="w-full bg-green-500 text-black font-bold py-3 rounded-full mt-4 text-sm hover:bg-green-400">Send Message</button>
        {ok && <p className="text-center text-green-400 text-sm mt-3">{ok}</p>}
      </form>
    </div>
  );
}
