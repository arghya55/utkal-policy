import React from 'react'
import './finance.css'

const Finance = () => {
  return (
    <div className="finance-container">
      <h1 className="finance-header">Finance Department</h1>
      <p className="finance-text">
        Finance Department page.
      </p>
      <a href="#/policy" className="back-link">Back to Policy</a>
    </div>
  )
}

export default Finance