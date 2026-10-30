import { profile } from '../data/profile';
import Projects from './Projects';
import ExtraSections from './ExtraSections';
import Contact from './Contact';

export function HomePage(){
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:to-black dark:text-white">
      <h1 className="text-5xl font-extrabold">Hi, I'm <span className="text-blue-600">Rubel Ali</span></h1>
      <p className="text-2xl mt-3 text-purple-600 dark:text-purple-400">MERN Full Stack Developer</p>
      <p className="max-w-2xl mt-4 opacity-80">{profile.about}</p>
      <div className="flex gap-4 mt-6">
        <a href="https://github.com/matiur25580" className="bg-black text-white px-6 py-2 rounded-full dark:bg-white dark:text-black">GitHub</a>
        <button onClick={()=>window.dispatchEvent(new CustomEvent('go-portfolio'))} className="bg-blue-600 text-white px-6 py-2 rounded-full">View Work</button>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div><h3 className="text-3xl font-bold text-blue-600">6+</h3><p>Projects</p></div>
        <div><h3 className="text-3xl font-bold text-purple-600">14+</h3><p>Skills</p></div>
        <div><h3 className="text-3xl font-bold text-green-600">3Y</h3><p>Experience</p></div>
      </div>
    </div>
  );
}
export function AboutPage(){
  return (
    <div className="p-8 dark:text-white">
      <h2 className="text-4xl font-bold mb-6">👨‍💻 About Me</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <p><b>Name:</b> Rubel Ali</p>
        <p><b>Degree:</b> B.Tech in CSE (2019-2023)</p>
        <p><b>College:</b> Bengal Institute of Technology, Kolkata (Under MAKAUT)</p>
        <p><b>Home:</b> {profile.addresses.homeTown}</p>
        <p><b>Current:</b> {profile.addresses.current}</p>
        <p><b>Role:</b> MERN Full Stack Developer (MNC/Startup job searching)</p>
        <p className="mt-3"><b>Hobby:</b> {profile.hobbies.join(', ')}</p>
        <p className="mt-3"><b>Languages:</b> {profile.languages.join(' | ')}</p>
      </div>
    </div>
  );
}
export function ResumePage(){ return <div><ExtraSections/></div>; }
export function ServicesPage(){
  const s=[["MERN Web Development","Full-stack enterprise apps with React, Node, MongoDB"],["REST API Development","Secure JWT + OTP auth, role-based APIs"],["Deployment & DevOps","Vercel + Render CI/CD, Atlas setup"],["UI/UX Modern Design","Responsive Tailwind + Framer Motion"]];
  return (
    <div className="p-8 dark:text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">⚙️ Services</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {s.map((x,i)=><div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"><h3 className="font-bold text-xl text-blue-600">{x[0]}</h3><p className="mt-2 text-sm">{x[1]}</p></div>)}
      </div>
    </div>
  );
}
export function PortfolioPage(){ return <div><Projects/></div>; }
