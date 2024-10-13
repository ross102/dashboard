import React from 'react'
import Chartbox from './chartbox'
import Upcomingbox from './upcomingBox'
import Purposebox from './purposeBox'
import Tablebox from './tablebox'
import FrontDeskOfficers from './frontdesk'

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

export const TableContainer = () => {
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