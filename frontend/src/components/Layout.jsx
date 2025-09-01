import React, { Children } from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({children, showSidebar=false}) => {
  return (
  <div className='min-h-screen flex flex-col bg-base-200'>
      <Navbar />
      <div className='flex flex-1'>
        {showSidebar && <Sidebar />}
        <main className='flex-1 overflow-y-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout