import React from 'react'
import {Link} from 'react-router-dom';
import '../../styles/Pages.css'
import { motion, useScroll, useSpring } from "framer-motion";
import Video from '../../video/Video';
import candylVideo from '../../../assets/videos/candylPage.mp4'

const ProjectOne = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX }} />
    <Link to={'/'} className='pageLogo'>
Mynk <br/>
Codes<br />
 too.
</Link>
<div className='projectOneFullPage'>
  {/* Back Arrow */}
 <Link className='project-backBtn' to={'/'}>
 <svg  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
 </Link>
{/* Video Animation Section */}
<Video source={candylVideo} />

 {/* Main Section */}
 <div className='space-div'></div>
 <div className='projectPageContainer'>
  <h1 className='pgOneHeading'>candyl </h1>
 
<div className='pgOneDescription'>
  <div className='description1'>
<h1> candyl is an ecommerce site I created that sells mock-up candle products. </h1>
<p>The website was designed with a very simple user inferface that makes for a quick and efficent shopping experience.</p>
  </div>
  <div className='description2'>
<p>The main technologies I used for this project include Commerce js backend API, React js, Stripe Test Checkout Intergration API, GSAP Javascript Animation, Bootstrap, and Material UI.</p>
  </div>
  <div className='description3'>
<Link target='_blank' to={'https://candyl.netlify.app/'}>candyl.netlify.app</Link>
<p className='d3P'>candyl</p>
<p>Role:</p>
<p className='d3P'>Web Designer, Front-end Developer </p>
  </div>
</div>

{/* Page Footer */}
 <div className='projectOneFooter'>
  <h2>next project</h2>
  <Link className='pojectOneFooterLink' to={"/work/job-list"}>job-list</Link>
 </div>


 </div>
 <div className='space-div'></div>
</div>
</>
  )
}

export default ProjectOne;