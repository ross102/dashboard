import React from 'react'
import Chartbox from './chartbox'
import Upcomingbox from './upcomingBox'
import Purposebox from './purposeBox'
import Tablebox from './tablebox'
import FrontDeskOfficers from './frontdesk'
import VisitorTablebox from './visitorstablebox'
import UsersTablebox from './usersTablebox'

export const ChartContainer = () => {
    return (
      <div>
        <Chartbox />
      </div>
    )
} 

export const PurposeContainer = () => {
    return (
      <div>
        <Purposebox />
      </div>
    )
} 

export const UpcomingContainer = () => {
    return (
      <div>
        <Upcomingbox />
      </div>
    )
} 

export const DashboardTableContainer = () => {
    return (
      <div>
       <Tablebox />
      </div>
    )
} 

export const FrontDeskContainer = () => {
  return (
    <div>
     <FrontDeskOfficers />
    </div>
  )
} 

export const VisitorsTableContainer = () => {
  return (
    <div>
     <VisitorTablebox />
    </div>
  )
} 

export const UsersTableContainer = () => {
  return (
    <div>
     <UsersTablebox />
    </div>
  )
} 