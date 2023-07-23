
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Buying from './pages/Buying'
import Renting from './pages/Renting'
import Selling from './pages/Selling'
import ContactUs from './pages/Buying'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register /> } />
      <Route path='/buying' element={<Buying /> } />
      <Route path='/renting' element={<Renting /> } />
      <Route path='/selling' element={<Selling /> } />
      <Route path='/contact-us' element={<ContactUs /> } />
      <Route path='/about-us' element={<Buying /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
