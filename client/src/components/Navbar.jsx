import { useState } from 'react';

export default function Navbar({ active, setActive }) {
  const menu = ['Home', 'About', 'Skills', 'Experience', 'Services', 'Projects', 'Contact', 'Resume'];
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light');

  const toggleTheme = () => {
    const nextDark = document.documentElement.classList.toggle('light-mode') === false;
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);
  };

  const navigate = (section) => {
    setActive(section);
    setOpen(false);
  };

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 flex items-center border-b border-green-500/20 bg-black/90 px-4 py-3 text-white shadow-lg shadow-black/10 backdrop-blur-xl md:px-6">
      <div className="relative mr-3 md:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="grid h-10 w-10 place-items-center rounded-xl border border-gray-700 bg-gray-900 text-xl transition hover:border-green-400 hover:text-green-300"
        >
          {open ? '×' : '☰'}
        </button>
        {open && (
          <div id="mobile-navigation" className="absolute left-0 top-12 z-50 flex min-w-52 flex-col gap-1 rounded-2xl border border-gray-700 bg-gray-950 p-3 shadow-2xl shadow-black/40">
            {menu.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => navigate(item)}
                aria-current={active === item ? 'page' : undefined}
                className={`rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-white/5 ${active === item ? 'bg-green-400/10 font-bold text-green-400' : 'text-gray-300'}`}
              >
                {item}
              </button>
            ))}
            <a href="#/admin" onClick={() => setOpen(false)} className="mt-1 border-t border-gray-800 px-3 pt-3 text-xs text-gray-500 hover:text-green-400">Admin</a>
          </div>
        )}
      </div>

      <a href="#section-home" onClick={(event) => { event.preventDefault(); navigate('Home'); }} className="min-w-0 flex-1 text-lg font-extrabold tracking-tight sm:text-xl md:flex-none">
        MATIUR <span className="text-green-400">RAHAMAN</span>
      </a>

      <div className="ml-auto hidden items-center gap-4 lg:flex xl:gap-5">
        {menu.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => navigate(item)}
            aria-current={active === item ? 'page' : undefined}
            className={active === item ? 'border-b-2 border-green-400 pb-1 font-bold text-green-400' : 'pb-1 text-gray-300 transition hover:text-green-300'}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        className="ml-3 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-700 bg-gray-900 text-lg transition hover:border-green-400"
      >
        {dark ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
