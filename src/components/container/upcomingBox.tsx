import React from 'react'
import {UserDetail} from '../userDetailComponent'
import { formatUserName } from '../../utils/utils';
import { SmallBoxTitle } from '../headings';

function Upcomingbox() {
  const   userName  = formatUserName('Abayomi Sowe')
  const   userName2  = formatUserName('Segun Aiye')
  // const   userName3  = formatUserName('Ifeanyi Ndu')
  // const   userName4  = formatUserName('Mayowa Abolaji')
    const styles = {
        responsiveness: 'xl:w-[253px] md:w-[180px] lg:w-[200px]',
        style: 'min-h-[150px] rounded-[5px] px-2 py-5 overflow-hidden border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
       <div className='pb-5 px-1'>
         <SmallBoxTitle title='Upcoming visits' />
       </div>
       <div className='pb-6'>
         <UserDetail username={userName?.userShortName} userInitials={userName?.userInitials} phone="09087675432" date="today" />
       </div>
       <div className='pb-6'>
         <UserDetail username={userName2?.userShortName} userInitials={userName2?.userInitials} phone="09087675432" date="tomorrow" />
       </div>
       {/* <div className='pb-6'>
         <UserDetail username={userName3?.userShortName} userInitials={userName3?.userInitials} phone="09087675432" date="18-11-2024" />
       </div>
       <div className='pb-6'>
         <UserDetail username={userName4?.userShortName} userInitials={userName4?.userInitials} phone="09087675432" date="tomorrow" />
       </div> */}
        <div className='text-xs pl-1 font-medium cursor-pointer text-primary-gray-500'>
       SEE ALL UPCOMING VISITORS   {'  >'}
     </div>
    </div>
  )
}

export default Upcomingbox