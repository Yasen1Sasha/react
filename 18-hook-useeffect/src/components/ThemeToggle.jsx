import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
        document.body.classList.add('body-dark');
    } else {
        document.body.classList.remove('body-dark');
    }

    return () => {
      document.body.classList.remove('body-dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <h2>Поточна тема: {theme}</h2>
      <button onClick={toggleTheme}>Перемкнути тему</button>
    </div>
  );
}