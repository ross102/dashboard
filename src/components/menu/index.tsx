import React from 'react'
import type { NavLinkProps } from 'react-router-dom';
import { getActiveUrl } from '../../utils/utils';

function Menu() {
  
    const styles = {
        navClassNames: `
           font-medium text-sm text-primary-gray-500 hover:text-accent`,
     
         activeNavClassnames: `border-b-[4px] border-b-primary-accent-text w-[97px] font-medium text-sm hover:bg-primary-white
            text-accent transition-all duration-300 ease-in-out`,
     
        iconClassNames: "w-[18px] h-[18px] hover:text-accent"
       }

  return (
    <div>
       <ul className='flex gap-7 border-b-2 border-b-primary-gray-200 mt-8'>
       <li><a className={getActiveUrl('/admin/visitors/walk-in') ? styles.activeNavClassnames : styles.activeNavClassnames}
          href={'/admin/visitors/walk-in'}>Walk-in Visitors</a></li>
         <li><a className={getActiveUrl('/admin/visitors/scheduled') ? styles.activeNavClassnames : styles.navClassNames} 
         href={'/admin/visitors/scheduled'}>Scheduled Visitors</a></li>
      
       </ul>
    </div>
  )
}

export default Menu