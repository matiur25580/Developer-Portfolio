import { useEffect, useState } from 'react';
export default function Navbar({active,setActive}){
  const menu=["Home","About","Resume","Services","Portfolio","Contact"];
  const [open,setOpen]=useState(false);
  const [dark,setDark]=useState(true);
  return (
    <nav className="bg-black text-white px-4 py-4 flex items-center sticky top-0 z-50 border-b border-green-500/30">
      <div className="md:hidden mr-3">
        <button onClick={()=>setOpen(!open)} className="text-2xl">☰</button>
        {open && <div className="absolute top-16 left-4 bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col gap-2 z-50 min-w-[140px]">
          {menu.map(m=><button key={m} onClick={()=>{setActive(m);setOpen(false);}} className={`${active===m?'text-green-400 font-bold':'text-gray-300'} text-left`}>{m}</button>)}
        </div>}
      </div>
      <h1 className="text-2xl font-extrabold flex-1">RUBEL <span className="text-green-400">ALI</span></h1>
      <button onClick={()=>{const d=document.documentElement.classList.toggle('light-mode');localStorage.setItem('theme',d?'light':'dark');setDark(!d);}} className="ml-3 text-xl bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700" title="Theme">{dark?'🌙':'☀️'}</button>
      <div className="hidden md:flex gap-6 text-sm items-center">
        {menu.map(m=><button key={m} onClick={()=>setActive(m)} className={active===m?'text-green-400 border-b-2 border-green-400 pb-1 font-bold':'hover:text-green-300 text-gray-300'}>{m}</button>)}
      </div>
    </nav>
  );
}
