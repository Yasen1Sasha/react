import { useState } from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm'
import ValidationForm from './components/ValidationForm'
import OrderForm from './components/OrderForm'

function App() {
  return (
  <div className="forms-container">
    <SimpleForm />
    <ValidationForm />
    <OrderForm></OrderForm>
  </div>
  )
}  
export default App
