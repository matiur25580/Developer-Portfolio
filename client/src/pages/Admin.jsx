import { useState } from 'react';

const API = 'https://developer-portfolio-9c5f.onrender.com/api/contact';

export default function Admin() {
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const fetchMsgs = async (adminToken) => {
    const response = await fetch(API, {
      headers: { Authorization: `Bearer ${adminToken}` },
      cache: 'no-store',
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Messages load kora jayni.');
    setMsgs(data);
  };

  const login = async () => {
    if (!pass || busy) return;
    setBusy(true);
    setErr('');
    try {
      const response = await fetch(`${API}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pass }),
      });
      const data = await response.json();
      if (!response.ok || !data.token) throw new Error(data.error || 'Login failed.');
      await fetchMsgs(data.token);
      setToken(data.token);
      setPass('');
    } catch (error) {
      setErr(error.message || 'Login failed.');
    } finally {
      setBusy(false);
    }
  };

  const logout = () => {
    setToken('');
    setMsgs([]);
    setPass('');
    setErr('');
  };

  const delOne = async (id) => {
    try {
      const response = await fetch(`${API}/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Delete failed.');
      setMsgs((current) => current.filter((message) => message._id !== id));
    } catch (error) {
      setErr(error.message || 'Delete failed.');
    }
  };

  const delAll = async () => {
    if (!window.confirm('Sob message permanently delete korbe?')) return;
    try {
      const response = await fetch(API, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Delete failed.');
      setMsgs([]);
    } catch (error) {
      setErr(error.message || 'Delete failed.');
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">🔒 Admin Login</h2>
          <form onSubmit={(event) => { event.preventDefault(); login(); }}>
            <input
              type="password"
              autoComplete="current-password"
              className="w-full p-3 rounded bg-gray-700 mb-3"
              placeholder="Admin Password"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
              required
            />
            <button disabled={busy} className="w-full bg-blue-600 py-3 rounded-full font-bold disabled:opacity-60">
              {busy ? 'Please wait…' : 'Login'}
            </button>
          </form>
          {err && <p role="alert" className="text-red-400 mt-2">{err}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 dark:text-white">
      <div className="flex justify-between items-center mb-6 gap-3">
        <h2 className="text-3xl font-bold">📩 Messages ({msgs.length})</h2>
        <div className="flex gap-2">
          <button onClick={delAll} disabled={!msgs.length} className="bg-red-600 text-white px-4 py-2 rounded-full disabled:opacity-50">Delete All</button>
          <button onClick={logout} className="bg-gray-600 text-white px-4 py-2 rounded-full">Logout</button>
        </div>
      </div>
      {err && <p role="alert" className="text-red-500 mb-4">{err}</p>}
      <div className="grid gap-4">
        {msgs.map((message) => (
          <div key={message._id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between gap-4">
            <div className="min-w-0">
              <p className="font-bold break-words">{message.name} <span className="text-sm text-blue-600">{message.email}</span></p>
              <p className="mt-1 whitespace-pre-wrap break-words">{message.message}</p>
              <p className="text-xs opacity-60">{new Date(message.createdAt).toLocaleString()}</p>
            </div>
            <button onClick={() => delOne(message._id)} className="text-red-600 font-bold self-start">Delete</button>
          </div>
        ))}
        {msgs.length === 0 && <p className="text-center opacity-60">Kono message nei.</p>}
      </div>
    </div>
  );
}
