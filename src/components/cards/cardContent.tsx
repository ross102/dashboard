import React from 'react'

interface CardContentProps {
    title: string
    nos: number
    icon: string
} 

function CardContent({title, nos, icon}: CardContentProps) {

  return (
    <div className='flex justify-between p-4'>
        <div className='flex-col '>
           <div className='text-sm font-medium text-primary-gray-500'>
             {title}
           </div>
           <div className='2lg:text-2xl md:text-lg mt-[11px] font-extrabold text-accent-text'>
              {nos}
           </div>
        </div>
        <div>
          <img className='h-8 w-8' src={icon} alt="total users" />
        </div>
    </div>
  )
}

export default CardContent