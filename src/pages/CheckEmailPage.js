import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";

const CheckEmailPage = () => {
  const [data, setData] = useState({ email: "" });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;
console.log("myemial URL",URL)
    // Email regex pattern for basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Set loading to true

    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);

      if (response.data.success) {
        setData({ email: "" });
        navigate('/password', {
          state: response?.data?.data
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className='mt-32'> {/* Adjusted margin-top here */}
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
        <div className='w-fit mx-auto mb-2'>
          <PiUserCircle size={80} />
        </div>

        <h3>Welcome to Chat app!</h3>

        <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            className={`bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500'}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Loading...' : "Let's Go"}
          </button>
        </form>

        <p className='my-3 text-center'>
          New User? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default CheckEmailPage;
