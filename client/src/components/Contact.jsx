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
          <svg className="w-12 h-12 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
<path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
<path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
<path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
<path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
<path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
</svg>
          <h3 className="font-bold text-sm">Email Me</h3>
          <p className="text-[11px] text-green-400 mt-1 break-all px-1">rahamanmatiur397@gmail.com</p>
          <p className="text-[10px] text-gray-600 mt-1">Replies within 24 hours</p>
        </a>
        <a href="https://maps.app.goo.gl/mMmRsyXMTnkmGRrF7" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <svg className="w-12 h-12 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.3 132.3"><path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/><path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/><path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/><path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/><path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/></svg>
          <h3 className="font-bold text-sm">My Location</h3>
          <p className="text-xs text-green-400 mt-1">Newtown, Kolkata, India</p>
          <p className="text-[10px] text-gray-600 mt-1">Click to open map</p>
        </a>
        <a href="https://github.com/matiur25580" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <img src="https://cdn.simpleicons.org/github/white" className="w-12 h-12 mx-auto mb-3" alt="GitHub"/>
          <h3 className="font-bold text-sm">GitHub</h3>
          <p className="text-xs text-green-400 mt-1">github.com/matiur25580</p>
          <p className="text-[10px] text-gray-600 mt-1">31 public projects</p>
        </a>
        <a href="https://www.linkedin.com/in/matiur-rahaman-3a6086233" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <svg fill="#0A66C2" className="w-12 h-12 mx-auto mb-3" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <h3 className="font-bold text-sm">LinkedIn</h3>
          <p className="text-xs text-green-400 mt-1">Connect with me</p>
          <p className="text-[10px] text-gray-600 mt-1">MERN Developer</p>
        </a>
        <a href="https://www.instagram.com/rubel87598" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-xl font-bold text-white mb-3" style={{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"}}><img src="https://cdn.simpleicons.org/instagram/white" className="w-7 h-7" alt="Instagram"/></div>
          <h3 className="font-bold text-sm">Instagram</h3>
          <p className="text-xs text-green-400 mt-1">@rubel87598</p>
          <p className="text-[10px] text-gray-600 mt-1">Follow me</p>
        </a>
        <a href="https://x.com/MatiurR20638496" className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 text-center transition block">
          <img src="https://cdn.simpleicons.org/x/white" className="w-12 h-12 mx-auto mb-3" alt="X"/>
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
