import React from 'react'

function Overlay({ isOpen, toggleSidebar }) {
    return (
      isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white bg-opacity-25 z-50"
          onClick={toggleSidebar}
        ></div>
      )
    );
  }
export default Overlay
