import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Smart HR & Payroll Management System",
    tagline: "Enterprise HRMS for IT offices",
    overview: "A complete human-resource and payroll platform built from 0% scratch with three role-based dashboards (Admin, HR, Employee), real 6-digit email OTP verification, JWT authentication, automatic unique employee ID generation, payroll processing and downloadable payslips, deployed live on Vercel + Render.",
    tech: ["React.js", "Node.js", "Express.js", "【entity-MongoDB¦canonical_name=MongoDB】", "Mongoose", "JWT", "Nodemailer", "Tailwind CSS"],
    features: [
      "Role-based dashboards for Admin, HR and Employee",
      "Real 6-digit email OTP with 5-minute expiry and resend timer",
      "Automatic unique employee ID on appointment (supports duplicate names)",
      "Payroll processing with one-click payslip download",
      "Login, registration and forgot-password with 6-box OTP UI",
      "Dark/light theme toggle across every page"
    ],
    github: "https://github.com/matiur25580",
    live: ""
  },
  {
    id: 2,
    title: "CityCare Hospital Management System",
    tagline: "Hospital ERP with 16 departments",
    overview: "A full hospital management ERP with five roles (Admin, Doctor, Nurse, Receptionist, Patient), 16 seeded departments, Gmail OTP login, unique IDs in RNSDDMMYYYY format, duty rosters with shift timings, OT booking, blood bank, inventory expiry alerts, ID card generation and visitor gate passes.",
    tech: ["React.js", "Node.js", "Express.js", "【entity-MongoDB¦canonical_name=MongoDB】", "JWT", "Nodemailer", "Tailwind CSS"],
    features: [
      "5 role-based dashboards, 16 departments with weekly OPD schedules",
      "Duty roster with morning/evening/night shift durations",
      "OT booking with surgical staffing and room numbers",
      "Blood bank, inventory expiry alerts and purchase orders",
      "Staff ID card generation and visitor/gate pass system",
      "Patient feedback ratings, ambulance tracking and telemedicine OPD"
    ],
    github: "https://github.com/matiur25580/hospital-management-system",
    live: ""
  },
  {
    id: 3,
    title: "RealEstate Management System",
    tagline: "Property, rent and lease platform",
    overview: "A property management platform with rent tracking, lease and booking modules, maintenance requests, tenant reviews, commission tracking, PDF receipts and full audit logging, with live date/time and theme toggle on every dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "【entity-MongoDB¦canonical_name=MongoDB】", "JWT", "Tailwind CSS"],
    features: [
      "Rent tracking with lease, booking and maintenance modules",
      "Tenant reviews and agent commission tracking",
      "PDF receipts for every transaction",
      "Audit logging of all actions",
      "Success messages for every action across all pages",
      "Deployed on Vercel (frontend) + Render (backend)"
    ],
    github: "https://github.com/matiur25580/realestate-management-system",
    live: ""
  },
  {
    id: 4,
    title: "FleetCommand Logistics System",
    tagline: "AI-powered fleet and supply-chain command center",
    overview: "An enterprise logistics platform with six roles (including Fleet Manager, Warehouse Manager, Driver and Client), trip and warehouse management, booking workflows, analytics dashboards and 6-box OTP authentication, built to a 95+ quality bar.",
    tech: ["React.js", "Node.js", "Express.js", "【entity-MongoDB¦canonical_name=MongoDB】", "JWT", "Brevo", "Tailwind CSS"],
    features: [
      "6 distinct role dashboards, each showing its role name prominently",
      "Trip, vehicle, warehouse and booking management",
      "Driver dashboards with live trip updates",
      "Analytics with fleet performance insights",
      "6-box OTP inputs with professional auth pages",
      "Auto-deploy pipeline to Vercel and Render"
    ],
    github: "https://github.com/matiur25580/Enterprise-AI-Powered-Logistics-Fleet-Supply-Chain-Command-Center",
    live: ""
  },
  {
    id: 5,
    title: "TrustShield Bank",
    tagline: "Digital banking with AI fraud detection",
    overview: "A digital banking platform with AI-powered fraud detection, secure email-OTP and JWT authentication, unique customer IDs in XYZDDMMYYYY format and a colourful branded landing page, with the backend live on Render.",
    tech: ["React.js", "Node.js", "Express.js", "【entity-MongoDB¦canonical_name=MongoDB】", "JWT", "Nodemailer", "Tailwind CSS"],
    features: [
      "AI-powered fraud detection on transactions",
      "Unique customer IDs (role + name + DOB pattern)",
      "Secure OTP-based registration and login",
      "Colourful branded landing page with login flow",
      "Same email can register for every role",
      "Live backend API on Render"
    ],
    github: "https://github.com/matiur25580/Enterprise-AI-Powered-Digital-Banking-Fraud-Detection-DevOps-Command-Center",
    live: "https://enterprise-ai-powered-digital-banking.onrender.com"
  },
  {
    id: 6,
    title: "Multi-Vendor Marketplace",
    tagline: "AI-powered seller ecosystem command center",
    overview: "A multi-vendor marketplace with seller ecosystem tooling, multi-role registration with the unique ID shown on a dedicated success page, Brevo OTP verification and full buyer/seller workflows, deployed on Render.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Brevo", "Tailwind CSS"],
    features: [
      "Multi-role registration with unique ID on dedicated success page",
      "Brevo email OTP verification",
      "Buyer and seller dashboards with full workflows",
      "Same email can register for every role",
      "Deployed live on Render"
    ],
    github: "https://github.com/matiur25580/Enterprise-AI-Powered-Multi-Vendor-Marketplace-Seller-Ecosystem-Command-Center",
    live: ""
  }
];

export default function Projects(){
  const [selected, setSelected] = useState(null);
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-green-400 font-bold tracking-widest text-sm">MY WORK</h2>
        <h1 className="text-3xl font-extrabold mt-2">Projects</h1>
        <p className="text-gray-400 text-sm mt-2">6 enterprise-grade MERN applications, each built from 0% scratch. Click any project for full details.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((pr) => (
            <button key={pr.id} onClick={() => setSelected(pr)} className="text-left bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-green-500 hover:-translate-y-1 transition group">
              <span className="text-green-500 font-extrabold text-sm">0{pr.id}</span>
              <h3 className="text-lg font-bold mt-2 leading-snug group-hover:text-green-400 transition">{pr.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{pr.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {pr.tech.slice(0, 4).map((tc, k) => (
                  <span key={k} className="text-xs bg-[#0a0a0a] border border-gray-800 px-3 py-1 rounded-full text-gray-300">{tc}</span>
                ))}
              </div>
              <span className="text-green-400 text-sm font-bold mt-5 inline-block">View Details →</span>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="bg-[#111] border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0a0a] border border-gray-700 text-gray-300 hover:text-white hover:border-green-500 transition font-bold">×</button>
            <span className="text-green-500 font-extrabold text-sm">PROJECT 0{selected.id}</span>
            <h2 className="text-2xl font-extrabold mt-2 pr-10">{selected.title}</h2>
            <p className="text-green-400 font-bold text-sm mt-1">{selected.tagline}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{selected.overview}</p>
            <h3 className="text-green-400 font-bold tracking-widest text-xs mt-6 mb-3">TECH STACK</h3>
            <div className="flex flex-wrap gap-2">
              {selected.tech.map((tc, k) => (
                <span key={k} className="text-xs bg-[#0a0a0a] border border-gray-800 px-3 py-1.5 rounded-full text-gray-300">{tc}</span>
              ))}
            </div>
            <h3 className="text-green-400 font-bold tracking-widest text-xs mt-6 mb-3">KEY FEATURES</h3>
            <ul className="space-y-2">
              {selected.features.map((f, k) => (
                <li key={k} className="text-gray-300 text-sm flex gap-2"><span className="text-green-500 font-bold">✓</span>{f}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={selected.github} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-2.5 rounded-full text-sm transition">GitHub Repo</a>
              {selected.live && (
                <a href={selected.live} target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-200 text-black font-bold px-6 py-2.5 rounded-full text-sm transition">Live Demo</a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
