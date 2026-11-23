import { useRef, useState } from 'react';
import { profile } from '../data/profile';

export default function Resume() {
  const cardRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState('');

  const savePDF = async () => {
    const el = cardRef.current;
    if (!el || isExporting) return;
    setIsExporting(true);
    setExportError('');

    try {
      // Keep PDF-only libraries out of the initial portfolio and resume chunks.
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ]);

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const margin = 12;
    const contentW = pageW - margin * 2;
    const contentH = pageH - margin * 2;

    // Render a desktop-width, paper-style copy so mobile screen dimensions
    // never determine the downloaded document layout.
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: '#ffffff',
      windowWidth: 900,
      onclone: (clonedDoc) => {
        const clonedResume = clonedDoc.querySelector('[data-resume-export]');
        if (!clonedResume) return;
        clonedResume.style.width = '794px';
        clonedResume.style.maxWidth = 'none';
        clonedResume.style.margin = '0';
        clonedResume.style.padding = '42px';
        clonedResume.style.border = '0';
        clonedResume.style.borderRadius = '0';
        clonedResume.style.background = '#ffffff';
        clonedResume.style.color = '#17202a';
        clonedResume.querySelectorAll('.print\\:hidden').forEach((node) => { node.style.display = 'none'; });
        clonedResume.querySelectorAll('*').forEach((node) => {
          const tag = node.tagName;
          if (tag === 'A') {
            node.style.color = '#167a45';
            node.style.textDecoration = 'none';
          } else if (/^H[1-6]$/.test(tag)) {
            node.style.color = '#16834b';
          } else if (tag === 'SPAN' || tag === 'P') {
            node.style.color = '#263238';
          }
          if (node.tagName === 'ARTICLE') {
            node.style.background = '#f7faf8';
            node.style.borderColor = '#d9e3dc';
            node.style.breakInside = 'avoid';
          }
          if (node.tagName === 'SPAN' && node.className?.includes('rounded-md')) {
            node.style.background = '#eef5f0';
            node.style.borderColor = '#d5e3d9';
          }
        });
      },
    });

    // Slice the long resume into true A4 pages with consistent print margins.
    const pageCanvasHeight = Math.floor(canvas.width * contentH / contentW);
    let pageIndex = 0;
    for (let y = 0; y < canvas.height; y += pageCanvasHeight) {
      const sliceHeight = Math.min(pageCanvasHeight, canvas.height - y);
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeight;
      const context = pageCanvas.getContext('2d');
      if (!context) throw new Error('Unable to prepare the PDF page.');
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
      context.drawImage(canvas, 0, y, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

      if (pageIndex > 0) pdf.addPage();
      const renderedH = sliceHeight * contentW / canvas.width;
      pdf.addImage(pageCanvas.toDataURL('image/jpeg', 0.96), 'JPEG', margin, margin, contentW, renderedH, undefined, 'FAST');
      pageIndex += 1;
    }

      pdf.save('Matiur_Rahaman_Resume.pdf');
    } catch (error) {
      console.error('Resume PDF export failed:', error);
      setExportError('PDF export could not be completed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'JWT Auth', 'Mongoose', 'Git & GitHub', 'Postman', 'Vercel', 'Render', 'Docker', 'REST APIs'];

  const projects = [
    {
      name: 'Developer Portfolio — Matiur Rahaman',
      desc: 'Responsive React portfolio presenting all 32 project repositories, technical skills, project details, visual previews and contact information.',
      tech: 'React · Vite · JavaScript · Tailwind CSS · Vercel',
      repo: 'https://github.com/matiur25580/Developer-Portfolio',
      featured: true,
    },
    ...profile.projects.map((project) => ({
      name: project.name,
      desc: project.desc,
      tech: project.tech,
      repo: project.repo,
      featured: true,
    })),
  ];

  const exp = [
    ['MERN Web Development Intern', '2023', 'Completed a 6-month MERN stack internship building full-stack web applications with React, Node.js, Express and MongoDB.'],
    ['MNC Offer via Campus Placement', '2023', 'Received a ₹35,000/month MNC offer through college placement.'],
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-white sm:px-6 sm:py-10">
      <div ref={cardRef} data-resume-export className="mx-auto max-w-3xl rounded-2xl border border-gray-800 bg-[#111] p-5 sm:p-8">
        <div className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-extrabold leading-tight sm:text-3xl">MATIUR RAHAMAN</h1>
            <p className="mt-1 font-bold text-green-400">MERN Full Stack Developer</p>
            <p className="mt-2 text-sm text-gray-400">Newtown, Kolkata, West Bengal, India</p>
          </div>
          <button onClick={savePDF} disabled={isExporting} aria-busy={isExporting} className="print:hidden inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green-500 px-3 py-2 text-xs font-bold text-black shadow-lg shadow-green-500/10 transition hover:bg-green-400 disabled:cursor-wait disabled:opacity-60 sm:px-5 sm:py-2.5 sm:text-sm">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M10 2a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.75A.75.75 0 0 1 10 2Z"/><path d="M3.5 13.5a.75.75 0 0 1 .75.75v1.5h11.5v-1.5a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 .75-.75Z"/></svg>
            {isExporting ? "Preparing PDF…" : "Save PDF"}
          </button>
        </div>
        {exportError && <p className="mt-3 text-xs text-red-400" role="alert">{exportError}</p>}

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <a href="mailto:rahamanmatiur397@gmail.com" className="text-gray-300 hover:text-green-400">rahamanmatiur397@gmail.com</a>
          <a href="https://github.com/matiur25580" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-green-400">github.com/matiur25580</a>
          <a href="https://www.linkedin.com/in/matiur-rahaman-3a6086233" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-green-400">LinkedIn</a>
        </div>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">SUMMARY</h2>
        <p className="text-sm leading-relaxed text-gray-300">MERN Full Stack Developer building practical full-stack applications with authentication, role-based workflows, dashboards and data-driven features. Selected work highlights a responsive developer portfolio and a MERN e-commerce application with authentication, catalog management and order workflows.</p>

        <h2 className="mb-3 mt-8 text-sm font-bold tracking-widest text-green-400">TECHNICAL SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => <span key={skill} className="rounded-full border border-gray-800 bg-[#0a0a0a] px-3 py-1.5 text-xs text-gray-300">{skill}</span>)}
        </div>

        <div className="mb-3 mt-8 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-bold tracking-widest text-green-400">PROJECT PORTFOLIO</h2>
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-bold tracking-wider text-green-300">32 PROJECT REPOSITORIES + PORTFOLIO</span>
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
