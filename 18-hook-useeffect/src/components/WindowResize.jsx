import { useState, useEffect } from 'react';

export default function WindowResize() {
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <div>
      <h2>Поточна ширина вікна: {Width}px</h2>
    </div>
  );
}