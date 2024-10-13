import React from 'react'

export  interface ProgressbarType {
    category: string
    nos: number
}

function Progressbar({category, nos}: ProgressbarType) {

  const width = 190;
  let progressWidth = (nos / 100) + 10
  progressWidth = progressWidth === width ? width : progressWidth

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between'>
        <div className='font-medium text-xs text-dark-text'>
            {category}
        </div>
        <div className='font-medium text-xs text-dark-text'>
              {nos}
        </div>
        </div>
        <div className="w-[190px] bg-gray-200 rounded-full h-4">
           <div className={`bg-accent-text h-[5px] ${progressWidth} rounded-full`}></div>
        </div>
    </div>
  )
}

export default Progressbar