import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import QuestBoardPage from './pages/QuestBoardPage'
import LoginPage from './pages/LoginPage'
import QuestCreatorPage from './pages/QuestCreatorPage'
import QuestPlayerPage from './pages/QuestPlayerPage'

function Navbar() {
  return (
    <nav className='bg-indigo-600 text-white shadow-md'>
      <div className='max-w-5xl mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to="/" 
          className='text-xl font-bold tracking-wider 
          hover:text-indigo-200 transition'>            
          Шкільний квест
        </Link>
        <div className='flex gap-4 items-center'>
          <Link to="/" className='hover:text-indigo-200 transition'>
            Дошка квестів
          </Link>
          <Link to="/create" className='bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:text-indigo-200 transition'>
            + Створити
          </Link>
          <Link to="/login" className='hover:text-indigo-200 transition ml-2'>
            Вхід
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='max-w-5xl mx-auto mt-8 px-4 pb-12'>
        <Routes>
          <Route path='/' element={<QuestBoardPage />}></Route>        
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/create' element={<QuestCreatorPage />}></Route>
          <Route path='/quest/:id' element={<QuestPlayerPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}