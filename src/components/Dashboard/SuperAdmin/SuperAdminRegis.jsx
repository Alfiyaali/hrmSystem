import React, { useState } from "react";
import { Link } from "react-router-dom";

function SuperAdminRegis() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber:"",
    password: "",
    confirmPassword: "",
    defaultCheckbox:"",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Submit form data to backend or perform further actions
      console.log("Form submitted:", formData);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="mx-0 py-0 w-full">
      <div className="cont flex mx-auto h-auto">
        
        <div className="justify-center w-[100%] mx-auto h-[50%] bg-white border border-black">
          <h2 className="text-3xl text-center py-3 font-bold pt-5">Registration Form</h2>
          <form onSubmit={handleSubmit} className="py-5">
            <div className="flex">
            <div className="py-3 w-[50%]">
              <label htmlFor="fullName" className="py-5">
                Full Name:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span style={{ color: "red" }}>{errors.fullName}</span>
              )}
            </div>
            <div className="py-3 w-[50%] px-10">
              <label htmlFor="username" className="py-5">
                Username:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            </div>

            <div className="flex">
            <div className="py-3 w-[50%]">
              <label htmlFor="email" className="py-5">
              Email:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="py-3 w-[50%] px-10">
              <label htmlFor="mobileNumber" className="py-5">
              Mobile Number:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
              />
               {errors.mobileNumber && (
                <span style={{ color: "red" }}>{errors.mobileNumber}</span>
              )}
            </div>
            </div>


            <div className="flex">
            <div className="py-3 w-[50%]">
              <label htmlFor="password" className="py-5">
              Password:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="py-3 w-[50%] px-10">
              <label htmlFor="confirmPassword" className="py-5">
              Confirm Password:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span style={{ color: "red" }}>{errors.confirmPassword}</span>
              )}
            </div>
            </div>



            <div className="flex">
            <div className="py-3 w-[50%]">
      <label htmlFor="role" className="py-5">
        Role
      </label>
      <br />
      <select
        className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
        id="role"
        name="role"
        required
        value={formData.role}
        onChange={handleChange}
      >
        {/* Your dropdown options go here */}
        <option value="option1">Admin</option>
        <option value="option2">Super Admin</option>
        <option value="option3">Employee</option>
      </select>
      {errors.role && (
        <span style={{ color: "red" }}>{errors.role}</span>
      )}
    </div>
            <div className="py-3 w-[50%] px-10">
              <label htmlFor="companyname" className="py-5">
              Company Name:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                id="companyname"
                name="companyname"
                required
                value={formData.companyname}
                onChange={handleChange}
              />
              {errors.companyname && (
                <span style={{ color: "red" }}>{errors.companyname}</span>
              )}
            </div>
            </div>

            

            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                required
                className="mt-2 block border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-xs font-medium text-black dark:text-black py-1.5 px-1 mt-2"
              >
               I agree to all statements include in terms and conditions
              </label>
            </div>
            <div className="mt-2">
              <button type="submit" className="px-8 py-2 rounded-md bg-sky-400 text-white">
               <Link to=""> Register</Link>
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminRegis;
