import { profile } from '../data/profile';
import Projects from './Projects';
import ExtraSections from './ExtraSections';
import Contact from './Contact';
export function HomePage(){
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-200 dark:from-indigo-900 dark:via-purple-900 dark:to-black dark:text-white">
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">✨ Welcome to my portfolio ✨</div>
      <h1 className="text-5xl md:text-6xl font-extrabold">Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Rubel Ali</span></h1>
      <p className="text-2xl mt-3 font-bold text-orange-600 dark:text-yellow-300">MERN Full Stack Developer 🚀</p>
      <p className="max-w-2xl mt-4 bg-white/70 dark:bg-white/10 p-4 rounded-2xl">{profile.about}</p>
      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <a href="https://github.com/matiur25580" className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">⭐ GitHub</a>
        <button onClick={()=>window.dispatchEvent(new CustomEvent('go-portfolio'))} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">🎨 View Work</button>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-6 rounded-2xl shadow-xl"><h3 className="text-4xl font-bold">6+</h3><p className="font-semibold">Projects</p></div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl"><h3 className="text-4xl font-bold">14+</h3><p className="font-semibold">Skills</p></div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-400 text-white p-6 rounded-2xl shadow-xl"><h3 className="text-4xl font-bold">3Y</h3><p className="font-semibold">Experience</p></div>
      </div>
    </div>
  );
}
export function AboutPage(){
  return (
    <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-black dark:text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">🌈 <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">About Me</span></h2>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto border-4 border-gradient">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl"><b>🎓 Degree:</b> B.Tech CSE (2019-2023)</div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-2xl"><b>🏫 College:</b> BIT Kolkata (MAKAUT)</div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl"><b>🏠 Home:</b> {profile.addresses.homeTown}</div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-2xl"><b>📍 Current:</b> {profile.addresses.current}</div>
        </div>
        <div className="mt-4 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/20 dark:to-blue-900/20 p-4 rounded-2xl"><b>🎨 Hobby:</b> {profile.hobbies.join(', ')}</div>
        <div className="mt-4 bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-900/20 dark:to-yellow-900/20 p-4 rounded-2xl"><b>🗣️ Languages:</b> {profile.languages.join(' | ')}</div>
      </div>
    </div>
  );
}
export function ResumePage(){ return <div><ExtraSections/></div>; }
export function ServicesPage(){
  const s=[["💻 MERN Development","from-blue-500 to-cyan-400","Full-stack enterprise apps"],["🔌 REST API","from-purple-500 to-pink-500","JWT + OTP auth APIs"],["☁️ Deployment","from-green-500 to-emerald-400","Vercel + Render CI/CD"],["🎨 UI/UX Design","from-orange-500 to-red-400","Responsive Tailwind"]];
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-black dark:text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center">🌟 <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">My Services</span></h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {s.map((x,i)=><div key={i} className={`bg-gradient-to-br ${x[1]} p-1 rounded-3xl shadow-xl hover:scale-105 transition`}><div className="bg-white dark:bg-gray-800 p-6 rounded-3xl h-full"><h3 className="font-bold text-xl">{x[0]}</h3><p className="mt-2 text-sm opacity-80">{x[2]}</p></div></div>)}
      </div>
    </div>
  );
}
export function PortfolioPage(){ return <div><Projects/></div>; }
