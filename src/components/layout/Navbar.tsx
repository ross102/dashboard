import React from 'react'
import { formatUserName } from '../../utils/utils';



function Navbar() {
  
  type User = {
    userInitials: string,
    userShortName: string
  }

  const   userName  = formatUserName('Immaculata Ojadi')
  return (
    <nav className="fixed top-0  left-[278px] h-[61px] p-1 right-0 bg-primary-white shadow z-20">
      <div className='xl:w-[1110px] lg:w-[900px]'>
      <div className="container  mx-auto  flex justify-between">
        <div className="text-base p-4 ml-3 font-extrabold text-accent-text"> Visitors Management System</div>
        <div className='flex gap-3 p-2 cursor-default'>
          <div className='flex w-[35px] h-10 text-base font-medium 
          rounded-[50%] border items-center justify-center  border-accent-text'>
              {userName?.userInitials}
          </div>
          <div className='flex-col gap-2'>
            <div className='text-sm font-medium text-dark-text'>
               {userName?.userShortName}
            </div>
            <div className='text-xs font-medium '>
               <span className='text-primary-gray-500'>Admin officer</span>
            </div>
          </div>
        </div>
    </div>
      </div>
  
</nav>
  )
}

export default Navbar