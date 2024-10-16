import React from 'react'
import DashboardHeading, {Title, SmallBoxTitleProps, TableBoxTitleProps, TableTitle } from './Dashboard'


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

export const TableBoxTitle = ({ title, subtitle }: TableBoxTitleProps) => {
  return (
     <TableTitle title={title} subtitle={subtitle} />
  )
}