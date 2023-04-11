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
<svg className='menu-svg' onClick={showSidebar} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
{/* Sidebar */}
<nav className={sidebar ? 'sideBar active' : 'sideBar'}>
<svg className='sidebar-close' onClick={showSidebar}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
    <div className='menu-container'>
    <div className='sidebarLeft'>
      <p className='fnt-weight'>
      Portfolio of Mikaila Ivery <br/>
      Front-end Developer
      </p>
  <p>
    Brooklyn, New York <br/>
    <Link className='menu-email' to={`mailto:iverymikaila@gmail.com`}>iverymikaila@gmail.com</Link>
  </p>
    </div>
<ul className='sideBar-items' onClick={showSidebar} >
{SidebarData.map((item,index) =>{
  return(
    <li key={index} className={item.cName}>
      <Link to={item.path} >
      <div> <span className='fnt-weight'>{item.number}</span> {item.title}</div>
      </Link>
    </li>
  )
})}
</ul>
    </div>
    <div className='footnote'>
      Copyright @2023 Mynk Codes too. All rights reserved.
    </div>
</nav>
  </>
  )
}

export default Navbar;