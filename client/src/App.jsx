import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import { HomePage, AboutPage, SkillsPage, ExperiencePage, ServicesPage, ProjectsPage } from './components/Pages';
import Contact from './components/Contact';
import { initTheme } from './utils/theme';
import Resume from './components/Resume';
export default function App(){
  const [isAdmin,setIsAdmin]=useState(window.location.hash==='#/admin');
  const [active,setActive]=useState('Home');
  useEffect(()=>{ initTheme(); const h=()=>setIsAdmin(window.location.hash==='#/admin'); window.addEventListener('hashchange',h); return ()=>window.removeEventListener('hashchange',h); },[]);
  if(isAdmin) return <Admin />;
  return (
    <div className="bg-black min-h-screen">
      <Navbar active={active} setActive={setActive} />
      {active==='Home' && <HomePage setActive={setActive}/>}
      {active==='About' && <AboutPage/>}
      {active==='Skills' && <SkillsPage/>}
      {active==='Experience' && <ExperiencePage/>}
      {active==='Services' && <ServicesPage/>}
      {active==='Projects' && <ProjectsPage/>}
      {active==='Contact' && <Contact/>}
      {active==="Resume" && <Resume/>}
      <footer className="bg-black text-gray-600 text-center p-4 text-xs border-t border-gray-900">© 2026 Rubel Ali | <a href="#/admin" className="underline">Admin</a></footer>
    </div>
  );
}
