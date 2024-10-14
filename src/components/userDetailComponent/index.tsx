import React from 'react'
import UserDetailComponent from './UserDetailComponent'
import { UserDetailType } from './UserDetailComponent'

export const UserDetail = ({username, userInitials, phone, date}: UserDetailType) => {
  return (
     <UserDetailComponent username={username} userInitials={userInitials} phone={phone} date={date} />
  )
}

