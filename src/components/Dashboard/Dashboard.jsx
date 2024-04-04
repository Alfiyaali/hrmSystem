
import React from 'react';
import SideBar from './SideBar/SideBar';
import Adminpanel from './Dash/Adminpanel';
import Revenue from './Dash/Revenue';
import SalesOverviewGraph from './Dash/SalesOverviewGraph';
function Dashboard() {
  return (
    <div className='bg-slate-200 h-full'>
      <div className="flex ">
      <SideBar />
      <Adminpanel/>
      <Revenue/>
      <SalesOverviewGraph/>
    </div>
    </div>
  )
}

export default Dashboard;
