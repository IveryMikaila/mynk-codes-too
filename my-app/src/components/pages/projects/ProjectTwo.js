import React from 'react'
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";

const ProjectTwo = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
        <motion.div className="progress-bar" style={{ scaleX }} />
    <Link to={'/'} className='pageTwoLogo'>
Mynk <br/>
Codes<br />
 too.
</Link>
<div className='projectTwoFullPage'>
  {/* Back Arrow */}
 <Link className='projectTwo-backBtn' to={'/'}>
 <svg  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
 </Link>
 {/* Main Section */}
 <div className='space-div'></div>
 <div className='projectTwoPageContainer'>
  <h1 className='pgTwoHeading'>job-list </h1>


 
  <div className='pgTwoDescription'>
  <div className='description1One'>
<h1>job-list is a prototype mobile IOS app I created that helps you find and apply to local jobs perfect for you.</h1>
<p>This app was designed with an intuitive layout to help the job search experinece less stressfull.</p>
  </div>
  <div className='description2Two'>
<p>The main technologies I used in this project include React Native, J Search API, and Expo.Go for deployment.</p>
  </div>
  <div className='description3Three'>
<Link target='_blank' to={'https://expo.dev/@mdesigns/joblist-react?serviceType=classic&distribution=expo-go'}>job-list App</Link>
<p className='d3ThreeP'>job-list</p>
<p>Role:</p>
<p className='d3ThreeP'>Front-end Developer</p>
  </div>
</div>
   
 <div className='projectTwoFooter'>
  <h2>next project</h2>
  <Link className='pojectTwoFooterLink' to={"/work/weather-app"}>weather-app</Link>
 </div>
 </div>
 <div className='space-div'></div>
</div>
</>
  )
}

export default ProjectTwo;