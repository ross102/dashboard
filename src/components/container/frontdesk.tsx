import React from 'react'
import {UserDetail} from '../userDetailComponent'
import { formatUserName } from '../../utils/utils';
import { SmallBoxTitle } from '../headings';

function FrontDeskOfficers() {
  // const   userName  = formatUserName('Abayomi Sowe')
  // const   userName2  = formatUserName('Segun Aiye')
   const   userName3  = formatUserName('Ifeanyi Ndu')
   const   userName4  = formatUserName('Mayowa Abolaji')

    const styles = {
        responsiveness: 'xl:w-[253px] lg:w-[200px] md:w-[180px]',
        style: 'min-h-[150px] rounded-[5px] px-2 py-5 overflow-hidden border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
      <div>
     <div className='pb-5 px-1'>
         <SmallBoxTitle title='Front desk officers' />
       </div>
         <div className='pb-6'>
         <UserDetail username={userName3?.userShortName} userInitials={userName3?.userInitials} phone="09087675432" status="Active" />
       </div>
       <div className='pb-6'>
         <UserDetail username={userName4?.userShortName} userInitials={userName4?.userInitials} phone="09087675432" status="Not Active" />
       </div>
       </div>
       <div className='text-xs font-medium cursor-pointer text-primary-gray-500'>
        USER MANAGEMENT   {'  >'}
     </div>
    </div>
  )
}

export default FrontDeskOfficers