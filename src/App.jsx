import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Services from "./Pages/Services"
import Login from "./Components/LogIn"
import SignUp from "./Components/SignUp"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <div className='m-0 p-0 box-border  bg-black text-white overflow-hidden'>
      <NavBar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/services' element={<Services/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App