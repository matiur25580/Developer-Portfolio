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
        <button onClick={()=>setActive('Projects')} className="border border-green-500/50 px-6 py-2 rounded-full text-sm hover:bg-green-500/10">My Works</button>
      </div>
      <div className="flex gap-5 mt-6 text-sm text-gray-400">
        <a href="https://github.com/matiur25580" className="hover:text-green-400">【entity-GitHub¦canonical_name=GitHub】</a>
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
          </div>
          <p className="text-xs text-gray-500 mt-4">🏠 Home: {profile.addresses.homeTown}</p>
        </div>
      </div>
    </div>
  );
}
export function SkillsPage(){
  const proficient=["React.js","Node.js","Express.js","【entity-MongoDB¦canonical_name=MongoDB】","JavaScript","JWT","REST API"];
  const familiar=["Vue.js","Angular","PostgreSQL","Next.js","TypeScript","SQL"];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SKILLS</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY SKILLS</h2>
      <div className="max-w-5xl mx-auto">
        <h3 className="font-bold text-green-400 mb-4">⭐ Proficient</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[13px]">
          {proficient.map((sk,i)=><div key={i} className="bg-[#111] border border-green-500/40 rounded-xl p-4 text-center"><span className={green}>●</span> {sk}</div>)}
        </div>
        <h3 className="font-bold text-yellow-400 mt-8 mb-4">📚 Familiar / Working Knowledge</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[13px]">
          {familiar.map((sk,i)=><div key={i} className="bg-[#111] border border-gray-800 rounded-xl p-4 text-center"><span className="text-yellow-400">○</span> {sk}</div>)}
        </div>
      </div>
      <h3 className="text-center font-bold mt-10 mb-4 text-sm tracking-widest">🗣️ LANGUAGES</h3>
      <p className="text-center text-[13px] text-gray-400">Bangla (Native) | Hindi (Fluent) | English (Professional)</p>
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
  const s=[["MERN Development","Full-stack enterprise apps"],["API Development","JWT + OTP REST APIs"],["Deployment","Vercel + Render CI/CD"]];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SERVICES</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY SERVICES</h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {s.map((x,i)=><div key={i} className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-8 text-center"><div className="w-12 h-12 mx-auto bg-green-500 rounded-xl flex items-center justify-center">⚙️</div><h3 className="font-bold mt-4 text-sm">{x[0]}</h3><p className="text-xs text-gray-500 mt-2">{x[1]}</p></div>)}
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
          <a key={i} href={p.repo} className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl overflow-hidden block">
            <div className="h-32 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-4xl font-extrabold text-green-500/20">{i+1}</div>
            <div className="p-4"><h3 className="font-bold text-[13px]">{p.name}</h3><p className="text-[11px] text-green-400 mt-1">{p.tech}</p><p className="text-[11px] text-gray-500">{p.desc}</p></div>
          </a>
        ))}
      </div>
    </div>
  );
}
