import React, { useState } from 'react'
import './Video.css'

const Video = () => {
  const videos = [
    {
      id: 1,
      title: 'EMR',
      src: '' // add Cloudinary later
    },
    {
      id: 2,
      title: 'INVENTORY - DEPT. CONSUMPTION PROCESS',
      src: 'https://res.cloudinary.com/dy5eigldg/video/upload/v1776675504/INVENTORY_-_DEPT._CONSUMPTION_PROCESS_mwvffi.mp4'
    },
    {
      id: 3,
      title: 'WARD - HOW TO SEND DISCHARGE MEDICATION FROM WARD',
      src: 'https://res.cloudinary.com/dy5eigldg/video/upload/v1776675557/WARD_-_HOW_TO_SEND_DISCHARGE_MEDICATION_FROM_WARD_gor6oz.mp4'
    }
  ]

  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div className="video-container">
      <h1 className="video-header">
        IT Training Videos <br /><br />
        {selectedVideo ? selectedVideo.title : ''}
      </h1>

      {!selectedVideo ? (
        <div className="video-list">
          {videos.map((video) => (
            <button
              key={video.id}
              className="video-button"
              onClick={() => setSelectedVideo(video)}
            >
              {video.title}
            </button>
          ))}
        </div>
      ) : (
        <div className="video-player">
          {selectedVideo.src ? (
            <video width="100%" controls className="video-iframe">
              <source src={selectedVideo.src} type="video/mp4" />
            </video>
          ) : (
            <p>No video available</p>
          )}

          <button onClick={() => setSelectedVideo(null)} className='back-link'>
            Back to Video List
          </button>
        </div>
      )}

      <a href="#/department/it" className="back-button">
        Back to IT Department
      </a>
    </div>
  )
}

export default Video