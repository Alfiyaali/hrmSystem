import React, {useState, useEffect} from 'react';
import Sidebar from '../SideBar/SideBar';
import SuperAdminRegis from './SuperAdminRegis';
import { FaPlus, FaSearch } from "react-icons/fa";

const SuperAdmin = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleCloseModal = (event) => {
      if (isModalOpen && !event.target.closest(".modal-content")) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // State to manage sorting
  const [sortConfig, setSortConfig] = useState(null);

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Function to sort table data
  const sortedData = (data) => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  // Sample data for table
  const tableData = [
    { name: 'John Doe', email: 'john@example.com', company: 'Company A', createdDate: '2024-04-05', role: 'Admin' },
    // Add more data as needed
  ];

  return (
    <div className='flex flex-col md:flex-row px-5 py-5'>
      <Sidebar />
      <div className="w-full">
        <div className="flex justify-between  md:flex-row">
          <div className="md:w-2/3">
            <h1 className='px-5 font-bold text-2xl'>Company Details</h1>
            <p className='px-5 text-lg hidden md:block'>Dashboard / Users</p>
          </div>
          <div className='flex justify-between items-center text-center md:w-1/3'>
            {/* Add Users Button */}
            <button type="button" onClick={toggleModal} className="text-white bg-[#000000] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
              <FaPlus /><span className="px-2">Add Users</span>
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white p-8 rounded-lg z-10 modal-content border border-black w-[60%]">
              <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                &times;
              </button>
              <SuperAdminRegis />
            </div>
          </div>
        )}
        <div className='w-full'>
      {/* Search Filter */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full">
        <input type="text" name="name" id="name" placeholder='Name' className='px-2 py-1 border rounded-md md:w-[100%] w-[100%]' />
        <select className="px-2 py-1 border rounded-md md:w-[100%] w-[100%]">
          {/* Dropdown options for company name */}
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
          <option value="company3">Company 3</option>
        </select>
        <select className="px-2 py-1 border rounded-md md:w-[100%] w-[100%]">
          {/* Dropdown options for role */}
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          <option value="role3">Role 3</option>
        </select>
        <button type="button" className="text-white bg-[#000000] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 text-sm px-5 py-2.5 inline-flex items-center md:w-auto">
          <FaSearch className="mr-1" />
          Search
        </button>
      </div>
    </div>
        {/* Table */}
        <div className="table-container overflow-x-auto">
        <table className="w-full mt-5 border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('name')}>
                  Name {sortConfig && sortConfig.key === 'name' && (
                    sortConfig.direction === 'ascending' ? '↑' : '↓'
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('email')}>
                  Email {sortConfig && sortConfig.key === 'email' && (
                    sortConfig.direction === 'ascending' ? '↑' : '↓'
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('company')}>
                  Company {sortConfig && sortConfig.key === 'company' && (
                    sortConfig.direction === 'ascending' ? '↑' : '↓'
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('createdDate')}>
                  Created Date {sortConfig && sortConfig.key === 'createdDate' && (
                    sortConfig.direction === 'ascending' ? '↑' : '↓'
                  )}
                </th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('role')}>
                  Role {sortConfig && sortConfig.key === 'role' && (
                    sortConfig.direction === 'ascending' ? '↑' : '↓'
                  )}
                </th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render table rows based on sorted data */}
              {sortedData(tableData).map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.name}</td>
                  <td className="border px-4 py-2">{row.email}</td>
                  <td className="border px-4 py-2">{row.company}</td>
                  <td className="border px-4 py-2">{row.createdDate}</td>
                  <td className="border px-4 py-2">{row.role}</td>
                  <td className="border px-4 py-2">Edit | Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>

      </div>
      {/* <SuperAdminRegis /> */}
    </div>
  );
};

export default SuperAdmin;
