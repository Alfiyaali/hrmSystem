import React from 'react'

import RegistrationForm from './components/Registration/RegistrationForm';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Deal from './components/Dashboard/Deal/Deal';
import Adminpanel from './components/Dashboard/Admin/AdminPanel';
import SuperAdmin from './components/Dashboard/SuperAdmin/SuperAdmin'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/adminpanel' element={<Adminpanel/>}/>
        <Route path='/deal' element={<Deal/>}/>
        <Route path='/superadmin' element={<SuperAdmin />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
