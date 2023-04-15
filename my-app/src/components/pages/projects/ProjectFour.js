import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Pages.css'
import { motion, useScroll, useSpring } from "framer-motion";

const ProjectFour = () => {
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
  <h1 className='pgTwoHeading'>boy blondey</h1>


  <div className='pgTwoDescription'>
  <div className='description1One'>
<h1>I currently work as a freelance Front-end Developer at Boy Blondey Co, where I write custom code to intergrate into Shopify Liquid Theme templates.</h1>
<p>The site designs are based on what my client request.</p>
  </div>
  <div className='description2Two'>
<p>The main languages I use to bring the client's vison to life are HTML5, CSS3, and Javascript.</p>
  </div>
  <div className='description3Three'>
<Link target='_blank' to={'https://boyblondey.com/'}>boyblondey.com</Link>
<p className='d3ThreePd3ThreeP'>Boy Blondey</p>
<p>Role:</p>
<p className='d3ThreePd3ThreeP'>Front-end Developer</p>
  </div>
</div>

  <div className='projectTwoFooter'>
  <h2>next project</h2>
  <Link className='pojectTwoFooterLink' to={"/work/candyl"}>candyl</Link>
 </div>
 </div>
 <div className='space-div'></div>
</div>
</>
  )
}

export default ProjectFour;