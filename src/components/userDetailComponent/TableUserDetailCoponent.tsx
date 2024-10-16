import React from 'react'

export interface TableUserDetailType  {
  userInitials?: string,
  username?: string,
  phone?: string,
  status?: boolean
}

function TableUserDetailComponent({username, userInitials, phone, status }: TableUserDetailType) {
    
  return (
    <div className='flex justify-between'>
          <div className='flex gap-2 cursor-default'>
          {
            status && 
            <div className='flex w-[40px] h-[40px] text-base font-medium 
          rounded-[50%] border items-center justify-center  border-accent-text'>
              {userInitials}
          </div>
          }
          <div className='flex-col '>
            <div className='text-xs mb-1 font-extrabold text-dark-text'>
               {(username && username?.length > 15) ? username?.slice(0, 13) + '..' : username  }
            </div>
            <div className='text-xs font-medium '>
               <span className='text-primary-gray-500'>{phone}</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default TableUserDetailComponent