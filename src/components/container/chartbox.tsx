import React from 'react'

function Chartbox() {
    const styles = {
        responsiveness: 'xl:w-[859px] lg:w-[640px] md:w-[500px] 2xl:w-[920px]',
        style: 'h-[328px] rounded-[5px] border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness}  ${styles.style}`}>
      chartbox
    </div>
  )
}

export default Chartbox