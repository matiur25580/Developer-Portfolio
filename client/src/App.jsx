import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Admin from './pages/Admin';
import { HomePage, AboutPage, ResumePage, ServicesPage, PortfolioPage } from './components/Pages';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { initTheme } from './utils/theme';

export default function App(){
  const [isAdmin,setIsAdmin]=useState(window.location.hash==='#/admin');
  const [active,setActive]=useState('Home');
  useEffect(()=>{
    initTheme();
    const h=()=>setIsAdmin(window.location.hash==='#/admin');
    const gp=()=>setActive('Portfolio');
    window.addEventListener('hashchange',h);
    window.addEventListener('go-portfolio',gp);
    return ()=>{window.removeEventListener('hashchange',h);window.removeEventListener('go-portfolio',gp);};
  },[]);
  if(isAdmin) return <Admin />;
  return (
    <div className="dark:bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar active={active} setActive={setActive} />
        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
          {active==='Home' && <HomePage/>}
          {active==='About' && <AboutPage/>}
          {active==='Resume' && <ResumePage/>}
          {active==='Services' && <ServicesPage/>}
          {active==='Portfolio' && <PortfolioPage/>}
          {active==='Contact' && <Contact/>}
          <footer className="text-center p-4 text-sm opacity-60 dark:text-white">© 2026 Rubel Ali | MERN Portfolio | <a href="#/admin" className="underline">Admin</a></footer>
        </main>
      </div>
    </div>
  );
}
