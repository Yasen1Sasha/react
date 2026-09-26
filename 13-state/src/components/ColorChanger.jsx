import { useState } from 'react'


function colorchanger() {

    const [color, setColor] = useState('#ffffff');

    const handleClick = () => {
        let n = Math.random() *
        const newColor = '#' + Math.floor(n).toString(16);
        setColor(newColor)
    };
 

  return (
    <div>
        <h2>Завдання 1</h2>
        <p>Колір фону змінюється при натисканні</p>
        <button onClick={handleClick} style={{background:color}}>
            Змінити колір
            </button>
    </div>
  )
}

export default App