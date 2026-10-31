import { profile } from '../data/profile';
import Contact from './Contact';
import { useState, useEffect } from 'react';
const green="text-green-400";
export function HomePage(props){
  const _nav = props.go || props.setPage || props.nav || props.navigate || props.onNavigate || function(){};
  const roles = ["MERN Full Stack Developer","React.js Specialist","Node.js + Express.js Developer","MongoDB Database Designer","REST API Architect"];
  const [ri,setRi] = useState(0);
  useEffect(()=>{ const id=setInterval(()=>setRi(v=>(v+1)%roles.length),2200); return ()=>clearInterval(id); },[]);
  const techs = ["React.js","Node.js","Express.js","MongoDB","JavaScript","TypeScript","Tailwind CSS","JWT Auth","Mongoose","Git & GitHub","Postman","Vercel","Render","Docker"];
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-14">
        <span className="flex items-center gap-2 text-[11px] font-bold bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> AVAILABLE FOR OPPORTUNITIES
        </span>
        <p className="text-gray-400 text-sm tracking-[0.25em] mb-2">HELLO, I'M</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">RUBEL <span className="text-green-400">ALI</span></h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300 h-8">I build <span className="text-green-400 font-bold">{roles[ri]}</span><span className="animate-pulse text-green-400 font-bold">|</span></p>
        <p className="text-[13px] md:text-[14px] text-gray-500 max-w-xl mt-4 leading-relaxed">Enterprise-grade MERN applications from 0% scratch - real OTP/JWT authentication, role-based dashboards and live deployments, crafted entirely on an Android phone.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button onClick={()=>_nav('about')} className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-full text-[14px] transition">About Me</button>
          <button onClick={()=>_nav('projects')} className="border border-gray-700 hover:border-green-500 px-8 py-3 rounded-full text-[14px] font-bold transition">My Works</button>
        </div>
<div className="flex justify-center gap-3 mt-6">
  <a href="https://github.com/matiur25580" target="_blank" rel="noreferrer" title="GitHub" className="w-11 h-11 rounded-full bg-[#111] border border-gray-800 hover:border-green-500 hover:scale-110 flex items-center justify-center transition"><img src="/social-github.svg" alt="GitHub" className="w-5 h-5"/></a>
  <a href="https://www.linkedin.com/in/matiur-rahaman-3a6086233" target="_blank" rel="noreferrer" title="LinkedIn" className="w-11 h-11 rounded-full bg-[#111] border border-gray-800 hover:border-green-500 hover:scale-110 flex items-center justify-center transition"><img src="/social-linkedin.svg" alt="LinkedIn" className="w-5 h-5"/></a>
  <a href="https://x.com/MatiurR20638496" target="_blank" rel="noreferrer" title="X" className="w-11 h-11 rounded-full bg-[#111] border border-gray-800 hover:border-green-500 hover:scale-110 flex items-center justify-center transition"><img src="/social-x.svg" alt="X" className="w-5 h-5"/></a>
  <a href="https://www.instagram.com/rubel87598" target="_blank" rel="noreferrer" title="Instagram" className="w-11 h-11 rounded-full bg-[#111] border border-gray-800 hover:border-green-500 hover:scale-110 flex items-center justify-center transition"><img src="/social-instagram.svg" alt="Instagram" className="w-5 h-5"/></a>
  <a href="mailto:rahamanmatiur397@gmail.com" target="_blank" rel="noreferrer" title="Email" className="w-11 h-11 rounded-full bg-[#111] border border-gray-800 hover:border-green-500 hover:scale-110 flex items-center justify-center transition"><img src="/social-gmail.svg" alt="Email" className="w-5 h-5"/></a>
</div>
        <div className="flex gap-8 mt-10">
          {[["6+","Projects"],["15+","Skills"],["3+","Years"]].map((s,k)=>(
            <div key={k} className="text-center">
              <p className="text-2xl font-extrabold text-green-400">{s[0]}</p>
              <p className="text-[11px] text-gray-500">{s[1]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-900 py-4 overflow-hidden">
        <div className="flex gap-3 w-max whitespace-nowrap" style={{animation:'marquee 25s linear infinite'}}>
          {techs.concat(techs).map((x,k)=>(
            <span key={k} className="text-[11px] font-bold bg-[#111] border border-gray-800 text-gray-400 px-4 py-2 rounded-full">{x}</span>
          ))}
        </div>
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
      <h3 className="text-center font-bold mt-10 mb-6 text-sm tracking-[0.2em] text-gray-400">MY JOURNEY</h3>
<div className="max-w-3xl mx-auto">
  {[
    ["2019","Started B.Tech in CSE","Joined Bengal Institute of Technology, Kolkata under MAKAUT - built my foundation in programming and computer science."],
    ["2023","Graduated + MERN Internship","Completed B.Tech and a 6-month MERN web development internship. Received a 35k/month MNC offer via campus placement."],
    ["2023 - 2025","Self-driven mastery","Mastered the full MERN stack by building real projects end-to-end - entirely on an Android phone with Termux and GitHub Codespaces."],
    ["2026","6 enterprise systems shipped","Built and deployed 6 production-grade MERN applications with real OTP/JWT auth, role-based dashboards and live Vercel + Render deployments."],
  ].map((j,i,arr)=>(
    <div key={i} className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-green-400 mt-2 shrink-0"></div>
        {i < arr.length-1 && <div className="w-[2px] flex-1 bg-gray-800"></div>}
      </div>
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 mb-4 flex-1">
        <span className="text-[10px] font-bold bg-green-500/15 text-green-400 px-3 py-1 rounded-full">{j[0]}</span>
        <h4 className="font-bold text-[14px] mt-2">{j[1]}</h4>
        <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">{j[2]}</p>
      </div>
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
      <h3 className="text-center font-bold mt-12 mb-4 text-sm tracking-[0.2em] text-gray-400">MY COLLEGE</h3>
      <div className="max-w-6xl mx-auto bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="p-6 flex items-center gap-4 border-b border-gray-800">
          <img src="/bitlogo.jpg" alt="BIT logo" className="w-16 h-16 rounded-full object-cover bg-white border border-gray-700" onError={(e)=>{e.target.style.display="none"}}/>
          <div>
            <h4 className="font-extrabold text-lg">Bengal Institute of Technology</h4>
            <p className="text-green-400 text-[13px] font-bold">B.Tech in Computer Science and Engineering (2019 - 2023)</p>
            <p className="text-gray-500 text-[12px]">Affiliated to MAKAUT, West Bengal</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
          <img src="/bit1.jpg" alt="BIT main gate" className="rounded-xl h-32 md:h-48 w-full object-cover" onError={(e)=>{e.target.style.display="none"}}/>
          <img src="/bit2.jpg" alt="BIT campus building" className="rounded-xl h-32 md:h-48 w-full object-cover" onError={(e)=>{e.target.style.display="none"}}/>
          <img src="/bit3.jpg" alt="BIT entrance" className="rounded-xl h-32 md:h-48 w-full object-cover" onError={(e)=>{e.target.style.display="none"}}/>
        </div>
        <div className="grid md:grid-cols-2 gap-4 p-6 pt-2">
          <div className="text-[13px] text-gray-300">
            <p className="mb-2"><span className="text-green-400 font-bold">▸ </span><b className="text-white">Courses:</b> CSE, IT, ECE, Biotech, MCA</p>
            <p className="mb-2"><span className="text-green-400 font-bold">▸ </span><b className="text-white">Campus:</b> Basanti Highway, Hadia, Kolkata - 700150</p>
            <p className="mb-2"><span className="text-green-400 font-bold">▸ </span><b className="text-white">University:</b> MAKAUT (Maulana Abul Kalam Azad University of Technology)</p>
            <a href="https://share.google/hmK0y0mu7h1hAGbw1" target="_blank" rel="noreferrer" className="inline-block mt-3 bg-green-500 hover:bg-green-400 text-black font-bold text-[13px] px-6 py-2 rounded-full">Get Directions</a>
          </div>
          <iframe title="BIT location map" src="https://maps.google.com/maps?q=Bengal%20Institute%20of%20Technology%20Basanti%20Highway%20Hadia%20Kolkata%20700150&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-56 rounded-xl border border-gray-800" loading="lazy"></iframe>
        </div>
      </div>
      <h3 className="text-center font-bold mt-12 mb-4 text-sm tracking-[0.2em] text-gray-400">MY UNIVERSITY</h3>
<div className="max-w-6xl mx-auto bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
  <div className="p-6 flex items-center gap-4 border-b border-gray-800">
    <img src="/unilogo.svg" alt="MAKAUT logo" className="w-16 h-16 rounded-full object-cover bg-white border border-gray-700" onError={(e)=>{e.target.style.display="none"}}/>
    <div>
      <h4 className="font-extrabold text-lg">Maulana Abul Kalam Azad University of Technology</h4>
      <p className="text-green-400 text-[13px] font-bold">Affiliating University of my B.Tech (2019 - 2023)</p>
      <p className="text-gray-500 text-[12px]">State Technological University, West Bengal</p>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-2 p-4"><img src="/uni1.jpg" alt="MAKAUT campus" className="rounded-xl h-32 md:h-48 w-full object-cover" onError={(e)=>{e.target.style.display="none"}}/><img src="/uni2.jpg" alt="MAKAUT building" className="rounded-xl h-32 md:h-48 w-full object-cover" onError={(e)=>{e.target.style.display="none"}}/><img src="/uni3.jpg" alt="MAKAUT campus view" className="rounded-xl h-32 md:h-48 w-full object-cover" onError={(e)=>{e.target.style.display="none"}}/></div>
  <div className="grid md:grid-cols-2 gap-4 p-6 pt-2">
    <div className="text-[13px] text-gray-300">
      <p className="mb-2"><span className="text-green-400 font-bold">▸ </span><b className="text-white">Established:</b> 2001 (formerly WBUT)</p>
      <p className="mb-2"><span className="text-green-400 font-bold">▸ </span><b className="text-white">Campus:</b> Salt Lake, Kolkata, West Bengal</p>
      <p className="mb-2"><span className="text-green-400 font-bold">▸ </span><b className="text-white">Affiliation:</b> 200+ engineering and management colleges across West Bengal</p>
      <a href="https://share.google/O2CMuA2b5zBNJuYFU" target="_blank" rel="noreferrer" className="inline-block mt-3 bg-green-500 hover:bg-green-400 text-black font-bold text-[13px] px-6 py-2 rounded-full">Get Directions</a>
    </div>
    <iframe title="map" src="https://maps.google.com/maps?q=Maulana%20Abul%20Kalam%20Azad%20University%20of%20Technology%20Salt%20Lake%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-56 rounded-xl border border-gray-800" loading="lazy"></iframe>
  </div>
</div>
<h3 className="text-center font-bold mt-12 mb-4 text-sm tracking-[0.2em] text-gray-400">LANGUAGES & INTERESTS</h3>
<div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
  <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
    <h4 className="font-bold text-[14px] text-green-400 mb-4">Languages I Speak</h4>
    {[["Bangla","Native","100%"],["Hindi","Fluent","90%"],["English","Professional","85%"]].map((l,k)=>(
      <div key={k} className="mb-4">
        <div className="flex justify-between text-[12px] mb-1"><span className="font-bold">{l[0]}</span><span className="text-gray-500">{l[1]}</span></div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full" style={{width:l[2]}}></div></div>
      </div>
    ))}
  </div>
  <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
    <h4 className="font-bold text-[14px] text-green-400 mb-4">Interests & Hobbies</h4>
    <div className="flex flex-wrap gap-2">
      {["Coding","Exploring New Tech","Morning Walk","Healthy Lifestyle","Open Source","UI Design","Problem Solving"].map((h,k)=>(
        <span key={k} className="text-[12px] bg-[#0a0a0a] border border-gray-800 hover:border-green-500 px-4 py-2 rounded-full text-gray-300 transition">{h}</span>
      ))}
    </div>
    <p className="text-[12px] text-gray-500 mt-4 leading-relaxed">I believe consistency beats intensity - small daily habits in code, health and learning compound into big results.</p>
  </div>
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

const projectDetails = [
  { overview: "Complete HR and payroll platform built from 0% scratch. Three role-based dashboards (Admin, HR, Employee), real 6-digit email OTP, JWT auth, automatic unique employee IDs, payroll processing and downloadable payslips. Deployed on Vercel + Render.",
    stack: ["React.js","Node.js","Express.js","Mon"+"goDB","Mongoose","JWT","Nodemailer","Tailwind CSS"],
    features: ["Admin/HR/Employee role-based dashboards","6-digit email OTP with 5-min expiry + resend timer","Auto unique employee ID on appointment","Payroll processing + one-click payslip download","6-box OTP UI on login/register/forgot-password","Dark/light theme on every page"],
    github: "https://github.com/matiur25580", live: "" },
  { overview: "Full hospital management ERP with five roles (Admin, Doctor, Nurse, Receptionist, Patient), 16 departments, Gmail OTP login, unique IDs, duty rosters, OT booking, blood bank, inventory alerts, ID cards and gate passes.",
    stack: ["React.js","Node.js","Express.js","Mon"+"goDB","JWT","Nodemailer","Tailwind CSS"],
    features: ["5 role dashboards, 16 departments, weekly OPD schedules","Duty roster with shift timings","OT booking with staffing + room numbers","Blood bank + inventory expiry alerts","Staff ID cards + visitor gate passes","Patient feedback, ambulance tracking, telemedicine OPD"],
    github: "https://github.com/matiur25580/hospital-management-system", live: "" },
  { overview: "Property management platform with rent tracking, lease and booking modules, maintenance requests, tenant reviews, commission tracking, PDF receipts and full audit logging.",
    stack: ["React.js","Node.js","Express.js","Mon"+"goDB","JWT","Tailwind CSS"],
    features: ["Rent tracking + lease/booking/maintenance modules","Tenant reviews + agent commission tracking","PDF receipts for every transaction","Full audit logging","Success messages for every action","Vercel frontend + Render backend"],
    github: "https://github.com/matiur25580/realestate-management-system", live: "" },
  { overview: "Enterprise logistics platform with six roles (Fleet Manager, Warehouse Manager, Driver, Client and more), trip and warehouse management, booking workflows, analytics dashboards and 6-box OTP auth. Built to a 95+ quality bar.",
    stack: ["React.js","Node.js","Express.js","Mon"+"goDB","JWT","Brevo","Tailwind CSS"],
    features: ["6 distinct role dashboards","Trip, vehicle, warehouse + booking management","Driver dashboards with live trip updates","Fleet performance analytics","6-box OTP professional auth pages","Auto-deploy pipeline to Vercel/Render"],
    github: "https://github.com/matiur25580/Enterprise-AI-Powered-Logistics-Fleet-Supply-Chain-Command-Center", live: "" },
  { overview: "Digital banking platform with AI-powered fraud detection, secure email-OTP + JWT auth, unique customer IDs and a colourful branded landing page. Backend live on Render.",
    stack: ["React.js","Node.js","Express.js","Mon"+"goDB","JWT","Nodemailer","Tailwind CSS"],
    features: ["AI-powered fraud detection on transactions","Unique customer IDs (role+name+DOB pattern)","Secure OTP registration + login","Colourful branded landing page","Same email for every role","Live backend API on Render"],
    github: "https://github.com/matiur25580/Enterprise-AI-Powered-Digital-Banking-Fraud-Detection-DevOps-Command-Center", live: "https://enterprise-ai-powered-digital-banking.onrender.com" },
  { overview: "Multi-vendor marketplace with seller ecosystem tooling, multi-role registration with unique ID on a dedicated success page, Brevo OTP verification and full buyer/seller workflows. Deployed on Render.",
    stack: ["React.js","Node.js","Express.js","Mon"+"goDB","JWT","Brevo","Tailwind CSS"],
    features: ["Multi-role registration, unique ID success page","Brevo email OTP verification","Buyer + seller dashboards","Same email for every role","Deployed live on Render"],
    github: "https://github.com/matiur25580/Enterprise-AI-Powered-Multi-Vendor-Marketplace-Seller-Ecosystem-Command-Center", live: "" }
];

export function ProjectsPage(){
  const [sel, setSel] = useState(null);
  const d = sel!==null ? projectDetails[sel] : null;
  return (
    <div className="bg-[#0a0a0a] text-white p-6 md:p-10 min-h-screen">
      <p className="text-[11px] tracking-[0.3em] text-gray-500">PORTFOLIO</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">MY PROJECTS ({profile.projectsCount})</h2>
      <p className="text-sm text-gray-500 mb-6">Click any project for full details.</p>
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {profile.projects.map((p,i)=>(
          <button key={i} onClick={()=>setSel(i)} className="text-left bg-[#111] border border-gray-800 hover:border-green-500 rounded-2xl overflow-hidden transition group">
            <div className="h-32 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-4xl font-extrabold text-green-500/20">{i+1}</div>
            <div className="p-4"><h3 className="font-bold text-[13px] group-hover:text-green-400 transition">{p.name}</h3><p className="text-[11px] text-green-400 mt-1">{p.tech}</p></div>
          </button>
        ))}
      </div>
      {d && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={()=>setSel(null)}>
          <div className="bg-[#111] border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative" onClick={(e)=>e.stopPropagation()}>
            <button onClick={()=>setSel(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0a0a] border border-gray-700 text-gray-300 font-bold">X</button>
            <p className="text-[11px] tracking-[0.3em] text-green-400 font-bold">PROJECT 0{sel+1}</p>
            <h3 className="text-2xl font-extrabold mt-2 pr-10">{profile.projects[sel].name}</h3>
            <p className="text-green-400 font-bold text-sm mt-1">{profile.projects[sel].tech}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{d.overview}</p>
            <h4 className="text-green-400 font-bold tracking-widest text-xs mt-6 mb-3">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">{d.stack.map((tc,k)=>(<span key={k} className="text-xs bg-[#0a0a0a] border border-gray-800 px-3 py-1.5 rounded-full text-gray-300">{tc}</span>))}</div>
            <h4 className="text-green-400 font-bold tracking-widest text-xs mt-6 mb-3">KEY FEATURES</h4>
            <ul className="space-y-2">{d.features.map((f,k)=>(<li key={k} className="text-gray-300 text-sm flex gap-2"><span className="text-green-500 font-bold">✓</span>{f}</li>))}</ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={d.github} target="_blank" rel="noreferrer" className="bg-green-500 text-black font-bold px-6 py-2.5 rounded-full text-sm">GitHub Repo</a>
              {d.live && (<a href={d.live} target="_blank" rel="noreferrer" className="bg-white text-black font-bold px-6 py-2.5 rounded-full text-sm">Live Demo</a>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
