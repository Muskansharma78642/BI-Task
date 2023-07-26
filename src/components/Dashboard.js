import React from 'react'
import Cases from './Cases'
import Death from './Death'
import Recovered from './Recovered'
import Statistics from './Statistics'
import WorldMap from './WorldMap'
import LiveUpdate from './LiveUpdate'
import Symptoms from './Symptoms'

const Dashboard = () => {
  return (
    <div className='dashboardContainer' >
        
      Dashboard
      <Cases />
      <Death />
      <Recovered />
      <Statistics />
      <WorldMap />
      <LiveUpdate />
      <Symptoms />
    </div>
  )
}

export default Dashboard
