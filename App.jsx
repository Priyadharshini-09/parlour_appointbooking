import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import appointment from './pages/appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Stylist' element={<Stylist/>}/>
        <Route path='/Stylist/:speciality' element={<Stylist />}/>
        <Route path='/login' element={<login />}/>
        <Route path='/about' element={<about />}/>
        <Route path='/contact' element={<contact />}/>
        <Route path='/myprofile' element={<myprofile />}/>
        <Route path='/myappoint' element={<myappoint />}/>
        <Route path='/appointment/:docId' element={<appointment />}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
