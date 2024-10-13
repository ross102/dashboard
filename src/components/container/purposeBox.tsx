import React from 'react'

function Purposebox() {
    const styles = {
        responsiveness: 'xl:w-[253px] md:w-[200px]',
        style: 'h-[328px] rounded-[5px] border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness}  ${styles.style}`}>
      Purposebox
    </div>
  )
}

export default Purposebox