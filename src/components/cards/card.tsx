import React from 'react'
import CardContent from './cardContent'
import { cardItems } from '../utils/CardContent'

function Card() {
 const styles = {
  responsiveness: 'xl:w-[270px] lg:w-[210px] md:w-[200px]',
  style: 'h-[100px] rounded-[5px]  border-primary-gray-200 border bg-primary-white'
  
 } 
  return (
    <div className='sm:flex-col md:flex-row md:flex xs:gap-2 lg:gap-4 px-1'>
      {
          cardItems?.map((el, i) => {
             return (
              <div className={`${styles.responsiveness} ${styles.style}`}>
                   <CardContent key={i} title={el?.title} nos={el?.nos} icon={el?.icon}  />
            </div>
             )
          })
      }
    </div>
   
  )
}

export default Card