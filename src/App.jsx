import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// COMPONENTS
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
