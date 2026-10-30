import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './pages/Admin';
import ExtraSections from './components/ExtraSections';
import { initTheme } from './utils/theme';

export default function App(){
  const [isAdmin,setIsAdmin]=useState(window.location.hash==='#/admin');
  useEffect(()=>{
    initTheme();
    const h=()=>setIsAdmin(window.location.hash==='#/admin');
    window.addEventListener('hashchange',h);
    return ()=>window.removeEventListener('hashchange',h);
  },[]);
  if(isAdmin) return <Admin />;
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <section className="p-8 dark:bg-gray-900 dark:text-white bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4">🎓 Education & Address</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p><b>B.Tech CSE</b> - Bengal Institute of Technology, Kolkata (Under MAKAUT) - 2019-2023</p>
          <p>🏠 Home: Surangapur, Samashpur, Hemtabad, Uttar Dinajpur (Raiganj), WB</p>
          <p>📍 Current: Newtown, Kolkata, WB, India</p>
          <p>💼 Actively looking for MNC/Startup MERN roles</p>
        </div>
      </section>
      <ExtraSections />
      <Contact />
      <div className="text-center p-2 bg-black"><a href="#/admin" className="text-xs text-gray-500 underline">Admin</a></div>
      <footer className="text-center p-4 bg-black text-white">© 2026 Rubel Ali | Built with MERN Passion on Android</footer>
    </div>
  );
}
