import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default function Resume(){
  const cardRef = useRef(null);
  const savePDF = async () => {
    const el = cardRef.current;
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2 });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const imgW = pageW;
    const imgH = (canvas.height * imgW) / canvas.width;
    let pos = 0;
    pdf.addImage(img, "PNG", 0, 0, imgW, imgH);
    pos += pageH;
    while (imgH > pos) {
      pdf.addPage();
      pdf.addImage(img, "PNG", 0, -pos, imgW, imgH);
      pos += pageH;
    }
    pdf.save("Rubel_Ali_Resume.pdf");
  };
  const skills=["React.js","Node.js","Express.js","【entity-MongoDB¦canonical_name=MongoDB】","JavaScript","TypeScript","Tailwind CSS","JWT Auth","Mongoose","Git & GitHub","Postman","Vercel","Render","Docker","REST APIs"];
  const projects=[
    ["Smart HR & Payroll Management System","Enterprise HRMS with Admin, HR and Employee roles. Real 6-digit OTP + JWT authentication, payroll processing, payslip download and role-based dashboards."],
    ["CityCare Hospital Management System","Hospital ERP with 5 roles and 16 departments. Duty roster, OT booking, blood bank, inventory alerts and live Vercel + Render deployment."],
    ["RealEstate Management System","Property management platform with rent tracking, lease and booking modules, maintenance requests, PDF receipts and audit logging."],
    ["FleetCommand Logistics System","AI-powered fleet and supply-chain command center with 6 roles, trip and warehouse management, driver dashboards and analytics."],
    ["TrustShield Bank","Digital banking platform with AI-powered fraud detection, secure OTP/JWT auth and unique ID system, deployed live on Render."],
    ["Multi-Vendor Marketplace","Seller ecosystem command center with multi-role registration, Brevo OTP verification and full marketplace workflows."],
  ];
  const exp=[
    ["MERN Web Development Intern","2023","Completed a 6-month MERN stack internship building full-stack web applications with React, Node.js, Express and 【entity-MongoDB¦canonical_name=MongoDB】."],
    ["MNC Offer via Campus Placement","2023","Received a 35,000/month MNC offer through college placement."],
  ];
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen px-6 py-10">
      <div ref={cardRef} className="max-w-3xl mx-auto bg-[#111] border border-gray-800 rounded-2xl p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold">RUBEL ALI</h1>
            <p className="text-green-400 font-bold mt-1">MERN Full Stack Developer</p>
            <p className="text-gray-400 text-sm mt-2">Newtown, Kolkata, West Bengal, India</p>
          </div>
          <div className="print:hidden flex gap-3">
            <button onClick={()=>window.print()} className="bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2 rounded-full text-sm transition">Print</button>
            <button onClick={savePDF} className="bg-white hover:bg-gray-200 text-black font-bold px-5 py-2 rounded-full text-sm transition">Save PDF</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-sm">
          <a href="mailto:rahamanmatiur397@gmail.com" className="text-gray-300 hover:text-green-400">rahamanmatiur397@gmail.com</a>
          <a href="https://github.com/matiur25580" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-green-400">github.com/matiur25580</a>
          <a href="https://www.linkedin.com/in/matiur-rahaman-3a6086233" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-green-400">LinkedIn</a>
        </div>
        <h2 className="text-green-400 font-bold tracking-widest text-sm mt-8 mb-3">SUMMARY</h2>
        <p className="text-gray-300 text-sm leading-relaxed">MERN Full Stack Developer who builds enterprise-grade, production-ready web applications from 0% scratch, including 6 large-scale systems with real OTP/JWT authentication, role-based dashboards and live deployments. Known for extreme consistency: the entire portfolio was crafted on an Android phone using Termux and GitHub Codespaces.</p>
        <h2 className="text-green-400 font-bold tracking-widest text-sm mt-8 mb-3">TECHNICAL SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s,k)=>(<span key={k} className="text-xs bg-[#0a0a0a] border border-gray-800 px-3 py-1.5 rounded-full text-gray-300">{s}</span>))}
        </div>
        <h2 className="text-green-400 font-bold tracking-widest text-sm mt-8 mb-3">PROJECTS</h2>
        <div className="space-y-4">
          {projects.map((pr,k)=>(
            <div key={k}>
              <p className="font-bold text-sm">{pr[0]}</p>
              <p className="text-gray-400 text-[13px] mt-1 leading-relaxed">{pr[1]}</p>
            </div>
          ))}
        </div>
        <h2 className="text-green-400 font-bold tracking-widest text-sm mt-8 mb-3">EXPERIENCE</h2>
        <div className="space-y-4">
          {exp.map((e,k)=>(
            <div key={k} className="flex justify-between gap-4">
              <div>
                <p className="font-bold text-sm">{e[0]}</p>
                <p className="text-gray-400 text-[13px] mt-1 leading-relaxed">{e[2]}</p>
              </div>
              <span className="text-gray-500 text-xs whitespace-nowrap">{e[1]}</span>
            </div>
          ))}
        </div>
        <h2 className="text-green-400 font-bold tracking-widest text-sm mt-8 mb-3">EDUCATION</h2>
        <div className="flex justify-between gap-4">
          <div>
            <p className="font-bold text-sm">B.Tech in Computer Science and Engineering</p>
            <p className="text-gray-400 text-[13px] mt-1">Bengal Institute of Technology, Kolkata, affiliated to MAKAUT, West Bengal</p>
          </div>
          <span className="text-gray-500 text-xs whitespace-nowrap">2019 - 2023</span>
        </div>
        <h2 className="text-green-400 font-bold tracking-widest text-sm mt-8 mb-3">LANGUAGES</h2>
        <p className="text-gray-300 text-sm">Bangla (Native) · Hindi (Fluent) · English (Professional)</p>
      </div>
    </div>
  );
}
