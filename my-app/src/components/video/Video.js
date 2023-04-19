import React,{useState,useEffect, useRef} from 'react';
// import {render} from 'react-dom';
import '../styles/Video.css'

const VideoCode = ({src,scrollHeight})=>{
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [canPlayThrough, setCanPlayThrough] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.load();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [duration]);

  const getCurrentTime = () => {
    const percentScrolled =
      window.scrollY / (scrollHeight - window.innerHeight);
    return duration * percentScrolled;
  };

  const handleScroll = (e) => {
    const time = getCurrentTime();
    setCurrentTime(time);

    if (time < duration) {
      videoRef.current.currentTime = time;
    }
  };
  return (
    <div className="video-container" style={{ height: scrollHeight }}>
      {getCurrentTime() < duration && (
        <small></small>
      )}

      <video
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onLoadedData={() => videoRef.current.pause()}
        onCanPlayThrough={() => setCanPlayThrough(true)}
        ref={videoRef}
        preload="metadata"
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!canPlayThrough && (
        <div className="loader">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

const Video = ({source}) => {

  return (
    <>
     <VideoCode
        scrollHeight={10000}
        src={source}
      />
    {/* <div id="videoContainer">
  <video id='video'muted pause preload='auto' ><source src={source} type="video/mp4" /></video>
</div> */}
</>
  )
}

export default Video;