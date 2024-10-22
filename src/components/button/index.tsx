import React from 'react'
import UserIcon from "../../assets/icons/dashboard-table-icons/la_user-check.svg"

export interface ButtonPrimaryType {
    height: string
    width: string
    className: string,
    text: string
    handleClick?: () => void
}
// width: 162,
// height: 48

function ButtonPrimary({height, width, className, text, handleClick} : ButtonPrimaryType) {
  return (
    <div>
        <button
         onClick={handleClick}
         className={`${className} rounded-[5px] 
          text-primary-white flex p-3 gap-2 hover:animate-pulse font-medium text-base`}
         style={{
            height,
            width
        }}>
         <span><img src={UserIcon} alt="Create user icon" className='w-6 h-6'  /></span>{text}
        </button>
    </div>
  )
}

export default ButtonPrimary