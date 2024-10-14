import React from 'react'
import Progressbar from '../progressbar/progressbar'
import { SmallBoxTitle } from '../headings'

function Purposebox() {
    const styles = {
        responsiveness: 'xl:w-[253px] md:w-[200px]',
        style: 'h-[328px] rounded-[5px] p-6 overflow-hidden border-primary-gray-200 flex-col justify-between border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness}   ${styles.style}`}>
      <div className=''>
      <div className='pb-5'>
         <SmallBoxTitle title={"Purpose of Visit"} />
       </div>
       <div className='pb-6'>
         <Progressbar key={2} category="Contract/Service Appointment" nos={500} />
       </div>
       <div className='pb-6'>
         <Progressbar key={4} category="Business Meeting" nos={200} />
       </div>
       <div className='pb-6'>
         <Progressbar key={5} category="Personal Visit" nos={800} />
       </div>
       <div className='pb-6'>
         <Progressbar key={8} category="Repair & Maintenance" nos={50} />
       </div>
      </div>
     <div className='text-xs font-medium cursor-pointer text-primary-gray-500'>
       VIEW MORE   {'  >'}
     </div>
    </div>
  )
}

export default Purposebox