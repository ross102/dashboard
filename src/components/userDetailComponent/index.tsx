import React from 'react'
import UserDetailComponent from './UserDetailComponent'
import TableUserDetailComponent, {TableUserDetailType } from './TableUserDetailCoponent'
import { UserDetailType } from './UserDetailComponent'

export const UserDetail = ({username, userInitials, phone, date, status}: UserDetailType) => {
  return (
     <UserDetailComponent username={username} userInitials={userInitials} phone={phone} date={date} status={status} />
  )
}


export const TableUserDetail = ({username, userInitials, phone, status }: TableUserDetailType) => {
  return (
     <TableUserDetailComponent username={username} userInitials={userInitials} phone={phone} status={status} />
  )
}
