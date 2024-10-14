import React from 'react'
import DashboardHeading, {Title, SmallBoxTitleProps } from './Dashboard'


export const WelcomeHeading = () => {
  return (
     <DashboardHeading />
  )
}

export const SmallBoxTitle = ({ title }: SmallBoxTitleProps) => {
  return (
     <Title title={title} />
  )
}
