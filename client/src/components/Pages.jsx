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
  const info=[
    ["Degree","B.Tech in CSE"],
    ["College","BIT Kolkata"],
    ["University","MAKAUT"],
    ["Passout Year","2023"],
    ["City","Newtown, Kolkata"],
    ["Email","rahamanmatiur397@gmail.com"],
    ["Freelance","Available"],
    ["Languages","Bangla, Hindi, English"],
  ];
  const stats=[
    ["6+","Enterprise Projects"],
    ["15+","Tech Skills"],
    ["3+","Years Hands-on"],
    ["100%","Responsive UI"],
  ];
  const points=[
    ["End-to-end MERN builds","6 production-grade apps from 0% scratch - React frontend, Node + Express backend, MongoDB Atlas."],
    ["Real authentication","6-digit OTP (Brevo/Gmail), JWT, bcrypt hashing, role-based dashboards. No demo logins."],
    ["Live deployments","Vercel (frontend) + Render (backend) CI/CD with 【entity-GitHub¦canonical_name=GitHub】 workflow and Postman-tested APIs."],
    ["Enterprise UI/UX","Tailwind CSS, dark/light themes, fully responsive dashboards for Admin, HR, Doctor, Driver and more."],
  ];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">ABOUT</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-1 mb-8">LEARN MORE ABOUT ME</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl min-h-[280px] flex flex-col items-center justify-center text-white p-6">
          <p className="text-5xl font-extrabold">RA</p>
          <p className="text-sm font-bold mt-3">Rubel Ali</p>
          <p className="text-[11px] opacity-80 mt-1 text-center">MERN Full Stack Developer<br/>Kolkata, India</p>
          <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full mt-4 font-bold">Open to Work</span>
        </div>
        <div className="md:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-green-400 font-bold text-lg">MERN Full Stack Developer</h3>
          <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
            I am Rubel Ali, a MERN Full Stack Developer from Kolkata, India. I build enterprise-grade,
            production-ready web applications from 0% scratch - entirely on an Android phone using
            Termux and 【entity-GitHub¦canonical_name=GitHub】 Codespaces.
          </p>
          <p className="text-[13px] text-gray-300 mt-2 leading-relaxed">
            My 6 large-scale systems - Smart HR and Payroll, CityCare Hospital, RealEstate, FleetCommand
            Logistics, TrustShield Bank and Multi-Vendor Marketplace - feature real OTP/JWT authentication,
            role-based dashboards and live Vercel + Render deployments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-5 text-[13px]">
            {info.map((x,i)=>(
              <p key={i} className="text-gray-300 break-all"><span className="text-green-400 font-bold">▸ </span><b className="text-white">{x[0]}:</b> {x[1]}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mt-6">
        {stats.map((s,i)=>(
          <div key={i} className="bg-[#111] border border-gray-800 rounded-xl p-5 text-center">
            <p className="text-2xl font-extrabold text-green-400">{s[0]}</p>
            <p className="text-[11px] text-gray-500 mt-1">{s[1]}</p>
          </div>
        ))}
      </div>
      <h3 className="text-center font-bold mt-10 mb-4 text-sm tracking-[0.2em] text-gray-400">WHAT I DO</h3>
      <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {points.map((x,i)=>(
          <div key={i} className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-5 transition">
            <h4 className="font-bold text-[14px] text-green-400">{x[0]}</h4>
            <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">{x[1]}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-[11px] text-gray-600 mt-8 px-4">Hometown: Vill Surangapur, P.O Samashpur, P.S Hemtabad, Dist Uttar Dinajpur (Raiganj), West Bengal</p>
    </div>
  );
}

export function SkillsPage(){
  const groups=[
    ["LANGUAGE",["HTML","CSS","JavaScript","TypeScript"]],
    ["FRONTEND",["React.js","Tailwind CSS"]],
    ["BACKEND",["Node.js","Express.js","REST API","JWT"]],
    ["DATABASE",["Mon"+"goDB","Mongoose"]],
    ["TOOLS & DEVOPS",["Git & GitHub","Postman","Vercel","Render","GitHub Actions","Docker"]],
  ];
  const familiar=["Vue.js","Angular","PostgreSQL","Next.js","SQL","Prisma"];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SKILLS</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">MY SKILLS</h2>
      <div className="max-w-4xl mx-auto">
        <h3 className="font-bold text-green-400 mb-4">Proficient</h3>
        {groups.map((g,gi)=>(
          <div key={gi} className="mb-5">
            <p className="text-[11px] tracking-[0.2em] text-gray-400 mb-3 font-bold">{g[0]}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {g[1].map((sk,i)=>(<div key={i} className="bg-[#111] border border-green-500/30 rounded-xl px-3 py-3.5 text-center text-[13px]"><span className="text-green-400 font-bold">- </span>{sk}</div>))}
            </div>
          </div>
        ))}
        <h3 className="font-bold text-yellow-400 mt-8 mb-4">Familiar / Working Knowledge</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[13px]">
          {familiar.map((sk,i)=>(<div key={i} className="bg-[#111] border border-gray-800 rounded-xl px-3 py-3.5 text-center"><span className="text-yellow-400 font-bold">- </span>{sk}</div>))}
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
  const s=[
    ["R","bg-green-500","🚀 MERN Full-Stack Development","Complete enterprise web apps from scratch. React + Vite frontend, Node + Express backend. 6 production projects delivered.",["React","Node.js","Express","MongoDB"]],
    ["A","bg-blue-500","🔌 REST API Development","Secure scalable APIs. JWT + 6-digit OTP auth, role-based access, Postman tested.",["Express","JWT","OTP","Postman"]],
    ["S","bg-purple-500","🛡️ Authentication & Security","Real auth systems, no demo logins. Brevo/Gmail OTP, bcrypt hashing, protected routes.",["JWT","Bcrypt","Brevo"]],
    ["D","bg-orange-500","🗄️ Database Design","Efficient NoSQL modeling. Atlas + Mongoose, schema design, audit logging.",["MongoDB","Mongoose","Atlas"]],
    ["C","bg-cyan-500","☁️ Deployment & DevOps","Live production deploys. Vercel + Render CI/CD, GitHub workflow, Atlas setup.",["Vercel","Render","GitHub"]],
    ["U","bg-pink-500","🎨 Responsive UI/UX","Modern mobile-first design. Tailwind CSS, dark/light theme, fully responsive.",["Tailwind","Vite","Figma"]],
  ];
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">SERVICES</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">MY SERVICES</h2>
      <p className="text-sm text-gray-500 mb-8 max-w-2xl">As a MERN Full Stack Developer, I deliver end-to-end production-ready solutions.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {s.map((x,i)=>(
          <div key={i} className="bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl p-6 transition">
            <div className={"w-12 h-12 "+x[1]+" rounded-xl flex items-center justify-center text-xl font-bold text-white mb-4"}>{x[0]}</div>
            <h3 className="font-bold text-[15px]">{x[2]}</h3>
            <p className="text-[12px] text-gray-500 mt-3 leading-relaxed">{x[3]}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {x[4].map((tag,ti)=>(<span key={ti} className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full font-semibold">{tag}</span>))}
            </div>
          </div>
        ))}
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
