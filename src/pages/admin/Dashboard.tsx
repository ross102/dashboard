import React from 'react'
import Card from '../../components/cards'
import {WelcomeHeading} from '../../components/headings'
import { ChartContainer, FrontDeskContainer, PurposeContainer, TableContainer, UpcomingContainer } from '../../components/container'

function Dashboard() {
  return (
    <section>
      <div className='flex-col '>
        <div className='flex mt-8'>
        <WelcomeHeading />
        </div>
        
        <div className="mt-8 mx-1">
        <Card />
        </div>
      </div>
      <div className="md:flex md:flex-row mx-1 sm:flex-col   mt-6 gap-4">
        <ChartContainer />
        <PurposeContainer />
      </div>
      <div className='md:flex md:flex-row mx-1 sm:flex-col mt-6 gap-4'>
         <TableContainer />
          <div className='flex-col gap-4 '>
          <UpcomingContainer />
          <div className='mt-6'>
          <FrontDeskContainer />
          </div>
          </div>
      </div>
    </section>
  )
}

export default Dashboard