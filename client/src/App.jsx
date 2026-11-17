import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import { HomePage, AboutPage, SkillsPage, ExperiencePage, ServicesPage, ProjectsPage } from './components/Pages';
import Contact from './components/Contact';
import { initTheme } from './utils/theme';
import Resume from './components/Resume';
export default function App(){
  const [isAdmin,setIsAdmin]=useState(window.location.hash==='#/admin');
  const [active,setActive]=useState(()=>{ const hash=window.location.hash.toLowerCase(); return hash==='#projects' || hash.startsWith('#project-') ? 'Projects' : 'Home'; });
  const scrollToSection=(name)=>{
    setActive(name);
    const target=document.getElementById('section-'+name.toLowerCase());
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  };
  useEffect(()=>{
    initTheme();
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
  if(isAdmin) return <Admin />;
  return (
    <div className="bg-black min-h-screen">
      <Navbar active={active} setActive={scrollToSection} />
      <div id="section-home" className="scroll-mt-20"><HomePage setActive={scrollToSection}/></div>
      <div id="section-about" className="scroll-mt-20"><AboutPage/></div>
      <div id="section-skills" className="scroll-mt-20"><SkillsPage/></div>
      <div id="section-experience" className="scroll-mt-20"><ExperiencePage/></div>
      <div id="section-services" className="scroll-mt-20"><ServicesPage/></div>
      <div id="section-projects" className="scroll-mt-20"><ProjectsPage/></div>
      <div id="section-contact" className="scroll-mt-20"><Contact/></div>
      <div id="section-resume" className="scroll-mt-20"><Resume/></div>
      <footer className="bg-black text-gray-600 text-center p-4 text-xs border-t border-gray-900">© 2026 Matiur Rahaman | <a href="#/admin" className="underline">Admin</a></footer>
    </div>
  );
}
