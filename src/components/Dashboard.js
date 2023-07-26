import React from 'react'
import Cases from './Cases'
import Statistics from './Statistics'
import WorldMap from './WorldMap'
import LiveUpdate from './LiveUpdate'
import Symptoms from './Symptoms'
import VerticalNavbar from './VerticalNavbar'

const Dashboard = () => {
  //This component contains all the other components and displays them as a whole
  return (
    <div className='dashboardContainer' >
        <VerticalNavbar />
      <p style={{ marginBottom: '1px', color:'#4329c4', fontSize:'20px'}} ><b>Covid-19</b></p>
      <p style={{ color:'GrayText', fontSize:'9px' }}>Live Tracker Dashboard</p>
      <Cases />
      <Statistics />
      <WorldMap />
      <LiveUpdate />
      <Symptoms />
    </div>
  )
}

export default Dashboard
