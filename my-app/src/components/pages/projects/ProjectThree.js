import React from 'react'
import {Link} from 'react-router-dom';
import '../../styles/Pages.css'
import { motion, useScroll, useSpring } from "framer-motion";
import PageTransition from '../PageTransition';


const ProjectThree = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    {/* Page Transition wrapper */}
      <PageTransition>
        {/* Scrollbar Progress animation */}
        <motion.div className="progress-bar" style={{ scaleX }} />
        {/* Page logo */}
    <Link to={'/'} className='pageLogo'>
Mynk <br/>
Codes<br />
 too.
</Link>
<div className='projectOneFullPage'>
  {/* Back Arrow */}
 <Link className='project-backBtn' to={"/work/job-list"}>
 <svg  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
 </Link>

 {/* Main Section */}
 <div className='space-div'></div>
 <div className='projectPageContainer'>
 <h1 className='pgOneHeading'>Weather App </h1> 
<div className='pgOneDescription'>
  <div className='description1'>
<h1>My Weather Web App was created to convieniently check the weather in your local residence or 1,000 miles away.  </h1>
<p>This app was designed to help users keep track of tempterature, wind-speed, humidity, and the weekly forecast all in one place!</p>
  </div>
  <div className='description2'>
<p>The technologies I used in this project include Javascript, HTML5, and CSS3.</p>
  </div>
  <div className='description3'>
<Link target='_blank' to={'https://www.shecodes.io/workshops/shecodes-plus-a9438d66-f87b-4699-8cad-5a5414e42010/projects/696627'}>Link to Actual Project</Link>
<p className='d3P'>Weather App</p>
<p>Role:</p>
<p className='d3P'> Web Designer, Front-end Developer</p>
  </div>
</div>

{/* Page Footer */}
 <div className='projectOneFooter'>
  <h2>next project</h2>
  <Link className='pojectOneFooterLink' to={"/work/boyblondey"}>boy blondey</Link>
 </div>
 </div>
 {/* Page spacer */}
 <div className='space-div'></div>
</div>
</PageTransition>
</>
  )
}

export default ProjectThree;