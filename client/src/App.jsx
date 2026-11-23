import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { HomePage, AboutPage, SkillsPage, ExperiencePage, ServicesPage, ProjectsPage } from './components/Pages';
import Contact from './components/Contact';

const Admin = lazy(() => import('./pages/Admin'));
const Resume = lazy(() => import('./components/Resume'));

const SectionLoading = () => <div className="min-h-[40vh] bg-[#0a0a0a] text-gray-400 flex items-center justify-center text-sm" role="status">Loading section…</div>;

class SectionErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error, info) {
    console.error(\`Portfolio section failed: \${this.props.name}\`, error, info.componentStack);
  }
  render() {
    if (this.state.failed) {
      return <section className="min-h-[35vh] bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-16 text-center" role="alert">
        <p className="text-xs font-bold tracking-widest text-yellow-400">SECTION TEMPORARILY UNAVAILABLE</p>
        <h2 className="mt-3 text-2xl font-bold">{this.props.name} section could not load</h2>
        <p className="mt-2 max-w-lg text-sm text-gray-400">The rest of the portfolio is still available. Please reload later or use the navigation to continue.</p>
      </section>;
    }
    return this.props.children;
  }
}

const SafeSection = ({ name, children }) => <SectionErrorBoundary name={name}>{children}</SectionErrorBoundary>;

export default function App(){
  const [isAdmin,setIsAdmin]=useState(window.location.hash==='#/admin');
  const [active,setActive]=useState(()=>{ const hash=window.location.hash.toLowerCase(); return hash==='#projects' || hash.startsWith('#project-') ? 'Projects' : 'Home'; });
  const scrollToSection=(name)=>{
    setActive(name);
    const target=document.getElementById('section-'+name.toLowerCase());
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  };
  useEffect(()=>{
    const h=()=>{
      const hash=window.location.hash;
      setIsAdmin(hash==='#/admin');
      if(hash.toLowerCase()==='#projects' || hash.startsWith('#project-')){
        setActive('Projects');
        window.requestAnimationFrame(()=>document.getElementById('section-projects')?.scrollIntoView({behavior:'smooth',block:'start'}));
      }
    };
    window.addEventListener('hashchange',h);
    if(window.location.hash.startsWith('#project-')) window.requestAnimationFrame(()=>document.getElementById('section-projects')?.scrollIntoView({behavior:'auto',block:'start'}));
    return ()=>window.removeEventListener('hashchange',h);
  },[]);
  if(isAdmin) return <Suspense fallback={<SectionLoading />}><SafeSection name="Admin"><Admin /></SafeSection></Suspense>;
  return (
    <div className="bg-black min-h-screen">
      <SafeSection name="Navigation"><Navbar active={active} setActive={scrollToSection} /></SafeSection>
      <div id="section-home" className="scroll-mt-20"><SafeSection name="Home"><HomePage go={scrollToSection} setActive={scrollToSection}/></SafeSection></div>
      <div id="section-about" className="scroll-mt-20"><SafeSection name="About"><AboutPage/></SafeSection></div>
      <div id="section-skills" className="scroll-mt-20"><SafeSection name="Skills"><SkillsPage/></SafeSection></div>
      <div id="section-experience" className="scroll-mt-20"><SafeSection name="Experience"><ExperiencePage/></SafeSection></div>
      <div id="section-services" className="scroll-mt-20"><SafeSection name="Services"><ServicesPage/></SafeSection></div>
      <div id="section-projects" className="scroll-mt-20"><SafeSection name="Projects"><ProjectsPage/></SafeSection></div>
      <div id="section-contact" className="scroll-mt-20"><SafeSection name="Contact"><Contact/></SafeSection></div>
      <div id="section-resume" className="scroll-mt-20"><SafeSection name="Resume"><Suspense fallback={<SectionLoading />}><Resume/></Suspense></SafeSection></div>
      <footer className="bg-black text-gray-600 text-center p-4 text-xs border-t border-gray-900">© 2026 Matiur Rahaman | <a href="#/admin" className="underline">Admin</a></footer>
    </div>
  );
}
