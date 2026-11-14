import {useState, useEffect} from 'react'

export default function ColorFader() {
    const [colorIndex, setColorIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [color, setColor] = useState('red');
    const colors = ['red', 'blue']

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setColorIndex((n) => n + 1);
            }, 2000);
            setColor(colors[colorIndex % colors.length]);

            return () => clearInterval(timer);
        }
    })
    
    
    return (
        <>
            <h2 style={{ color }}>Поточний колір: {color}</h2>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Зупинити' : 'Запустити'}
            </button>
            <button onClick={() => setColorIndex(0)}>Скинути</button>
        </>
    )
}