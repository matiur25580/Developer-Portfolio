import { useState } from 'react';
const API = "https://developer-portfolio-9c5f.onrender.com/api/contact";
export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',msg:''});
  const [ok,setOk]=useState(''); const [err,setErr]=useState('');
  const submit=async(e)=>{
    e.preventDefault(); setOk(''); setErr('');
    try{
      const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const d=await r.json();
      if(d.success){ setOk('✅ Message sent successfully! I will reply within 24 hours.'); setForm({name:'',email:'',msg:''}); }
      else setErr('❌ Failed: '+(d.error||'try again'));
    }catch(e){ setErr('❌ Backend waking up... 50s wait kore abar try koro (free instance)'); }
    setTimeout(()=>{setOk('');setErr('')},5000);
  };
  return (
    <section id="contact" className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6">📩 Contact Me</h2>
      <form onSubmit={submit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
        <input className="w-full border p-3 rounded mb-3 dark:bg-gray-700 dark:text-white" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="w-full border p-3 rounded mb-3 dark:bg-gray-700 dark:text-white" placeholder="Your Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <textarea className="w-full border p-3 rounded mb-3 dark:bg-gray-700 dark:text-white" placeholder="Message for HR / Interview" rows="4" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} required />
        <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold">Send Message</button>
        {ok && <p className="mt-3 text-green-600 bg-green-50 p-2 rounded text-center">{ok}</p>}
        {err && <p className="mt-3 text-red-600 bg-red-50 p-2 rounded text-center">{err}</p>}
      </form>
      <p className="text-center mt-6">📧 rahamanmatiur397@gmail.com | 📍 Newtown, Kolkata</p>
      <p className="text-center mt-2 text-sm opacity-70">Tumi nije dekhte chaile: <a className="text-blue-600 underline" href="https://developer-portfolio-9c5f.onrender.com/api/contact" target="_blank">View Messages (JSON)</a></p>
    </section>
  );
}
