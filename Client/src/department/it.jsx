import React from 'react'
import './it.css'

const It = () => {
  return (
    <div className="it-container">
      <h1 className="it-header">
        Welcome <br /> to <br /> Department: <span className='itspan'>Information Technology</span>
      </h1>

      {/* IT SOP Button */}
      <button
        className="itsop-btn"
        type="button"
        onClick={() => (window.location.hash = '#/page/itsoppage')}
      >
        IT SOP
      </button>

      {/* IT Policy Button */}
      <button
        className="itpolicy-btn"
        type="button"
        onClick={() => (window.location.hash = '#/page/itpolicypage')}
      >
        IT POLICY
      </button>

      <button
        className="itvedio-btn"
        type="button"
        onClick={() => (window.location.hash = '#/video')}
      >
        IT TRANING VIDEO
      </button>

      {/* Back to Policy */}
      <a href="#/policy" className="back-link">
        Back to Policy
      </a>
    </div>
  )
}

export default It