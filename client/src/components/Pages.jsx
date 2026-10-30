import { profile } from '../data/profile';
import Contact from './Contact';
const green="text-green-400";

export function HomePage({setActive}){
  return (
    <div className="bg-black text-white min-h-[90vh] flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#ff0044_0%,transparent_40%,transparent_60%,#0044ff_100%)]"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold">RUBEL ALI</h1>
        <p className="text-xl mt-2 text-gray-300">I'm a passionate <span className={green}>MERN Full Stack Developer</span> from Kolkata</p>
        <div className="flex gap-4 mt-6">
          <button onClick={()=>setActive('About')} className="bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:bg-green-400">About Me</button>
          <button onClick={()=>setActive('Portfolio')} className="border border-green-500 px-6 py-2 rounded-full hover:bg-green-500/10">My Works</button>
        </div>
        <div className="flex gap-4 mt-8 text-gray-400">
          <a href="https://github.com/matiur25580" className="hover:text-green-400">GitHub</a>
          <a href="https://linkedin.com/in/matiur25580" className="hover:text-green-400">LinkedIn</a>
          <a href="https://x.com/matiur25580" className="hover:text-green-400">Twitter</a>
        </div>
      </div>
      <p className="absolute bottom-4 right-6 text-xs text-gray-600">Designed by Rubel Ali</p>
    </div>
  );
}

export function AboutPage(){
  const stats=[["6+","Enterprise Projects"],["14+","Tech Skills"],["3Y","Experience Level"],["3","Languages"]];
  return (
    <div className="bg-black text-white p-8 md:p-12 min-h-screen">
      <p className="text-xs tracking-widest text-gray-500">ABOUT <span className={green}>———</span></p>
      <h2 className="text-4xl font-extrabold mt-2 mb-8">LEARN MORE ABOUT ME</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-2"><div className="w-full h-64 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-6xl font-bold">RA</div></div>
        <div className="md:col-span-2">
          <h3 className={green+" text-xl font-bold"}>MERN Full Stack Developer</h3>
          <p className="text-gray-400 text-sm mt-1">Hello! Enterprise-grade developer here.</p>
          <div className="grid md:grid-cols-2 gap-3 mt-4 text-sm">
            <p>▶ <b>Degree:</b> B.Tech in CSE</p><p>▶ <b>College:</b> BIT Kolkata</p>
            <p>▶ <b>University:</b> MAKAUT</p><p>▶ <b>Passout:</b> 2023</p>
            <p>▶ <b>Website:</b> <span className={green}>developer-portfolio-client.vercel.app</span></p>
            <p>▶ <b>City:</b> Newtown, Kolkata</p>
            <p>▶ <b>Email:</b> rahamanmatiur397@gmail.com</p><p>▶ <b>Freelance:</b> <span className={green}>Available</span></p>
          </div>
          <p className="text-gray-400 text-sm mt-4">🏠 Home: {profile.addresses.homeTown}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-10">
        {stats.map((s,i)=><div key={i} className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center"><p className="text-3xl font-bold">{s[0]}</p><p className="text-xs text-gray-500 mt-1">{s[1]}</p></div>)}
      </div>
      <h3 className="text-xl font-bold mt-10 mb-4 text-center">🛠️ SKILLS</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto text-sm">
        {["MongoDB","Express.js","React.js","Node.js","JavaScript","Tailwind CSS","JWT / OTP","Vercel / Render"].map((sk,i)=><div key={i} className="bg-[#111] p-3 rounded-lg border border-gray-800"><span className={green}>◈</span> {sk}</div>)}
      </div>
    </div>
  );
}

export function ResumePage(){
  return (
    <div className="bg-black text-white p-8 md:p-12 min-h-screen">
      <p className="text-xs tracking-widest text-gray-500">RESUME ———</p>
      <h2 className="text-4xl font-extrabold mb-8">CHECK MY RESUME</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-4">Summary</h3>
          <div className="border-l-2 border-green-500 pl-4">
            <p className={green+" font-bold"}>RUBEL ALI</p>
            <p className="text-sm text-gray-400 mt-2">Enterprise-grade MERN developer. 6 large-scale production-ready systems built from 0% scratch on Android phone. Expert in real auth, role-based dashboards.</p>
            <p className="text-sm text-gray-500 mt-2">• Newtown, Kolkata, India<br/>• rahamanmatiur397@gmail.com</p>
          </div>
          <h3 className="text-2xl font-bold mt-8 mb-4">Education</h3>
          <div className="border-l-2 border-green-500 pl-4 space-y-4">
            <div><p className={green+" font-bold"}>B.TECH IN CSE</p><p className="text-xs bg-gray-800 inline px-2 py-1 rounded">2019 - 2023</p><p className="text-sm text-gray-400 mt-1">Bengal Institute of Technology, Kolkata (MAKAUT)</p></div>
            <div><p className={green+" font-bold"}>MERN INTERNSHIP</p><p className="text-xs bg-gray-800 inline px-2 py-1 rounded">2023 - 6 Months</p><p className="text-sm text-gray-400 mt-1">Full-stack web development training</p></div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
          <div className="border-l-2 border-green-500 pl-4 space-y-6">
            {profile.experience.map((e,i)=>(
              <div key={i}><p className={green+" font-bold text-sm"}>{e.title.toUpperCase()}</p><p className="text-xs bg-gray-800 inline px-2 py-1 rounded">{e.period}</p><p className="text-sm text-gray-400 mt-2">{e.desc}</p></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesPage(){
  const s=[["MERN Development","Full-stack enterprise apps with React, Node, MongoDB"],["API Development","Secure JWT + OTP, role-based REST APIs"],["Deployment","Vercel + Render CI/CD, Atlas setup"]];
  return (
    <div className="bg-black text-white p-8 md:p-12 min-h-screen">
      <p className="text-xs tracking-widest text-gray-500">SERVICES ———</p>
      <h2 className="text-4xl font-extrabold mb-8">MY SERVICES</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {s.map((x,i)=><div key={i} className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:border-green-500 transition"><div className="w-14 h-14 mx-auto bg-green-500 rounded-xl flex items-center justify-center text-2xl">⚙️</div><h3 className="font-bold mt-4">{x[0]}</h3><p className="text-sm text-gray-500 mt-2">{x[1]}</p></div>)}
      </div>
    </div>
  );
}

export function PortfolioPage(){
  return (
    <div className="bg-black text-white p-8 md:p-12 min-h-screen">
      <p className="text-xs tracking-widest text-gray-500">PORTFOLIO ———</p>
      <h2 className="text-4xl font-extrabold mb-6">MY WORKS</h2>
      <div className="flex gap-2 justify-center mb-8 text-xs">
        {["ALL","MERN","API","WEB"].map((f,i)=><button key={f} className={`${i===0?'bg-green-500 text-black':'bg-gray-800'} px-4 py-1 rounded-full font-bold`}>{f}</button>)}
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {profile.projects.map((p,i)=>(
          <a key={i} href={p.repo} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500 transition group">
            <div className="h-40 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-4xl font-extrabold text-green-500/30 group-hover:text-green-400">{i+1}</div>
            <div className="p-4"><h3 className="font-bold text-sm">{p.name}</h3><p className="text-xs text-green-400 mt-1">{p.tech}</p></div>
          </a>
        ))}
      </div>
    </div>
  );
}
