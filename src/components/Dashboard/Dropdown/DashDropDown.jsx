import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <details class="group transition-all duration-150 h-50 open:h-50 overflow-hidden w-56">
      <summary class="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span class="ml-3 text-sm font-medium"> DashBoard </span>

        <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <nav class="mt-1.5 ml-8 flex flex-col transition-all duration-500">

      <Link
          to="/adminpanel"
          className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <GoDotFill />
          <span className="ml-3 text-sm font-medium"> Admin Panel </span>
        </Link>


        <Link
          to="/superadmin"
          className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <GoDotFill />
          <span className="ml-3 text-sm font-medium"> Super Admin Panel </span>
        </Link>
        <Link
          to="/deal"
          className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <GoDotFill />
          <span className="ml-3 text-sm font-medium"> Employee </span>
        </Link>
      </nav>
    </details>
  );
}

export default Dropdown;
