import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import CourseDetail from './pages/CourseDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

    const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='/details/:courseId' element={<CourseDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
