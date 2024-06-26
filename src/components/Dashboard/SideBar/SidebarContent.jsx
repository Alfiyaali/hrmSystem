import React from 'react'

import Logo from '../../images/bg-image.jpg'

import Logo from '../../../assets/images/bg-images.jpg'
import DashDropDown from '../Dropdown/DashDropDown'

function SidebarContent({ isOpen }) {
    return (
      <aside
        className={`lg:w-64 lg:block ${
          isOpen ? 'block' : 'hidden'

        } fixed lg:relative inset-y-0 left-0 bg-white-300 dark:bg-white z-50 overflow-y-auto transition duration-300 ease-in-out bg-slate-200`}
        aria-label="Sidebar"
      >
        {/* Your existing sidebar content */}
        <div className="px-2 py-3">
          <ul className="space-y-2">
            {/* Sidebar items */}
            {/* Replace this with your sidebar items */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
                <span className="mx-auto">
                  <img src={Logo} alt="" className="w-12 h-12 " />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3 w-full"> <DashDropDown /></span>
              </a>
            </li>

  
            
          </ul>
        </div>
      </aside>
    );
  }

export default SidebarContent
