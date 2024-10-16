import React from 'react'
import FilterIcon from "../../../assets/icons/dashboard-table-icons/bi_filter.svg"

function Filter() {
  return (
    <div className='h-[48px] relative flex-col ml-4  rounded-[10px] border-2
     text-primary-gray-500 font-medium border-primary-gray-200 '>
          <div className='flex gap-2 p-2 cursor-default items-center w-[87px] h-[48px]'>
           <img src={FilterIcon} alt="filter icon" className='w-6 h-6' /> 
           <div>Filter</div>
         </div>
          <div className="hidden absolute p-3 top-8 cursor-default 
          border-1 bg-primary-gray-200 w-[200px] rounded-md flex-col gap-3">
            <div className='hover:bg-primary-white p-3 rounded-md'>Incoming</div>
            <div>Checked In</div>
            <div>Checked out</div>
            <div>Cancelled</div>
          </div>
    </div>
   
  )
}

export default Filter