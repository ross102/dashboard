import React from 'react'
import Logo from "../../../assets/icons/dashboard-sidebar-icons/logo.svg"
// import { navdata } from '../utils/SidebarData'
// import { getActiveUrl } from '../../utils/utils'

function Sidebar() {

 const styles = {
   navClassNames: `flex  pl-4 items-center gap-[19px]  h-[54px]
    rounded-[5px]  text-primary-white  hover:bg-primary-white hover:mr-1 hover:text-accent transition-all duration-300 ease-in-out hover:my-1`,

    activeNavClassnames: `flex  pl-4 mr-1 items-center gap-[19px]  h-[54px]
    rounded-[5px]  bg-primary-white text-accent`,

   iconClassNames: "w-[18px] h-[18px] hover:text-accent"
  }

  return (
    // id for the sidebar image background
    <div id="" className="absolute  bg-cover bg-center inset-y-0 left-0  w-[250px] bg-accent shadow-lg lg:block">
    <div className="p-4">
        <div className="w-[100%] flex justify-start text-center"><img className='w-[99px] h-[79px]' src={Logo} alt="VMS Logo"/></div>
         <div className='w-[220px] mt-[44px]'>
            <h2 className='font-medium text-lg text-primary-white'>Welcome to <br /><span className='font-extrabold text-lg text-blue-light'>
            FSDH Merchant Bank</span></h2>
            <p className='font-normal text-xs text-blue-extralight mt-6'>We're excited to have you here! Please<br /> take a moment to fill in your personal details.</p>
            <p className='font-normal text-xs mt-40 w-full text-center text-blue-extralight'>Together we achieve more...</p>
         </div>
    </div>
</div>
  )
}

export default Sidebar