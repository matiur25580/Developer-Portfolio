import { profile } from '../data/profile';
import Contact from './Contact';
const green="text-green-400";
export function HomePage({setActive}){
  return (
    <div className="bg-black text-white min-h-[85vh] flex flex-col justify-center px-6 md:px-16">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">RUBEL ALI</h1>
      <p className="text-lg mt-3 text-gray-300">I'm a passionate <span className={green+" font-semibold"}>MERN Full Stack Developer</span> from Kolkata</p>
      <div className="flex gap-3 mt-6">
        <button onClick={()=>setActive('About')} className="bg-green-500 text-black px-6 py-2 rounded-full font-bold text-sm">About Me</button>
        <button onClick={()=>setActive('Portfolio')} className="border border-green-500/50 px-6 py-2 rounded-full text-sm hover:bg-green-500/10">My Works</button>
      </div>
      <div className="flex gap-5 mt-6 text-sm text-gray-400">
        <a href="https://github.com/matiur25580" className="hover:text-green-400">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-green-400">LinkedIn</a>
        <a href="https://x.com" className="hover:text-green-400">Twitter</a>
      </div>
    </div>
  );
}
export function AboutPage(){
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">ABOUT</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-1 mb-8">LEARN MORE ABOUT ME</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl h-72 flex items-center justify-center text-5xl font-extrabold text-white">RA</div>
        <div className="md:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h3 className={green+" font-bold"}>MERN Full Stack Developer</h3>
          <div className="grid md:grid-cols-2 gap-2 mt-4 text-[13px] text-gray-300">
            <p><span className={green}>▸</span> <b>Degree:</b> B.Tech in CSE</p>
            <p><span className={green}>▸</span> <b>College:</b> BIT Kolkata</p>
            <p><span className={green}>▸</span> <b>University:</b> MAKAUT</p>
            <p><span className={green}>▸</span> <b>Passout:</b> 2023</p>
            <p><span className={green}>▸</span> <b>City:</b> Newtown, Kolkata</p>
            <p><span className={green}>▸</span> <b>Email:</b> {profile.email}</p>
            <p><span className={green}>▸</span> <b>Freelance:</b> Available</p>
            <p><span className={green}>▸</span> <b>Languages:</b> Bangla, Hindi, English</p>
          </div>
          <p className="text-xs text-gray-500 mt-4">🏠 Home: {profile.addresses.homeTown}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mt-6">
        {[["6+","Enterprise Projects"],["14+","Tech Skills"],["3Y","Experience Level"],["3","Languages"]].map((s,i)=><div key={i} className="bg-[#111] border border-gray-800 rounded-xl p-5 text-center"><p className="text-2xl font-bold">{s[0]}</p><p className="text-[11px] text-gray-500 mt-1">{s[1]}</p></div>)}
      </div>
      <h3 className="text-center font-bold mt-8 mb-4 tracking-widest text-sm">🛠️ SKILLS</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto text-[13px]">
        {["MongoDB","Express.js","React.js","Node.js","JavaScript","Tailwind CSS","JWT / OTP","Vercel / Render"].map((sk,i)=><div key={i} className="bg-[#111] border border-gray-800 rounded-lg p-3"><span className={green}>●</span> {sk}</div>)}
      </div>
    </div>
  );
}
export function ResumePage(){
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">RESUME</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">CHECK MY RESUME</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-3">Summary</h3>
          <div className="border-l-2 border-green-500 pl-4">
            <p className={green+" font-bold text-sm"}>RUBEL ALI</p>
            <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">{profile.about} Expert in real auth, role-based dashboards.</p>
            <p className="text-xs text-gray-500 mt-2">• Newtown, Kolkata, India<br/>• {profile.email}</p>
          </div>
          <h3 className="text-xl font-bold mt-6 mb-3">Education</h3>
          <div className="border-l-2 border-green-500 pl-4 space-y-4">
            <div><p className={green+" font-bold text-sm"}>B.TECH IN CSE</p><span className="text-[11px] bg-gray-800 px-2 py-1 rounded">2019 - 2023</span><p className="text-[13px] text-gray-400 mt-1">Bengal Institute of Technology, Kolkata (MAKAUT)</p></div>
            <div><p className={green+" font-bold text-sm"}>MERN INTERNSHIP</p><span className="text-[11px] bg-gray-800 px-2 py-1 rounded">2023 - 6 Months</span><p className="text-[13px] text-gray-400 mt-1">Full-stack web development training</p></div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Professional Experience</h3>
          <div className="border-l-2 border-green-500 pl-4 space-y-5">
            {profile.experience.map((e,i)=><div key={i}><p className={green+" font-bold text-[13px]"}>{e.title}</p><span className="text-[11px] bg-gray-800 px-2 py-1 rounded">{e.period}</span><p className="text-[13px] text-gray-400 mt-2 leading-relaxed">{e.desc}</p></div>)}
          </div>
          <h3 className="text-xl font-bold mt-6 mb-3">Knowledge</h3>
          <p className="text-[13px] text-gray-400">{profile.knowledge.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
export function ServicesPage(){
  const s=[["MERN Development","Full-stack enterprise apps with React, Node, MongoDB"],["API Development","Secure JWT + OTP, role-based REST APIs"],["Deployment","Vercel + Render CI/CD, Atlas setup"]];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SERVICES</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY SERVICES</h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {s.map((x,i)=><div key={i} className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-8 text-center transition"><div className="w-12 h-12 mx-auto bg-green-500 rounded-xl flex items-center justify-center text-xl">⚙️</div><h3 className="font-bold mt-4 text-sm">{x[0]}</h3><p className="text-xs text-gray-500 mt-2">{x[1]}</p></div>)}
      </div>
    </div>
  );
}
export function PortfolioPage(){
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">PORTFOLIO</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">MY WORKS</h2>
      <div className="flex gap-2 justify-center mb-6 text-[11px] font-bold">
        {["ALL","MERN","API","WEB"].map((f,i)=><span key={f} className={`${i===0?'bg-green-500 text-black':'bg-gray-800 text-gray-300'} px-4 py-1 rounded-full`}>{f}</span>)}
      </div>
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {profile.projects.map((p,i)=>(
          <a key={i} href={p.repo} className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl overflow-hidden transition block">
            <div className="h-36 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-5xl font-extrabold text-green-500/20">{i+1}</div>
            <div className="p-4"><h3 className="font-bold text-[13px] leading-snug">{p.name}</h3><p className="text-[11px] text-green-400 mt-1">{p.tech}</p><p className="text-[11px] text-gray-500">{p.desc}</p></div>
          </a>
        ))}
      </div>
    </div>
  );
}
