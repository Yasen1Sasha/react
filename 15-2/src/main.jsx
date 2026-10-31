import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if(!rootElement){
  throw new Error("Не знайдено HTML-елемент з id = 'root'")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
