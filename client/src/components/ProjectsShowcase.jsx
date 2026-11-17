import { useMemo, useState } from "react";

const makeGallery = (slug, cover) => [cover, ...Array.from({ length: 5 }, (_, index) => `/projects/${slug}-0${index + 2}.svg`)];

const projects = [
  { title:"HireFlow — ATS Recruitment System", category:"AI & Automation", summary:"Candidate and recruiter workspaces with private PDF resumes, job applications, hiring pipelines and Gemini-assisted resume-to-job analysis.", stack:["React","TypeScript","Node.js","Express","MongoDB","Gemini"], repo:"ats-recruitment-system", icon:"✦", image:"/projects/preview-hireflow.svg", gallery: makeGallery("hireflow","/projects/preview-hireflow.svg"), featured:true },
  { title:"Developer Portfolio", category:"Developer Tools", summary:"A personal developer portfolio with project storytelling, skills, experience and contact information.", stack:["React","Vite","Tailwind CSS","Node.js"], repo:"Developer-Portfolio", icon:"⌘", image:"/projects/preview-portfolio.svg", gallery: makeGallery("portfolio","/projects/preview-portfolio.svg")},
  { title:"TrustShield — Banking Fraud Detection", category:"FinTech", summary:"A banking-style platform with four role dashboards, OTP authentication, KYC, transfers, dispute workflows and illustrative fraud-risk monitoring.", stack:["MERN","JWT","OTP","Real-time"], repo:"Enterprise-AI-Powered-Digital-Banking-Fraud-Detection-DevOps-Command-Center", icon:"◈", image:"/projects/p5.png", gallery: makeGallery("trustshield","/projects/p5.png"), featured:true },
  { title:"FleetCommand — Logistics & Supply Chain", category:"Enterprise", summary:"Logistics operations for clients, fleet and warehouse managers, drivers and accountants, with live tracking, audit logs and a 7-day demand forecast.", stack:["React","Node.js","Express","MongoDB","Socket.IO"], repo:"Enterprise-AI-Powered-Logistics-Fleet-Supply-Chain-Command-Center", icon:"⇄", image:"/projects/p4.png", gallery: makeGallery("fleetcommand","/projects/p4.png"), featured:true },
  { title:"SmartGadget Lifestyle MegaStore", category:"E-commerce", summary:"MERN commerce project with catalog APIs, OTP authentication, seller-owned products and cash-on-delivery orders; payment and some AI-labelled widgets are not implemented.", stack:["MERN","JWT","OTP"], repo:"Enterprise-AI-Powered-SmartGadget-Lifestyle-MegaStore-Command-Center", icon:"▣", image:"/projects/preview-smartgadget.svg", gallery: makeGallery("smartgadget","/projects/preview-smartgadget.svg")},
  { title:"CityCare Hospital Management", category:"Healthcare", summary:"Hospital operations spanning patient registration, appointments, clinical workflows, pharmacy, lab, billing and role-specific dashboards.", stack:["MERN","JWT","OTP"], repo:"hospital-management-system", icon:"✚", image:"/projects/p2.png", gallery: makeGallery("citycare","/projects/p2.png"), featured:true },
  { title:"AI SaaS Generator", category:"AI & Automation", summary:"Draftline AI Writing Studio: Gemini-powered content generation with verified accounts, generation history, bookmarks and a transactional credit ledger.", stack:["React","Vite","Express","MongoDB","Gemini","Brevo"], repo:"ai-saas-generator", icon:"✧", image:"/projects/preview-draftline.svg", gallery: makeGallery("draftline","/projects/preview-draftline.svg")},
  { title:"Real Estate Management System", category:"Enterprise", summary:"A property-management platform covering rental, lease, booking and maintenance workflows.", stack:["React","Node.js","Express","MongoDB"], repo:"realestate-management-system", icon:"⌂", image:"/projects/p3.png", gallery: makeGallery("realestate","/projects/p3.png"), featured:true },
  { title:"Real-Time Chat & Collaboration Hub", category:"Developer Tools", summary:"A real-time chat app with registration/login, online-user presence, message history and Socket.IO messaging.", stack:["React","Node.js","Express","Socket.IO"], repo:"Enterprise-Real-Time-Chat-Collaboration-Hub", icon:"◌", image:"/projects/preview-chat.svg", gallery: makeGallery("chat","/projects/preview-chat.svg")},
  { title:"Trello Clone", category:"Developer Tools", summary:"A MERN project-management app for creating boards and organizing tasks with a React/Vite frontend and Express/MongoDB API.", stack:["Web Application","Task Management"], repo:"Trello-Clone", icon:"▤", image:"/projects/preview-trello.svg", gallery: makeGallery("trello","/projects/preview-trello.svg")},
  { title:"Online Food Ordering System", category:"E-commerce", summary:"A food-ordering website project. This was a team academic project; documented contribution: frontend UI work.", stack:["HTML","CSS","JavaScript","Bootstrap","PHP","MySQL"], repo:"Online-Food-Ordering-System-main", icon:"⌁", image:"/projects/preview-food-order.svg", gallery: makeGallery("foodorder","/projects/preview-food-order.svg")},
  { title:"Smart HR & Payroll Management", category:"Enterprise", summary:"A workforce platform covering employee self-service, attendance, leave and payroll workflows.", stack:["TypeScript","Preact","Express","MongoDB"], repo:"enterprise-hr-payroll-system", icon:"◫", image:"/projects/p1.webp", gallery: makeGallery("hrpayroll","/projects/p1.webp"), featured:true },
  { title:"Multi-Vendor Marketplace Seller Ecosystem", category:"E-commerce", summary:"A marketplace ecosystem project spanning buyer, seller, logistics and finance workflows.", stack:["MERN","MongoDB","Brevo OTP"], repo:"Enterprise-AI-Powered-Multi-Vendor-Marketplace-Seller-Ecosystem-Command-Center", icon:"▦", image:"/projects/p6.png", gallery: makeGallery("marketplace","/projects/p6.png"), featured:true },
  { title:"FinTech Smart Invoice & Expense System", category:"FinTech", summary:"A finance-operations project focused on invoices, expense tracking and supplier-payment workflows.", stack:["React","TypeScript","Node.js","Express","MongoDB","JWT"], repo:"FinTech-Smart-Invoice-Expense-Supplier-Payment-System", icon:"＄", image:"/projects/preview-fintech.svg", gallery: makeGallery("fintech","/projects/preview-fintech.svg")},
  { title:"Cyber Security Operations Command Center", category:"Cybersecurity", summary:"SOC/SIEM/SOAR/GRC platform foundation with identity backend work in progress; broader detection, incident and compliance capabilities are product direction, not all completed features.", stack:["React","Vite","TypeScript","Node.js","Express","MongoDB"], repo:"Enterprise-AI-Powered-Cyber-Security-Operations-Command-Center", icon:"⬡", image:"/projects/preview-cyber.svg", gallery: makeGallery("cyber","/projects/preview-cyber.svg")}
];

const filters = ["All","Featured","AI & Automation","Enterprise","FinTech","E-commerce","Healthcare","Developer Tools","Cybersecurity"];

export default function ProjectsShowcase(){
  const [active,setActive]=useState("All");
  const [query,setQuery]=useState("");
  const [selected,setSelected]=useState(null);
  const visible=useMemo(()=>projects.filter(p=>{
    const matchesCategory=active==="All" || (active==="Featured" ? p.featured : p.category===active);
    const q=query.trim().toLowerCase();
    const matchesQuery=!q || [p.title,p.summary,p.category,...p.stack].join(" ").toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  }),[active,query]);
  return <main className="min-h-screen bg-[#080b14] text-white px-4 py-10 sm:px-6 md:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[.32em] text-cyan-400">SELECTED WORK / 2026</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">Projects that solve <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">real problems.</span></h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">A collection of full-stack applications, enterprise-style workflows and AI-assisted product concepts. Explore the work and open each source repository for implementation details.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4">
          <p className="text-3xl font-black text-cyan-300">15</p><p className="text-xs text-slate-400">Projects showcased</p>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-4">
        <label className="relative block max-w-xl">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">⌕</span>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, technologies or categories…" className="w-full rounded-xl border border-white/10 bg-[#101625] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60" />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map(f=><button key={f} onClick={()=>setActive(f)} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${active===f?"border-cyan-300 bg-cyan-300 text-slate-950":"border-white/10 bg-white/[.04] text-slate-400 hover:border-cyan-300/50 hover:text-white"}`}>{f}</button>)}
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between text-xs text-slate-500"><span>Showing {visible.length} of 15 projects</span><span>Source code available on GitHub ↗</span></div>
      {visible.length===0 ? <div className="rounded-2xl border border-white/10 bg-white/[.03] p-10 text-center text-slate-400">No projects match that search. Try another keyword or category.</div> :
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((p,i)=><article key={p.repo} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101625] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_18px_55px_rgba(34,211,238,.08)]">
          <div className="relative h-48 overflow-hidden border-b border-white/10 bg-[#0b1220]">
            <div className="flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:thin] [scrollbar-color:#64748b_#0b1220]">
              {p.gallery.map((src,j)=><div key={src} className="relative h-full w-full shrink-0 snap-start">
                <img src={src} alt={`${p.title} gallery image ${j+1} of 6`} className="h-full w-full object-contain p-1" loading="lazy"/>
                <span className="absolute bottom-2 right-3 rounded-full border border-white/15 bg-black/70 px-2 py-1 text-[10px] font-bold text-white">{j+1} / 6</span>
              </div>)}
            </div>
            <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-100">{p.category}</span>
            <span className="pointer-events-none absolute bottom-2 left-3 rounded-full bg-black/65 px-2 py-1 text-[9px] font-semibold text-slate-300">Swipe / scroll ↔</span>
            <span className="pointer-events-none absolute right-3 top-3 text-[10px] font-bold tracking-widest text-white/70">{String(projects.indexOf(p)+1).padStart(2,"0")} / 15</span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h2 className="text-lg font-bold leading-snug group-hover:text-cyan-200">{p.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.stack.map(t=><span key={t} className="rounded-md border border-white/10 bg-white/[.04] px-2 py-1 text-[10px] text-slate-300">{t}</span>)}</div>
            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <button onClick={()=>setSelected(p)} className="text-xs font-bold text-cyan-300 transition hover:text-white">Explore details ↗</button>
              <a className="ml-auto text-xs font-bold text-slate-300 transition hover:text-white" href={`https://github.com/matiur25580/${p.repo}`} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </article>)}
      </div>}
    </div>
    {selected && <div role="dialog" aria-modal="true" aria-label={selected.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={()=>setSelected(null)}>
      <div className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#101625] p-6 shadow-2xl sm:p-8" onClick={e=>e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold tracking-[.3em] text-cyan-300">{selected.category.toUpperCase()}</p><h2 className="mt-2 text-2xl font-black">{selected.title}</h2></div><button onClick={()=>setSelected(null)} aria-label="Close project details" className="rounded-full border border-white/10 px-3 py-1 text-xl text-slate-400 hover:text-white">×</button></div>
        <p className="mt-5 text-sm leading-7 text-slate-300">{selected.summary}</p>
        <h3 className="mt-7 text-xs font-bold tracking-[.2em] text-cyan-300">TECHNOLOGY / FOCUS</h3>
        <div className="mt-3 flex flex-wrap gap-2">{selected.stack.map(t=><span key={t} className="rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-3 py-2 text-xs text-cyan-100">{t}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-3"><a href={`https://github.com/matiur25580/${selected.repo}`} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-300 px-5 py-3 text-xs font-extrabold text-slate-950 hover:bg-cyan-200">Open GitHub Repository ↗</a><button onClick={()=>setSelected(null)} className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-slate-300 hover:text-white">Close</button></div>
      </div>
    </div>}
  </main>;
}
