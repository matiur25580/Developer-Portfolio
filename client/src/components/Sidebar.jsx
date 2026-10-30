import { useState } from 'react';
const menu = ["Home","About","Resume","Services","Portfolio","Contact"];
export default function Sidebar({active,setActive}){
  return (
    <div className="w-full md:w-64 bg-gradient-to-b from-gray-900 to-black text-white p-6 md:min-h-screen md:sticky md:top-0">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">RA</div>
        <h2 className="text-xl font-bold mt-3">Rubel Ali</h2>
        <p className="text-sm text-blue-400">MERN Full Stack Developer</p>
        <p className="text-xs mt-1 opacity-70">Newtown, Kolkata</p>
      </div>
      <nav className="mt-8 flex md:flex-col flex-row flex-wrap gap-2 justify-center">
        {menu.map(m=>(
          <button key={m} onClick={()=>setActive(m)} className={`px-4 py-2 rounded-full text-sm font-semibold ${active===m?'bg-blue-600':'bg-white/10 hover:bg-white/20'}`}>{m}</button>
        ))}
        <a href="#/admin" className="px-4 py-2 rounded-full text-sm bg-white/5 text-gray-400 text-center">Admin</a>
      </nav>
      <div className="mt-8 text-center text-xs opacity-60 hidden md:block">
        <p>📧 rahamanmatiur397@gmail.com</p>
        <p className="mt-2">🗣️ Bangla | Hindi | English</p>
      </div>
    </div>
  );
}
