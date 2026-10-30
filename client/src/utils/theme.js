export const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  return isDark;
};
export const initTheme = () => {
  const t = localStorage.getItem('theme');
  if(t==='dark' || !t) document.documentElement.classList.add('dark');
};
