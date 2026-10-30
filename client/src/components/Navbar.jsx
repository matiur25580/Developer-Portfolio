import { useEffect, useState } from 'react';
import { toggleTheme } from '../utils/theme';
export default function Navbar(){
  const [dateTime,setDateTime]=useState({date:'',time:''});
  const [dark,setDark]=useState(true);
  useEffect(()=>{
    const upd=()=>{
      const n=new Date();
      const d=n.toLocaleDateString('en-GB').replace(/\//g,'.');
      let h=n.getHours(); const ap=h>=12?'PM':'AM'; h=h%12||12;
      const t=`${String(h).padStart(2,'0')}.${String(n.getMinutes()).padStart(2,'0')}.${String(n.getSeconds()).padStart(2,'0')} ${ap}`;
      setDateTime({date:d,time:t});
    }; upd(); const id=setInterval(upd,1000); return ()=>clearInterval(id);
  },[]);
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white dark:from-gray-900 dark:to-gray-800 sticky top-0 z-50">
      <h1 className="font-bold text-xl">Rubel Ali | MERN Developer</h1>
      <div className="flex items-center gap-4 text-sm">
        <span>{dateTime.date} | {dateTime.time}</span>
        <span className="hidden md:inline">Newtown, Kolkata</span>
        <button onClick={()=>setDark(toggleTheme())} className="bg-white/20 px-3 py-1 rounded-full">{dark?'🌞 Light':'🌙 Dark'}</button>
      </div>
    </nav>
  );
}
