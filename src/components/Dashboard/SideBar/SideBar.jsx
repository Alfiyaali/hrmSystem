import React, {useState} from 'react'
import MobileToggle from './MobileToggle';
import SidebarContent from './SidebarContent';
import Overlay from './Overlay';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative bg-slate-200	w-64">
        <MobileToggle isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <SidebarContent isOpen={isOpen} />
        <Overlay isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    );
  }
  
  export default Sidebar;
