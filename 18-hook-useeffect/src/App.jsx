import { useState } from 'react'
import './App.css'
import TimerControl from './components/TimerControl'
import ThemeToggle from './components/ThemeToggle'
import WindowResize from './components/WindowResize'
import ColorFader from './components/ColorFader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Урок: Хук useEffect</h1>
      <TimerControl />
      <ThemeToggle />
      <WindowResize />
      <ColorFader />
    </>
  )
}

export default App
