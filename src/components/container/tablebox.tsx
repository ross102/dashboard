import React from 'react'

function Tablebox() {
    const styles = {
        responsiveness: `xl:w-[859px] lg:w-[670px] md:w-[500px]`,
        style: `min-h-[328px] rounded-[5px] border-primary-gray-200 border bg-primary-white` 
        
       } 
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
      Tablebox
    </div>
  )
}

export default Tablebox