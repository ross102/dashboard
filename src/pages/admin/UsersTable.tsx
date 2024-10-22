import React from 'react'
import Card from '../../components/cards'
import { UsersTableContainer } from '../../components/container'

function UserManagement() {
  return (
    <section>
      <div className='flex-col mt-[11px] ml-[16px]'>
        <UsersTableContainer />
       </div>
    </section>
  )
}

export default UserManagement