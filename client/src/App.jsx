import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './pages/Admin';
import { initTheme } from './utils/theme';

function HomePage(){
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
      <Contact />
      <footer className="text-center p-4 bg-black text-white">© 2026 Rubel Ali | Built with MERN Passion on Android</footer>
    </div>
  );
}

export default function App(){
  useEffect(()=>{ initTheme(); },[]);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}
