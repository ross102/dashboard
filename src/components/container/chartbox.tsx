import React from 'react'

function Chartbox() {
    const styles = {
        responsiveness: 'xl:w-[859px] lg:w-[670px] md:w-[580px] ',
        style: 'h-[328px] rounded-[5px] overflow-hidden border-primary-gray-200 border bg-primary-white'
        
       } 
  return (
    <div className={`${styles.responsiveness}   ${styles.style}`}>
      chartbox
    </div>
  )
}

export default Chartbox