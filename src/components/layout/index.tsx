import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";

function LayoutContainer() {
  return (
    <section>
        <Sidebar />
        <Navbar />
    <div className=" ml-[278px] pb-6 mt-[61px] min-h-[600px] overflow-y-auto overflow-x-hidden">
      <div className='ml-2'>
      <Outlet />
      </div>
     
    </div>
    </section>
  )
}

export default LayoutContainer