import React from 'react'
import videoFile from '../../assets/bg-video.mp4'

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src={videoFile}
      />
    </div>
  )
}

export default Video
