import React from 'react'
import './NoVacancy.css'
import { assets } from '../../assets/assets'

const NoVacancy = () => {
  return (
    <div className='no-vacancy'>
      <div className="quote">
        <p>Hiring close for this role. Please check back later.</p>
        <img src={assets.hiring_closed} alt="" />
      </div>
    </div>
  )
}

export default NoVacancy
