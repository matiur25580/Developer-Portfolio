import { useState } from 'react';
const API="https://developer-portfolio-9c5f.onrender.com/api/contact";
export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',msg:'',subject:''});
  const [ok,setOk]=useState(''); const [sending,setSending]=useState(false);
  const submit=async(e)=>{
    e.preventDefault(); setOk(''); setSending(true);
    const ctrl = new AbortController();
    const timer = setTimeout(()=>ctrl.abort(), 15000);
    try{
      const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:form.name,email:form.email,msg:form.subject+': '+form.msg}),signal:ctrl.signal});
      clearTimeout(timer);
      const d=await r.json();
      if(d.success){ setOk('Thank you! Your message has been sent. I will reply within 24 hours.'); setForm({name:'',email:'',msg:'',subject:''}); }
      else setOk('Something went wrong. Please email me directly at rahamanmatiur397@gmail.com');
    }catch(e){ clearTimeout(timer); setOk('Server is waking up (Render free tier). Please try again in 30 seconds or email me directly.'); }
    setSending(false); setTimeout(()=>setOk(''),8000);
  };
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500 text-center">CONTACT</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">CONTACT ME</h2>
      <p className="text-center text-sm text-gray-400 mb-2">Open to <span className="text-green-400 font-bold">MNC / Startup</span> MERN Full Stack Developer roles</p>
      <div className="flex justify-center mb-8"><span className="text-[11px] bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-1.5 rounded-full font-bold">● Available for full-time roles</span></div>

      <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-4 max-w-4xl mx-auto mb-8">
        <a href="mailto:rahamanmatiur397@gmail.com" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto bg-green-500 rounded-xl flex items-center justify-center text-xl font-bold text-black mb-3">E</div>
          <h3 className="font-bold text-sm">Email Me</h3>
          <p className="text-[11px] text-green-400 mt-1 break-all px-1">rahamanmatiur397@gmail.com</p>
          <p className="text-[10px] text-gray-600 mt-1">Replies within 24 hours</p>
        </a>
        <a href="https://maps.app.goo.gl/mMmRsyXMTnkmGRrF7" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto bg-blue-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mb-3">L</div>
          <h3 className="font-bold text-sm">My Location</h3>
          <p className="text-xs text-green-400 mt-1">Newtown, Kolkata, India</p>
          <p className="text-[10px] text-gray-600 mt-1">Click to open map</p>
        </a>
        <a href="https://github.com/matiur25580" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto bg-purple-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mb-3">G</div>
          <h3 className="font-bold text-sm">GitHub</h3>
          <p className="text-xs text-green-400 mt-1">github.com/matiur25580</p>
          <p className="text-[10px] text-gray-600 mt-1">6 enterprise projects</p>
        </a>
        <a href="https://www.linkedin.com/in/matiur-rahaman-3a6086233" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto bg-blue-600 rounded-xl flex items-center justify-center text-xl font-bold text-white mb-3">in</div>
          <h3 className="font-bold text-sm">LinkedIn</h3>
          <p className="text-xs text-green-400 mt-1">Connect with me</p>
          <p className="text-[10px] text-gray-600 mt-1">MERN Developer</p>
        </a>
        <a href="https://www.instagram.com/rubel87598" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-xl font-bold text-white mb-3" style={{background:'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'}}>ig</div>
          <h3 className="font-bold text-sm">Instagram</h3>
          <p className="text-xs text-green-400 mt-1">@rubel87598</p>
          <p className="text-[10px] text-gray-600 mt-1">Follow me</p>
        </a>
        <a href="https://x.com/MatiurR20638496" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto bg-black border border-gray-700 rounded-xl flex items-center justify-center text-xl font-bold text-white mb-3">X</div>
          <h3 className="font-bold text-sm">X (Twitter)</h3>
          <p className="text-xs text-green-400 mt-1">@MatiurR20638496</p>
          <p className="text-[10px] text-gray-600 mt-1">Follow me</p>
        </a>
      </div>

      <form onSubmit={submit} className="max-w-2xl mx-auto bg-[#111] border border-gray-800 p-6 rounded-2xl">
        <h3 className="font-bold text-sm mb-4 text-center">Send me a message <span className="text-gray-500 font-normal">- HR / Interview / Project inquiry</span></h3>
        <div className="grid md:grid-cols-2 gap-3">
          <input className="bg-black border border-gray-700 focus:border-green-500 p-3 rounded-lg text-sm outline-none" placeholder="Your Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input className="bg-black border border-gray-700 focus:border-green-500 p-3 rounded-lg text-sm outline-none" placeholder="Your Email *" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        </div>
        <input className="w-full bg-black border border-gray-700 focus:border-green-500 p-3 rounded-lg text-sm mt-3 outline-none" placeholder="Subject (e.g. Interview Invitation)" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
        <textarea className="w-full bg-black border border-gray-700 focus:border-green-500 p-3 rounded-lg text-sm mt-3 outline-none" placeholder="Your message..." rows="5" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} required />
        <button disabled={sending} className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-bold py-3 rounded-full mt-4 text-sm transition">{sending?'Sending...':'Send Message'}</button>
        {ok && <p className="text-center text-green-400 text-[13px] mt-3 leading-relaxed">{ok}</p>}
      </form>
      <p className="text-center text-[11px] text-gray-600 mt-6">Prefer email? <a href="mailto:rahamanmatiur397@gmail.com" className="text-green-400 underline">rahamanmatiur397@gmail.com</a></p>
    </div>
  );
}
