import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// COMPONENTS
import Home from './pages/Home'
import Cart from './pages/Cart'
import BacktoTop from './components/BacktoTop'
import ScrollToTop from './components/ScrolltopBtn'
import LoadingState from './components/LoadingState'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <LoadingState />
  }

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
