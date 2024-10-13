import React from 'react'
import { ReactComponent as DashIcon} from "../../assets/icons/dashboard-sidebar-icons/material-symbols_dashboard-outline.svg"
import { ReactComponent as VisitorsIcon} from "../../assets/icons/dashboard-sidebar-icons/fluent_building-people-20-regular.svg"
import {ReactComponent as UsersIcon} from "../../assets/icons/dashboard-sidebar-icons/fluent_people-settings-20-regular.svg"
import {ReactComponent as ReportsIcon} from "../../assets/icons/dashboard-sidebar-icons/tabler_report.svg"

// sidebar-svgicon is the custom styling/classname for svg component.
// it can be seen in the global.css file

export const navdata = [
    {
        label: 'Dashboard',
        icon: <DashIcon className='w-[18px] h-[18px] sidebar-svgicon' />,
        activeIcon: <DashIcon className='w-[18px] h-[18px] sidebar-svgicon-active' />,
        link: "/admin/dashboard",
        alt: "dashboard sidebar icon"
    },
    {
        label: 'Visitors',
        icon: <VisitorsIcon className='w-[18px] h-[18px] sidebar-svgicon'  />,
        link: "/admin/visitors",
        alt: "visitors sidebar icon"
    },
    {
        label: 'User Management',
        icon: <UsersIcon className='w-[18px] h-[18px] sidebar-svgicon' />,
        link: "/admin/user-management",
        alt: "user sidebar icon"
    } ,
    {
        label: 'Reports',
        icon: <ReportsIcon className='w-[18px] h-[18px] sidebar-svgicon' />,
        link: "/admin/reports",
        alt: "reports sidebar icon"
    }
]
 