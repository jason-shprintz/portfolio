import { useEffect, useState, type JSX } from 'react';
import { THEME_STORAGE_KEY } from '../../constants';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

function ThemeToggle(): JSX.Element {
  // The first client render has to produce the same markup the server did, or
  // React discards the server HTML and logs a hydration error. The server has
  // no way to know the visitor's theme, so start from the same assumption it
  // makes and read the real value once we are safely past hydration.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function toggleTheme() {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
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
      aria-label={
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      }
      className={`kick ${styles.toggle}`}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}

export default ThemeToggle;
