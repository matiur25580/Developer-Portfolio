import { useState } from 'react';
const menu = [["Home","🏠"],["About","👨‍💻"],["Resume","📄"],["Services","⚙️"],["Portfolio","🚀"],["Contact","📩"]];
export default function Sidebar({active,setActive}){
  return (
    <div className="w-full md:w-72 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white p-6 md:min-h-screen md:sticky md:top-0">
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-500 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold text-purple-700">RA</div>
        </div>
        <h2 className="text-2xl font-bold mt-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Rubel Ali</h2>
        <p className="text-sm bg-yellow-400 text-black px-3 py-1 rounded-full inline-block mt-2 font-semibold">MERN Developer</p>
        <p className="text-xs mt-2 opacity-80">📍 Newtown, Kolkata</p>
      </div>
      <nav className="mt-8 flex md:flex-col flex-row flex-wrap gap-2 justify-center">
        {menu.map(([m,icon])=>(
          <button key={m} onClick={()=>setActive(m)} className={`px-4 py-2 rounded-xl text-sm font-bold transition transform hover:scale-105 ${active===m?'bg-gradient-to-r from-yellow-400 to-pink-500 text-black shadow-lg':'bg-white/15 hover:bg-white/25'}`}>{icon} {m}</button>
        ))}
      </nav>
      <div className="mt-8 text-center text-xs bg-white/10 rounded-xl p-3 hidden md:block">
        <p>📧 rahamanmatiur397@gmail.com</p>
        <p className="mt-2">🗣️ Bangla | Hindi | English</p>
      </div>
    </div>
  );
}
