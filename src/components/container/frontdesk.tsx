import React from 'react'

function FrontDeskOfficers() {
    const styles = {
        responsiveness: 'xl:w-[253px] lg:w-[190px] 2xl:w-[270px]',
        style: 'min-h-[150px] rounded-[5px] border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
      Frondesk
    </div>
  )
}

export default FrontDeskOfficers