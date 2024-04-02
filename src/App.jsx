import React from 'react'

import RegistrationForm from './components/Registration/RegistrationForm'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/navbar' element={<Navbar/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
