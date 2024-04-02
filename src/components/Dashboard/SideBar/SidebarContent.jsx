import React from 'react'
import Logo from '../../../assets/images/bg-images.jpg'

function SidebarContent({ isOpen }) {
    return (
      <aside
        className={`lg:w-64 lg:block ${
          isOpen ? 'block' : 'hidden'
        } fixed lg:relative inset-y-0 left-0 bg-white dark:bg-white z-50 overflow-y-auto transition duration-300 ease-in-out bg-slate-200`}
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
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Super Admin</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Employee</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Project</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Payroll</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Clients</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Teams</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:bg-white dark:hover:bg-white"
              >
        
                {/* Text */}
                <span className="ml-3">Settings</span>
              </a>
            </li>
            {/* Other sidebar items */}
          </ul>
        </div>
      </aside>
    );
  }

export default SidebarContent
