import React from 'react'
import './radiology.css'

const Radiology = () => {
  return (
    <div className="radiology-container">
      <h1 className="radiology-header">Radiology Department</h1>
      <p className="radiology-text">
        Radiology Department page.
      </p>
      <a href="#/policy" className="back-link">Back to Policy</a>
    </div>
  )
}

export default Radiology