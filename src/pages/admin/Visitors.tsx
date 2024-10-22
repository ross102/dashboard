import React from 'react'
import Card from '../../components/cards'
import { VisitorsTableContainer } from '../../components/container'

function Visitors() {
  return (
    <section>
      <div className='flex-col mt-[11px] ml-[16px]'>
        <VisitorsTableContainer />
       </div>
    </section>
  )
}

export default Visitors