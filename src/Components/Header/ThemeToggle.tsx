import { useState, type JSX } from 'react';
import { THEME_STORAGE_KEY } from '../../constants';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' &&
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light',
  );

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // storage unavailable
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className={`kick ${styles.toggle}`}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}

export default ThemeToggle;
