import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import PageTransition from './PageTransition';


const Home = () => {
  return (
    <PageTransition
    >
  <div className='homePage'>
      <Link to={'/'} className='logo'>
    Mynk <br/>
     Codes<br />
      too.
  </Link>
<ul className='projectList'>
<li className='project'> <div className='projectDate'>2023</div> <Link to={"/work/candyl"}>candyl</Link></li>
<li className='project'> <div className='projectDate'>2023</div> <Link to={"/work/job-list"}>job-list</Link></li>
<li className='project'> <div className='projectDate'>2022</div> <Link to={"/work/weather-app" }>weath-<br/>er app</Link></li>
<li className='project'> <div className='projectDate'>2022</div> <Link to={"/work/boyblondey"}>boy blondey</Link></li>
<li className='project'> <div className='projectDate'>2021</div> <Link to={"https://www.shecodes.io/graduates/28712-mikaila-ivery" } target='_blank'>she codes<br/> workshops</Link></li>
</ul>
  </div>
  </PageTransition>
  )
}

export default Home;