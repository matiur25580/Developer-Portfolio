import { useRef } from 'react';
import { profile } from '../data/profile';
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

  const projects = profile.projects;

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
        <p className="text-sm leading-relaxed text-gray-300">MERN Full Stack Developer building practical full-stack applications with authentication, role-based workflows, dashboards and data-driven features. Portfolio showcases 24 projects spanning enterprise workflows, AI-assisted products, finance, HR, healthcare, logistics, property management, cybersecurity and developer tools.</p>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">TECHNICAL SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => <span key={skill} className="rounded-full border border-gray-800 bg-[#0a0a0a] px-3 py-1.5 text-xs text-gray-300">{skill}</span>)}
        </div>

        <div className="mb-3 mt-8 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-bold tracking-widest text-green-400">SELECTED PROJECTS</h2>
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-bold tracking-wider text-green-300">{projects.length} PROJECTS</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className={`rounded-xl border p-4 transition ${'border-gray-800 bg-[#0c0c0c]'}`}>
              <div className="flex items-start gap-3">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-extrabold ${project.featured ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-300'}`}>{String(index + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-snug text-white">{project.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{project.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(Array.isArray(project.tech) ? project.tech : String(project.tech || '').split(' · ').filter(Boolean)).map((technology) => <span key={technology} className="rounded-md border border-gray-800 bg-black/40 px-2 py-1 text-[10px] text-gray-300">{technology}</span>)}
                  </div>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-[11px] font-bold text-green-400 hover:text-green-300">GitHub Repository ↗</a>
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
