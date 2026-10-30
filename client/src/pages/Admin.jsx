import { useState } from 'react';
const API="https://developer-portfolio-9c5f.onrender.com/api/contact";
export default function Admin(){
  const [pass,setPass]=useState(''); const [ok,setOk]=useState(false);
  const [msgs,setMsgs]=useState([]); const [err,setErr]=useState('');
  const login=()=>{ if(!pass){setErr('Password dao');return;} fetchMsgs(); };
  const fetchMsgs=async()=>{
    const r=await fetch(API); const d=await r.json(); setMsgs(d); setOk(true); setErr('');
  };
  const delOne=async(id)=>{
    await fetch(`${API}/${id}`,{method:'DELETE',headers:{'x-admin-pass':pass}});
    setMsgs(msgs.filter(m=>m._id!==id));
  };
  const delAll=async()=>{
    if(!confirm('Sob test message delete korbe?')) return;
    await fetch(API,{method:'DELETE',headers:{'x-admin-pass':pass}});
    setMsgs([]);
  };
  if(!ok) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">🔒 Admin Login</h2>
        <input type="password" className="w-full p-3 rounded bg-gray-700 mb-3" placeholder="Admin Password" value={pass} onChange={e=>setPass(e.target.value)} />
        <button onClick={login} className="w-full bg-blue-600 py-3 rounded-full font-bold">Login</button>
        {err && <p className="text-red-400 mt-2">{err}</p>}
        <p className="text-sm mt-3 opacity-60">Default: rubel2026 (Render env e ADMIN_PASS diye change koro)</p>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">📩 Messages ({msgs.length})</h2>
        <button onClick={delAll} className="bg-red-600 text-white px-4 py-2 rounded-full">Delete All</button>
      </div>
      <div className="grid gap-4">
        {msgs.map(m=>(
          <div key={m._id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between">
            <div><p className="font-bold">{m.name} <span className="text-sm text-blue-600">{m.email}</span></p><p className="mt-1">{m.message}</p><p className="text-xs opacity-60">{new Date(m.createdAt).toLocaleString()}</p></div>
            <button onClick={()=>delOne(m._id)} className="text-red-600 font-bold">Delete</button>
          </div>
        ))}
        {msgs.length===0 && <p className="text-center opacity-60">Kono message nei.</p>}
      </div>
    </div>
  );
}
