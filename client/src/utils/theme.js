const THEME_KEY = 'theme';

export const applyTheme = (theme = 'dark') => {
  const isLight = theme === 'light';
  const root = document.documentElement;
  root.classList.add('theme-transition');
  root.classList.toggle('light-mode', isLight);
  root.style.colorScheme = isLight ? 'light' : 'dark';
  try {
    localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  } catch (error) {
    console.warn('Theme preference could not be saved:', error);
  }
  window.setTimeout(() => root.classList.remove('theme-transition'), 300);
  return !isLight;
};

export const toggleTheme = () => {
  const isCurrentlyLight = document.documentElement.classList.contains('light-mode');
  return applyTheme(isCurrentlyLight ? 'dark' : 'light');
};

export const initTheme = () => {
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  } catch (error) {
    console.warn('Theme preference could not be read:', error);
  }
  const isLight = savedTheme === 'light';
  document.documentElement.classList.toggle('light-mode', isLight);
  document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
  return !isLight;
};
