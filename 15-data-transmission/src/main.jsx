import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'

const rootElement = document.getElementById('root');

if(!rootElement){
  throw new Error("Не знайдено HTML-елемент з id='root'");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
