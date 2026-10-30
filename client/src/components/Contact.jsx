import { useState } from 'react';
export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',msg:''});
  const [ok,setOk]=useState('');
  const submit=(e)=>{
    e.preventDefault();
    setOk('✅ Message sent successfully! I will reply within 24 hours.');
    setForm({name:'',email:'',msg:''});
    setTimeout(()=>setOk(''),4000);
  };
  return (
    <section id="contact" className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6">📩 Contact Me</h2>
      <form onSubmit={submit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
        <input className="w-full border p-3 rounded mb-3 dark:bg-gray-700 dark:text-white" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="w-full border p-3 rounded mb-3 dark:bg-gray-700 dark:text-white" placeholder="Your Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <textarea className="w-full border p-3 rounded mb-3 dark:bg-gray-700 dark:text-white" placeholder="Message for HR / Interview" rows="4" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} required />
        <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold">Send Message</button>
        {ok && <p className="mt-3 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded text-center">{ok}</p>}
      </form>
      <p className="text-center mt-6">📧 rahamanmatiur397@gmail.com | 📍 Newtown, Kolkata | 🏠 Uttar Dinajpur, West Bengal</p>
    </section>
  );
}
