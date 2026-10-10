import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import RegistrationPage from './pages/RegistrationPage'
import TodoListPage from './pages/TodoListPage'


const HomePage = () => (
  <div>
    <h1>Рендер сторінок</h1>
    <p>Виберіть сторінку для перегляду</p>
    <div>
        <Link to="/registration" className="nav-button">Реєстрація</Link>
        <Link to="/todos" className="nav-button">Список справ</Link>
        <Link to="/products" className="nav-button">Продукти</Link>
    </div>
  </div>
)

function App() {
  return (    
    <div>
      <h1>Мій додаток</h1>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/todos" element={<TodoListPage />} /> 
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
