import React, { useState } from 'react'
import './Video.css'
import EMRVideo from '../videos/EMR.mp4'

const Video = () => {
  const videos = [
    {
      id: 1,
      title: 'EMR',
      src: EMRVideo
    },
    {
      id: 2,
      title: 'IT Training Video 2',
      src: ''
    },
    {
      id: 3,
      title: 'IT Training Video 3',
      src: ''
    },
    // Add more with here video files
  ]

  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleVideoClick = (video) => {
    setSelectedVideo(video)
  }

  const handleBackClick = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="video-container">
      <h1 className="video-header">IT Training Videos <br /><br />{selectedVideo ? selectedVideo.title : ''}</h1>

      {!selectedVideo ? (
        <div className="video-list">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <button className="video-button" onClick={() => handleVideoClick(video)}>
                {video.title}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="video-player">
          {/* <h2 className="video-title">{selectedVideo.title}</h2> */}
          <video width="100%" controls className="video-iframe">
            <source src={selectedVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="back-button" onClick={handleBackClick}>
            Back to Video List
          </button>
        </div>
      )}

      <a href="#/department/it" className="back-link">
        Back to IT Department
      </a>
    </div>
  )
}

export default Video