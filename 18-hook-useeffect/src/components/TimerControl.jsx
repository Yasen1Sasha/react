import { useState, useEffect } from 'react';

function TimerControl() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setCount((n) => n + 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    });

    return (
        <div>
            <h2>Лічильник: {count}</h2>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Зупинити' : 'Запустити'}
            </button>
            <button onClick={() => setCount(0)}>Скинути</button>
        </div>
    )
}

export default TimerControl;