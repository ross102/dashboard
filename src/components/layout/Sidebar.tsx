import React from 'react'
import Logo from "../../assets/icons/dashboard-sidebar-icons/logo.svg"
import { navdata } from '../utils/SidebarData'
import { getActiveUrl } from '../../utils/utils'

function Sidebar() {

 const styles = {
   navClassNames: `flex  pl-4 items-center gap-[19px]  h-[54px]
    rounded-[5px]  text-primary-white  hover:bg-primary-white hover:mr-1 hover:text-accent transition-all duration-6000 ease-in-out hover:mt-1`,

    activeNavClassnames: `flex  pl-4 mr-1 items-center gap-[19px]  h-[54px]
    rounded-[5px]  bg-primary-white text-accent`,

   iconClassNames: "w-[18px] h-[18px] hover:text-accent"
  }

  return (
    // id for the sidebar image background
    <div id="sidebar-background"  className="fixed  bg-cover bg-center inset-y-0 left-0 z-30 w-[278px] bg-accent h-[65rem] shadow-lg lg:block">
    <div className="p-4">
        <div className="w-[100%] flex justify-center text-center"><img className='w-[99px] h-[79px]' src={Logo} alt="VMS Logo"/></div>
        <ul className="mt-14 w-[254px] ">
          {
            navdata?.map((el,i)=> {
              return (
                <div key={i}>
                  <li ><a href={el.link} className={getActiveUrl(el?.link) ? styles.activeNavClassnames : styles.navClassNames}>
                  <span className='mt-1 '>
                    {getActiveUrl(el?.link) ? el.activeIcon: el.icon }
                    </span>{el.label}</a></li>
                </div>
              )
            })
          }
           
        </ul>
    </div>
</div>
  )
}

export default Sidebar