import React from 'react'
import {browserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'

const HomePage = () => (
  <div>
    <h1>Рендер сторінок</h1>
    <p>Виберіть сторінку для перегляду</p>
    <div>
        <Link to="/registration">Реєстрація</Link>
        <Link to="todos">Список справ</Link>
        <Link></Link>
    </div>
  </div>
)






function App() {

  return (
    <>
      <Router>
        <Routes>
          <Routepath="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
