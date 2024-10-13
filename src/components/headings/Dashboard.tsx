import React from 'react'

export interface SmallBoxTitleProps {
  firstTitle: string
} 

function DashboardHeading() {
  return (
    <h1 className='ml-8'><span className='text-base font-extrabold text-accent-text'>Hey Immaculata </span> -
<span className='text-base font-medium text-primary-gray-500'> Welcome with ease and a smile- managing your visitors has never been this simple!</span></h1>
  )
}
// small box dashboard title
export const Title = ({firstTitle}: SmallBoxTitleProps) => {
  return (
    <div className='flex flex-row justify-between'>
      <h4 className='text-accent-text font-extrabold text-xs'>{firstTitle}</h4>
      <div className='text-dark-text font-medium text-xs'>This month</div>
    </div>
  )
}

export default DashboardHeading