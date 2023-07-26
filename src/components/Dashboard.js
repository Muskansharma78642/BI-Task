import React from 'react'
import Cases from './Cases'
import Death from './Death'
import Recovered from './Recovered'
import Statistics from './Statistics'
import WorldMap from './WorldMap'
import LiveUpdate from './LiveUpdate'
import Symptoms from './Symptoms'
import VerticalNavbar from './VerticalNavbar'

const Dashboard = () => {
  return (
    <div className='dashboardContainer' >
        <VerticalNavbar />
      <p style={{ marginBottom: '1px', color:'#4329c4'}} ><b>Covid-19</b></p>
      <p style={{ color:'GrayText', fontSize:'9px' }}>Live Tracker Dashboard</p>
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
