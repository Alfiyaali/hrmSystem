import React, { useState } from "react";
import BackgroundImage from "../../assets/images/bg-image.jpg";
import Login from "../Login/Login";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const [errors, setErrors] = useState({});
      const [showLogin, setShowLogin] = useState(false); // State variable for showing Login component
    
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
          // Show the Login component after successful registration
          setShowLogin(true);
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
    <div className="mx-0 py-0 bg-sky-50">
      <div className="cont flex w-[100%] mx-auto h-auto py-20 px-20">
        <div className="background-img  bg-cover bg-no-repeat w-[45%]" style={{backgroundImage: `url(${BackgroundImage})`}}>
          {/* <img src={BackgroundImage} alt="border-2 border-red-500" /> */}
        </div>
        <div className="justify-center px-20 py-10w-[50%] mx-auto w-[55%]  h-[50%] bg-white">
          <h2 className="text-3xl text-center py-3 font-bold pt-5">Registration Form</h2>
          <form onSubmit={handleSubmit} className="py-5">
            <div className=" py-3">
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
            <div className="">
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
            <div className=" mt-2 py-2">
              <label htmlFor="User-Type" className="mt-2">
                User
              </label>
              <div className="mt-2 font-semibold">
                <select
                  id="User"
                  name="User"
                  className="block w-full border-b-2 border-b-grey-950 rounded-md py-2.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                >
                  <option className="font-semibold" value="Employee">
                    Employee
                  </option>
                  <option className="font-semibold" value="Admin">
                    Admin
                  </option>
                  <option className="font-semibold" value="Super Admin">
                    Super Admin
                  </option>
                </select>
              </div>
            </div>
            <div className="">
              <label htmlFor="password" className="py-5">
                Password:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="mt-2">
              <label htmlFor="confirmPassword" className="py-5">
                Confirm Password:
              </label>
              <br />
              <input
                className="mt-2 block w-full border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span style={{ color: "red" }}>{errors.confirmPassword}</span>
              )}
            </div>

            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="mt-2 block border-b-2 border-b-grey-950 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-xs font-medium text-gray-800 dark:text-gray-300 py-1.5 px-1 mt-2"
              >
               I agree to all statements include in terms and conditions
              </label>
            </div>
            <div className="mt-2">
              <button type="submit" className="px-8 py-2 bg-sky-400 text-white">
                Register
              </button>

              <a href="#" className="text-xs text-blue-500 ml-10" onClick={() => setShowLogin(true)}>I am already a member</a>
            </div>
          </form>

           {/* Conditionally render the Login component based on the state */}
           {showLogin && <Login />}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
