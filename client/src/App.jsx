import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import { HomePage, AboutPage, ResumePage, ServicesPage, PortfolioPage } from './components/Pages';
import Contact from './components/Contact';
import { initTheme } from './utils/theme';
export default function App(){
  const [isAdmin,setIsAdmin]=useState(window.location.hash==='#/admin');
  const [active,setActive]=useState('Home');
  useEffect(()=>{
    initTheme();
    const h=()=>setIsAdmin(window.location.hash==='#/admin');
    window.addEventListener('hashchange',h);
    return ()=>window.removeEventListener('hashchange',h);
  },[]);
  if(isAdmin) return <Admin />;
  return (
    <div className="bg-black min-h-screen">
      <Navbar active={active} setActive={setActive} />
      {active==='Home' && <HomePage setActive={setActive}/>}
      {active==='About' && <AboutPage/>}
      {active==='Resume' && <ResumePage/>}
      {active==='Services' && <ServicesPage/>}
      {active==='Portfolio' && <PortfolioPage/>}
      {active==='Contact' && <div className="bg-black text-white"><Contact/></div>}
      <footer className="bg-black text-gray-600 text-center p-4 text-xs border-t border-gray-900">© 2026 Rubel Ali | Designed by Rubel Ali | <a href="#/admin" className="underline">Admin</a></footer>
    </div>
  );
}
