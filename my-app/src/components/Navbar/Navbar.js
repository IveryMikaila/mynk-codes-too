import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData'
import '../styles/Navbar.css'

const Navbar = () => {
  const[sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
  <>
{/* Navigation Bar */}
<div className='navBar'>
  <div className='navLeft'>
    <div className='navDescription fnt-weight'>
      Portfolio of Mikaila Ivery <br />
      Front-end Developer
    </div>
    <div className='navLocation fnt-weight'>
      Brooklyn, New York<br />
    <Link to={`mailto:iverymikaila@gmail.com`}>
      iverymikaila@gmail.com
    </Link>
    </div>
    <div className='navGroup'>
   <Link to={'/#about'}><span className='fnt-weight'>01</span> about</Link>
   <Link to={'/#resume'}><span className='fnt-weight'>02</span> resume</Link>
    </div>
  </div>
  <div className='navRight'>
  <div className='navGroup'>
   <Link to={'linkedin'}><span className='fnt-weight'>03</span> linkedin</Link>
   <Link to={'instagram'}><span className='fnt-weight'>04</span> instagram</Link>
   <Link to={'github'}><span className='fnt-weight'>05</span> github</Link>
    </div>
  </div>
</div>
{/* Sidebar Menu */}
<div className='sideBar'>
</div>
  </>
  )
}

export default Navbar;