import React from 'react'
import VisitorsChart from '../charts'

function Chartbox() {
    const styles = {
        responsiveness: 'xl:w-[859px] lg:w-[670px] md:w-[580px] ',
        style: 'h-[328px] rounded-[5px] px-1 pt-6 pb-2 shadow-sm hover:shadow-xl transition-shadow duration-300  overflow-hidden border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness}   ${styles.style}`}>
      <div className='flex justify-between px-5'>
        <div>
           <h1 className='text-accent-text font-extrabold text-lg'>Visitors Chart</h1>
        </div>
        <div>
          Year 2024
        </div>
      </div>
       <VisitorsChart />
    </div>
  )
}

export default Chartbox