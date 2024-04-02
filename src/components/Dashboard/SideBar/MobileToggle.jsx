import React from 'react'

function MobileToggle({ isOpen, toggleSidebar }) {
    return (
      <button
        className="block lg:hidden px-3 py-2 text-black hover:text-black focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V7H4V6ZM4 11H20V12H4V11ZM4 16H20V17H4V16Z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V7H4V6ZM4 11H20V12H4V11ZM4 16H20V17H4V16ZM4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
            />
          )}
        </svg>
      </button>
    );
  }
  

export default MobileToggle;
