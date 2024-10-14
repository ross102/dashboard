import React from 'react'

export  interface ProgressbarType {
    category: string
    nos: number
}

function Progressbar({category, nos}: ProgressbarType) {
  
  let percent = nos / 10
  let progressWidth = percent + 'px'

  return (
    <div className='flex flex-col gap-2 cursor-default'>
        <div className='flex flex-row justify-between'>
        <div className='font-medium text-xs text-dark-text'>
            {category}
        </div>
        <div className='font-medium text-xs text-dark-text'>
              {nos}
        </div>
        </div>
        <div className="xl:w-[190px] lg:w-[140px] md:w-[90px] bg-primary-gray border border-primary-gray-200 rounded-full h-1">
        <div style={{ width: progressWidth }} className={`bg-accent-text h-[2px] max-xl:w-[190px] max-lg:w-[140px] max-md:w-[90px] rounded-full`}></div>
     </div>
       
    </div>
  )
}

export default Progressbar