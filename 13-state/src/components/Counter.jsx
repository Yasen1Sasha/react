import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    };




    return (
        <div>
            <h2>Завдання 2</h2>
            <p>Натисни {count}</p>
            <button onClick={handleClick}>
                ------
                </button>      
        </div>
        
  );
};

export default Counter;