import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// COMPONENTS
import Home from './pages/Home'
import Cart from './pages/Cart'
import BacktoTop from './components/BacktoTop'
import ScrollToTop from './components/BacktoTop'


function App() {

  return (
    <>
      <BrowserRouter>
        <BacktoTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  )
}

export default App
