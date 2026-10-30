export const toggleTheme = () => {
  const isLight = document.documentElement.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  return !isLight;
};
export const initTheme = () => {
  if(localStorage.getItem('theme')==='light') document.documentElement.classList.add('light-mode');
};
