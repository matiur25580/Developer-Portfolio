import { useState } from 'react';
export default function Navbar({active,setActive}){
  const menu=["Home","About","Skills","Experience","Services","Projects","Contact","Resume"];
  const [open,setOpen]=useState(false);
  const [dark,setDark]=useState(true);
  return (
    <nav className="bg-black text-white px-4 py-4 flex items-center sticky top-0 z-50 border-b border-green-500/30">
      <div className="md:hidden mr-3">
        <button onClick={()=>setOpen(!open)} className="text-2xl">☰</button>
        {open && <div className="absolute top-16 left-4 bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col gap-2 z-50 min-w-[150px]">
          {menu.map(m=><button key={m} onClick={()=>{setActive(m);setOpen(false);}} className={`${active===m?'text-green-400 font-bold':'text-gray-300'} text-left text-sm`}>{m}</button>)}
          <a href="#/admin" className="text-gray-500 text-xs mt-2">Admin</a>
        </div>}
      </div>
      <h1 className="text-2xl font-extrabold flex-1">MATIUR <span className="text-green-400">RAHAMAN</span></h1>
      <div className="hidden md:flex gap-5 text-[13px] items-center">
        {menu.map(m=><button key={m} onClick={()=>setActive(m)} className={active===m?'text-green-400 border-b-2 border-green-400 pb-1 font-bold':'hover:text-green-300 text-gray-300'}>{m}</button>)}
      </div>
      <button onClick={()=>{const d=document.documentElement.classList.toggle('light-mode');localStorage.setItem('theme',d?'light':'dark');setDark(!d);}} className="ml-3 text-lg bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center">{dark?'🌙':'☀️'}</button>
    </nav>
  );
}
