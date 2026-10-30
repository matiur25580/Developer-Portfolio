import { useEffect, useState } from 'react';
export default function Navbar({active,setActive}){
  const menu=["Home","About","Resume","Services","Portfolio","Contact"];
  const [dt,setDt]=useState('');
  useEffect(()=>{
    const u=()=>{const n=new Date();let h=n.getHours();const ap=h>=12?'PM':'AM';h=h%12||12;setDt(`${n.toLocaleDateString('en-GB').replace(/\//g,'.')} | ${String(h).padStart(2,'0')}.${String(n.getMinutes()).padStart(2,'0')}.${String(n.getSeconds()).padStart(2,'0')} ${ap}`)};u();const id=setInterval(u,1000);return()=>clearInterval(id);
  },[]);
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-green-500/20">
      <h1 className="text-2xl font-extrabold tracking-wider">RUBEL <span className="text-green-400">ALI</span></h1>
      <div className="hidden md:flex gap-6 text-sm">
        {menu.map(m=><button key={m} onClick={()=>setActive(m)} className={`${active===m?'text-green-400 border-b-2 border-green-400':'hover:text-green-300'} pb-1 font-semibold`}>{m}</button>)}
      </div>
      <div className="md:hidden flex gap-2 flex-wrap text-xs">
        {menu.map(m=><button key={m} onClick={()=>setActive(m)} className={`${active===m?'text-green-400':'text-gray-300'}`}>{m}</button>)}
      </div>
      <span className="hidden lg:block text-xs text-gray-400">{dt}</span>
    </nav>
  );
}
