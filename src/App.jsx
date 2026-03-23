import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Images from './pages/Images'
import Questions from './pages/Questions'
import Contact from './pages/Contact'
import Steps from './pages/Steps'
import Header from './components/Common/Header/Header'
import Our from './pages/Our'
import Footer from './components/Common/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Why from './components/Contact/Why/Why'
import ScrollToTop from './components/Common/ScrollToTop/ScrollToTop'





function App() {
 

  return (
  
    <BrowserRouter>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/galeria' element={<Images/>}/> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<Questions/>}/>
          <Route path='/oferta' element={<Steps/>}/>
          <Route path='/o-nas' element={<Our/>}/>
          
        </Routes>
        <Footer/>
    </BrowserRouter>
   
      
  
  )
}

export default App
