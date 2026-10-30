import { profile } from '../data/profile';
import Contact from './Contact';
const green="text-green-400";
export function HomePage({setActive}){
  return (
    <div className="bg-black text-white min-h-[85vh] flex flex-col justify-center px-6 md:px-16">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">RUBEL ALI</h1>
      <p className="text-lg mt-3 text-gray-300">I am a passionate <span className={green+" font-semibold"}>MERN Full Stack Developer</span> from Kolkata</p>
      <div className="flex gap-3 mt-6">
        <button onClick={()=>setActive('About')} className="bg-green-500 text-black px-6 py-2 rounded-full font-bold text-sm">About Me</button>
        <button onClick={()=>setActive('Projects')} className="border border-green-500/50 px-6 py-2 rounded-full text-sm">My Works</button>
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
          <p className="text-[13px] text-gray-300 mt-4">B.Tech CSE (2019-2023), BIT Kolkata (MAKAUT). Newtown, Kolkata.</p>
        </div>
      </div>
    </div>
  );
}
export function SkillsPage(){
  const languages=["JavaScript","React.js","Node.js","Express.js","Tailwind CSS"];
  const tools=["Mon"+"goDB","JWT","REST API","Git & GitHub","Postman"];
  const familiar=["Vue.js","Angular","PostgreSQL","Next.js","TypeScript","SQL"];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SKILLS</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY SKILLS</h2>
      <div className="max-w-5xl mx-auto">
        <h3 className="font-bold text-green-400 mb-4">⭐ Proficient</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-2 tracking-widest">LANGUAGES</p>
            <div className="space-y-3">
              {languages.map((sk,i)=>(<div key={i} className="bg-[#111] border border-green-500/40 rounded-xl p-4 text-center text-[13px]"><span className={green}>●</span> {sk}</div>))}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2 tracking-widest">TOOLS</p>
            <div className="space-y-3">
              {tools.map((sk,i)=>(<div key={i} className="bg-[#111] border border-green-500/40 rounded-xl p-4 text-center text-[13px]"><span className={green}>●</span> {sk}</div>))}
            </div>
          </div>
        </div>
        <h3 className="font-bold text-yellow-400 mt-8 mb-4">📚 Familiar / Working Knowledge</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[13px]">
          {familiar.map((sk,i)=>(<div key={i} className="bg-[#111] border border-gray-800 rounded-xl p-4 text-center"><span className="text-yellow-400">○</span> {sk}</div>))}
        </div>
      </div>
    </div>
  );
}
export function ExperiencePage(){
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">EXPERIENCE</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY EXPERIENCE</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {profile.experience.map((e,i)=>(
          <div key={i} className="bg-[#111] border border-gray-800 rounded-2xl p-6 border-l-4 border-l-green-500">
            <p className={green+" font-bold text-sm"}>{e.title}</p>
            <span className="text-[11px] bg-gray-800 px-2 py-1 rounded inline-block mt-2">{e.period}</span>
            <p className="text-[13px] text-gray-400 mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function ServicesPage(){
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SERVICES</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY SERVICES</h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {[["MERN Development","Full-stack apps"],["API Development","JWT + OTP APIs"],["Deployment","Vercel + Render"]].map((x,i)=>(<div key={i} className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center"><h3 className="font-bold text-sm">{x[0]}</h3><p className="text-xs text-gray-500 mt-2">{x[1]}</p></div>))}
      </div>
    </div>
  );
}
export function ProjectsPage(){
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">PORTFOLIO</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">MY PROJECTS ({profile.projectsCount})</h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {profile.projects.map((p,i)=>(
          <a key={i} href={p.repo} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden block">
            <div className="h-32 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-4xl font-extrabold text-green-500/20">{i+1}</div>
            <div className="p-4"><h3 className="font-bold text-[13px]">{p.name}</h3><p className="text-[11px] text-green-400 mt-1">{p.tech}</p></div>
          </a>
        ))}
      </div>
    </div>
  );
}
