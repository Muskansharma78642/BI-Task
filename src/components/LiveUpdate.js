import React from 'react'
import '../App.css'

const LiveUpdate = () => {
  return (
    <div className='liveUpdate'>
      <p><b>Live Update</b>(1min ago)</p>
      <ul>
        <li><span>2 new cases in Pakistan</span></li>
        <li><span>4 new cases in Singapore</span></li>
        <li><span>1 new cases in Thailand</span></li>
        <li><span>5 new cases in Taiwan</span></li>
        <li><span>8 new cases in Japan</span></li>
        <li><span>1 new cases in Brazil</span></li>
        <li><span>1st new cases in Ecuador</span></li>
        <li><span>1st new cases in Mexico</span></li>
      </ul>
    </div>
  )
}

export default LiveUpdate
