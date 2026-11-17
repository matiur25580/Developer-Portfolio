import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Resume() {
  const cardRef = useRef(null);

  const savePDF = async () => {
    const el = cardRef.current;
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#111111' });
    const img = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const imgW = pageW;
    const imgH = (canvas.height * imgW) / canvas.width;
    let pos = 0;
    pdf.addImage(img, 'PNG', 0, 0, imgW, imgH);
    pos += pageH;
    while (imgH > pos) {
      pdf.addPage();
      pdf.addImage(img, 'PNG', 0, -pos, imgW, imgH);
      pos += pageH;
    }
    pdf.save('Matiur_Rahaman_Resume.pdf');
  };

  const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'JWT Auth', 'Mongoose', 'Git & GitHub', 'Postman', 'Vercel', 'Render', 'Docker', 'REST APIs'];

  const projects = [
    {
      title: 'Smart HR & Payroll Management System',
      description: 'Enterprise HRMS with Admin, HR and Employee roles, 6-digit email OTP and JWT authentication, payroll processing, downloadable payslips and role-based dashboards.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/matiur25580/enterprise-hr-payroll-system',
      featured: true,
    },
    {
      title: 'HireFlow — ATS Recruitment System',
      description: 'Recruitment platform with candidate and recruiter workspaces, job applications, hiring pipelines, private resume handling and Gemini-assisted resume-to-job analysis.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Gemini'],
      github: 'https://github.com/matiur25580/ats-recruitment-system'
      featured: true,
    },
    {
      title: 'CityCare Hospital Management System',
      description: 'Hospital ERP with five role-based workspaces and 16 departments, duty rosters, OT booking, blood bank and inventory workflows.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/matiur25580/hospital-management-system',
      featured: true,
    },
    {
      title: 'Draftline AI — AI Writing Studio',
      description: 'AI-assisted content creation platform with verified accounts, content generation history, bookmarks and a transactional credit ledger.',
      stack: ['React', 'Vite', 'Express', 'MongoDB', 'Gemini', 'Brevo'],
      github: 'https://github.com/matiur25580/ai-saas-generator'
    },
    {
      title: 'FinTech Smart Invoice & Expense System',
      description: 'Finance-operations application focused on invoice management, expense tracking and supplier-payment workflows.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/matiur25580/FinTech-Smart-Invoice-Expense-Supplier-Payment-System'
    },
    {
      title: 'RealEstate Management System',
      description: 'Property-management platform with rent tracking, lease and booking modules, maintenance requests, PDF receipts and audit logging.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/matiur25580/realestate-management-system',
    },
    {
      title: 'FleetCommand Logistics System',
      description: 'Fleet and supply-chain operations platform with role-based workspaces, trip and warehouse management, driver workflows and analytics.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      github: 'https://github.com/matiur25580/Enterprise-AI-Powered-Logistics-Fleet-Supply-Chain-Command-Center',
    },
    {
      title: 'TrustShield Bank',
      description: 'Digital banking platform with OTP/JWT authentication, customer identity workflows and transaction risk-monitoring concepts.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/matiur25580/Enterprise-AI-Powered-Digital-Banking-Fraud-Detection-DevOps-Command-Center',
    },
    {
      title: 'Multi-Vendor Marketplace',
      description: 'Marketplace ecosystem with buyer and seller workflows, multi-role registration, Brevo email OTP verification and seller tools.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Brevo'],
      github: 'https://github.com/matiur25580/Enterprise-AI-Powered-Multi-Vendor-Marketplace-Seller-Ecosystem-Command-Center',
    }
  ];

  const exp = [
    ['MERN Web Development Intern', '2023', 'Completed a 6-month MERN stack internship building full-stack web applications with React, Node.js, Express and MongoDB.'],
    ['MNC Offer via Campus Placement', '2023', 'Received a ₹35,000/month MNC offer through college placement.'],
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-white sm:px-6 sm:py-10">
      <div ref={cardRef} className="mx-auto max-w-3xl rounded-2xl border border-gray-800 bg-[#111] p-5 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold">MATIUR RAHAMAN</h1>
            <p className="mt-1 font-bold text-green-400">MERN Full Stack Developer</p>
            <p className="mt-2 text-sm text-gray-400">Newtown, Kolkata, West Bengal, India</p>
          </div>
          <div className="print:hidden flex gap-3">
            <button onClick={() => window.print()} className="rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-black transition hover:bg-green-400">Print</button>
            <button onClick={savePDF} className="rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-black transition hover:bg-green-400">Save PDF</button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <a href="mailto:rahamanmatiur397@gmail.com" className="text-gray-300 hover:text-green-400">rahamanmatiur397@gmail.com</a>
          <a href="https://github.com/matiur25580" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-green-400">github.com/matiur25580</a>
          <a href="https://www.linkedin.com/in/matiur-rahaman-3a6086233" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-green-400">LinkedIn</a>
        </div>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">SUMMARY</h2>
        <p className="text-sm leading-relaxed text-gray-300">MERN Full Stack Developer building practical full-stack applications with authentication, role-based workflows, dashboards and data-driven features. Portfolio includes 9 projects spanning recruitment, AI-assisted content, finance, HR, healthcare, logistics, property management, banking and e-commerce.</p>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">TECHNICAL SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => <span key={skill} className="rounded-full border border-gray-800 bg-[#0a0a0a] px-3 py-1.5 text-xs text-gray-300">{skill}</span>)}
        </div>

        <div className="mb-3 mt-8 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-bold tracking-widest text-green-400">SELECTED PROJECTS</h2>
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-bold tracking-wider text-green-300">09 PROJECTS</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className={`rounded-xl border p-4 transition ${project.featured ? 'border-green-500/35 bg-green-500/[.045]' : 'border-gray-800 bg-[#0c0c0c]'}`}>
              <div className="flex items-start gap-3">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-extrabold ${project.featured ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-300'}`}>{String(index + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-snug text-white">{project.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((technology) => <span key={technology} className="rounded-md border border-gray-800 bg-black/40 px-2 py-1 text-[10px] text-gray-300">{technology}</span>)}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-[11px] font-bold text-green-400 hover:text-green-300">GitHub Repository ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">EXPERIENCE</h2>
        <div className="space-y-4">
          {exp.map((item) => (
            <div key={item[0]} className="flex justify-between gap-4">
              <div>
                <p className="text-sm font-bold">{item[0]}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-gray-400">{item[2]}</p>
              </div>
              <span className="whitespace-nowrap text-xs text-gray-500">{item[1]}</span>
            </div>
          ))}
        </div>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">EDUCATION</h2>
        <div className="flex justify-between gap-4">
          <div>
            <p className="text-sm font-bold">B.Tech in Computer Science and Engineering</p>
            <p className="mt-1 text-[13px] text-gray-400">Bengal Institute of Technology, Kolkata, affiliated to MAKAUT, West Bengal</p>
          </div>
          <span className="whitespace-nowrap text-xs text-gray-500">2019 - 2023</span>
        </div>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">LANGUAGES</h2>
        <p className="text-sm text-gray-300">Bangla (Native) · Hindi (Fluent) · English (Professional)</p>
      </div>
    </div>
  );
}
