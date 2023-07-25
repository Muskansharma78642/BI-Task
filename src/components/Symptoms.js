import React from 'react'

const Symptoms = () => {
    var imageName = require('../assets/symptoms.png')

  return (
    <div className='symptomsCard'>
        <img src={imageName} alt='Symptoms Image'/>
    </div>
  )
}

export default Symptoms
