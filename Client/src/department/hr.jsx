import React from 'react'
import './hr.css'

const Hr = () => {
  return (
    <div className="hr-container">
      <h1 className="hr-header">HR Department</h1>
      <p className="hr-text">
        Human Resources Department page.
      </p>
      <a href="#/policy" className="back-link">Back to Policy</a>
    </div>
  )
}

export default Hr