import React from 'react';
import logo from '../assets/chat.jpg';

const AuthLayouts = ({ children }) => {
  return (
    <>
      <div className='flex flex-col lg:flex-row min-h-screen '>
        {/* Logo Section */}
        <aside className='flex items-center justify-center lg:w-1/3 w-full bg-white pl-24'>
          <img
            src={logo}
            alt='logo'
            width={280}
            height={100}
            className='object-contain'
          />
        </aside>

        {/* Main Content Section */}
        <main className='flex items-center justify-center lg:w-2/3 w-full pr-24'>
          <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md '>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default AuthLayouts;
