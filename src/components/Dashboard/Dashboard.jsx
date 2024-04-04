import React from 'react';
import Sidebar from './SideBar/SideBar';

import { Link } from 'react-router-dom';
import Adminpanel from './Admin/AdminPanel';
import Deal from './Deal/Deal';

function Dashboard() {
  return (
    <div className='bg-slate-200 w-full'>
      <div className="flex">
      <Sidebar />
      <Link to="/admin"><Adminpanel /></Link>
    </div>
    </div>
  )
}

export default Dashboard
