import React from 'react'
import './pharmacy.css'

const Pharmacy = () => {
  return (
    <div className="pharmacy-container">
      <h1 className="pharmacy-header">Pharmacy Department</h1>
      <p className="pharmacy-text">
        Pharmacy Department page.
      </p>
      <a href="#/policy" className="back-link">Back to Policy</a>
    </div>
  )
}

export default Pharmacy