import React from 'react'


export interface UserDetailType  {
  userInitials?: string,
  username?: string,
  phone?: string,
  date?: string
}

function UserDetailComponent({username, userInitials, phone, date}: UserDetailType) {
    
  return (
    <div className='flex justify-between'>
          <div className='flex gap-2 cursor-default'>
          <div className='flex w-[36px] h-[36px] text-base font-medium 
          rounded-[50%] border items-center justify-center  border-accent-text'>
              {userInitials}
          </div>
          <div className='flex-col '>
            <div className='text-xs mb-1 font-extrabold text-dark-text'>
               {username}
            </div>
            <div className='text-xs font-medium '>
               <span className='text-primary-gray-500'>{phone}</span>
            </div>
          </div>
        </div>
        <div className='text-xs font-medium mt text-primary-gray-500'>
           {date}
        </div>
    </div>
  )
}

export default UserDetailComponent