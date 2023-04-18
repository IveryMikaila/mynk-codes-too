import React from 'react'
import '../styles/Video.css'


const Video = ({source}) => {
  return (
    <>
    <div id="videoContainer">
  <video id='video' muted autoPlay >
          <source src={source} type="video/mp4" />
  </video>
</div>
</>
  )
}

export default Video;