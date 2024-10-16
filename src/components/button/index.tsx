import React from 'react'
import UserIcon from "../../assets/icons/dashboard-table-icons/la_user-check.svg"

export interface ButtonPrimaryType {
    height: string
    width: string
    className: string,
    text: string
}
// width: 162,
// height: 48

function ButtonPrimary({height, width, className, text} : ButtonPrimaryType) {
  return (
    <div>
        <button
         className={`${className} rounded-[5px] bg-accent
          text-primary-white flex p-3 gap-2  font-medium text-base`}
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