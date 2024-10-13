import React from 'react'

function Upcomingbox() {
    const styles = {
        responsiveness: 'xl:w-[253px] md:w-[200px] ',
        style: 'min-h-[150px] rounded-[5px] border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
      Upcoming box
    </div>
  )
}

export default Upcomingbox