import React from "react";
import TotalUserIcon from "../../assets/icons/dashboard-stats-icons/hugeicons_user-group.svg";
import TotalScheduledIcon from "../../assets/icons/dashboard-stats-icons/mdi_user-block-outline.svg";
import TotalWalkIn from "../../assets/icons/dashboard-stats-icons/mdi_user-check-outline.svg";
import TotalCancelledVisit from "../../assets/icons/dashboard-stats-icons/tdesign_user-time.svg"

interface CardContentProps {
    title: string
    nos: number
    icon: string
} 

export const cardItems = [
    {
        title: 'Total Visitors',
        nos:  867,
        icon: TotalUserIcon,
        // link: "/admin/dashboard",
        // alt: "dashboard sidebar icon"
    },
    {
        title: 'Total Scheduled',
        nos: 500,
        icon: TotalScheduledIcon,
        // link: "/admin/visitors",
        // alt: "visitors sidebar icon"
    },
    {
        title: 'Total Walk-In',
        nos: 430,
        icon: TotalWalkIn,
        // link: "/admin/user-management",
        // alt: "user sidebar icon"
    } ,
    {
        title: 'Total Cancelled Visit',
        nos: 386,
        icon: TotalCancelledVisit,
        // link: 
        // alt: "reports sidebar icon"
    }
]