import React from 'react'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Layout from './LayOut'
import Home from './Home'
import AboutUS from './AboutUS'
import Registration from './Registration'
import Login from './Login'
import Services from './Services'
import Placement from './Placement'
import ContactUs from './ContactUs'




const App = () => {

 

  return (
   <>
      <BrowserRouter>
          <Routes>
                
                 <Route path='/' element={<Layout/>} >
                 <Route path='/home' element={<Home/>} />
                 <Route path='/registration' element={<Registration/>} />
                 <Route path='/login' element={<Login/>} />
                 <Route path='/about' element={<AboutUS/>} />
                 <Route path='/service' element={<Services/>} />
                 <Route path='/placement' element={<Placement/>} />
                 <Route path='/contactus' element={<ContactUs/>} />

                 </Route>
                 
          </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
