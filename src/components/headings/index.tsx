import React from 'react'
import DashboardHeading, {Title, SmallBoxTitleProps } from './Dashboard'


export const WelcomeHeading = () => {
  return (
     <DashboardHeading />
  )
}

export const SmallBoxTitle = ({ firstTitle }: SmallBoxTitleProps) => {
  return (
     <Title firstTitle={firstTitle} />
  )
}
