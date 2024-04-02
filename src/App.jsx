import React from 'react'

import RegistrationForm from './assets/RegistrationForm'
import Login from './assets/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='login' element={<Login/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
