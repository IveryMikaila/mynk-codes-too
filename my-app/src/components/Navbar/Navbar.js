import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData'
import '../styles/Navbar.css'
import resume from '../../assets/images/IveryMikailaResume.pdf'

const Navbar = () => {
  console.log(document.querySelectorAll('.colorLinks'));
  // Logic Code for Sidebar and About Page Section
  const[sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const[about, setAbout] = useState(false);
  const showAbout = () => setAbout(!about);

  const[navAbout, setNavAbout] = useState(false);
  const showNavAbout = () => setNavAbout(!navAbout);

  // Conditional Statements for Different Pages
    const location = useLocation();
  function differentPages (){
    let hamburgerMenu = document.querySelector('.menu-svg');
    let sidebar = document.querySelector('.sideBar');
    let aboutSection = document.querySelector('.aboutSection');
let navAboutSection = document.getElementById('navbarAboutSection');
if (location.pathname === "/work/candyl" || location.pathname === "/work/weather-app") {
  navAboutSection.style.backgroundColor = "rgba(0,0,0,.85)";
  hamburgerMenu.style.color = '#fff';
  sidebar.style.backgroundColor = "rgba(0,0,0,.85)";
  sidebar.style.color ='#fff'
  aboutSection.style.backgroundColor ="rgba(0,0,0,.85)";
  aboutSection.style.color='#fff';
  document.querySelector('.footnote').style.color ='#fff'
  document.getElementsByClassName('colorLinks')[0].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[1].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[2].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[3].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[4].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[5].style.color= "#fff";
  document.getElementsByClassName('colorLinks')[6].style.color= "#fff";
  document.getElementsByClassName('colorLinks')[7].style.color= "#fff";
}
if(location.pathname === "/work/job-list" || location.pathname === "/work/boyblondey"){
  navAboutSection.style.backgroundColor = "rgba(255,255,255,.85)";
  navAboutSection.style.color = "#000";
  hamburgerMenu.style.color = '#000';
  sidebar.style.backgroundColor = "rgba(255,255,255,.85)";
  sidebar.style.color ='#000'
  aboutSection.style.backgroundColor ="rgba(255,255,255,.85)";
  aboutSection.style.color='#000';
  document.querySelector('.footnote').style.color ='#000';
  document.getElementsByClassName('colorLinks')[0].style.color=  "#000";
  document.getElementsByClassName('colorLinks')[1].style.color=  "000";
  document.getElementsByClassName('colorLinks')[2].style.color=  "#000";
  document.getElementsByClassName('colorLinks')[3].style.color=  "#000";
  document.getElementsByClassName('colorLinks')[4].style.color=  "#000";
  document.getElementsByClassName('colorLinks')[5].style.color= "#000";
  document.getElementsByClassName('colorLinks')[6].style.color= "#000";
  document.getElementsByClassName('colorLinks')[7].style.color= "#000";
}
if(location.pathname === '/'){
  navAboutSection.style.backgroundColor = "rgba(72,1,255,.85)";
  navAboutSection.style.color = "#fff";
  hamburgerMenu.style.color = '#fff';
  sidebar.style.backgroundColor =  "rgba(72,1,255,.85)";
  sidebar.style.color ='#fff'
  aboutSection.style.backgroundColor=  "rgba(72,1,255,.85)";
  aboutSection.style.color='#fff';
  document.querySelector('.footnote').style.color ='#fff';
  document.getElementsByClassName('colorLinks')[0].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[1].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[2].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[3].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[4].style.color=  "#fff";
  document.getElementsByClassName('colorLinks')[5].style.color= "#fff";
  document.getElementsByClassName('colorLinks')[6].style.color= "#fff";
  document.getElementsByClassName('colorLinks')[7].style.color= "#fff";
}
}

function changeWhitePages (){
  let navBar = document.getElementById('navBar');
  if(location.pathname === "/work/job-list" || location.pathname === "/work/boyblondey"){
    navBar.style.color = "#000";
    document.getElementsByClassName('changeToWhite')[0].style.color= "#000";
    document.getElementsByClassName('changeToWhite')[1].style.color= "#000";
    document.getElementsByClassName('changeToWhite')[2].style.color= "#000";
    document.getElementsByClassName('changeToWhite')[3].style.color= "#000";
    document.getElementsByClassName('changeToWhite')[4].style.color= "#000";
    document.getElementsByClassName('changeToWhite')[5].style.color= "#000";
  }
    else{
      navBar.style.color = "#fff";
      document.getElementsByClassName('changeToWhite')[0].style.color=  "#fff";
      document.getElementsByClassName('changeToWhite')[1].style.color=  "#fff";
      document.getElementsByClassName('changeToWhite')[2].style.color=  "#fff";
      document.getElementsByClassName('changeToWhite')[3].style.color=  "#fff";
      document.getElementsByClassName('changeToWhite')[4].style.color=  "#fff";
      document.getElementsByClassName('changeToWhite')[5].style.color= "#fff";
    }
  }

useEffect(()=>{
  differentPages();
  changeWhitePages();
});
// Actual Code for Navbar Component
  return (
  <>
{/* Navigation Bar */}
<div id='navBar' className='navBar'>
  <div className='navLeft'>
    <div className='navDescription fnt-weight'>
      Portfolio of Mikaila Ivery <br />
      Front-end Developer
    </div>
    <div className='navLocation fnt-weight'>
      Brooklyn, New York<br />
    <Link className='changeToWhite' to={`mailto:iverymikaila@gmail.com`}>
      iverymikaila@gmail.com
    </Link>
    </div>
    <div className='navGroup'>
   <Link className='changeToWhite' onClick={showNavAbout} to={'#'}><span className='fnt-weight'>01</span> about</Link>
   <a download='IveryMikaila_Resume' className='changeToWhite' href={resume}><span className='fnt-weight'>02</span> resume</a>
    </div>
  </div>
  <div className='navRight'>
  <div className='navGroup'>
   <Link target='_blank' className='changeToWhite' to={'https://www.linkedin.com/in/mikaila-ivery-259218223/'}><span className='fnt-weight'>03</span> linkedin</Link>
   <Link target='_blank' className='changeToWhite' to={'https://www.youtube.com/watch?v=hMif-EdLGAs&t=4s&ab_channel=MikailaIvery'}><span className='fnt-weight '>04</span> youtube</Link>
   <Link target='_blank' className='changeToWhite' to={'https://github.com/IveryMikaila'}><span className='fnt-weight'>05</span> github</Link>
    </div>
  </div>
</div>
{/* About Section in NavBar */}
<div id='navbarAboutSection' className={navAbout ? 'navAboutSection active' : 'navAboutSection'}>
<svg className='navAbout-back' onClick={showNavAbout} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
<div className='mynkContainer'>
  <div className='mynkContainer1'>
 <h1 className='navAboutHeadline'>
 Solution-driven individual with the priority of delivering exceptional web expereinces. Technically proficient with more than 1 year of frontend development experience. Skilled in using web technologies such as HTML5, CSS3, Javascript, React Js, and more.
 </h1>
 <p className='navAboutP'>
 I'm a frontend developer based in Brooklyn, New York with certification in advanced React Development. My name is Mikaila Ivery but I go by 'Mynk Codes too' because I believe women experience unwarranted bias in the tech industry. 
 </p>
 <p className='navAboutP'>
 It all started during my last semester in college. I attended a free SheCodes introduction course back in 2021. The rest is history. Not only did I graduate with my associate's degree from the Fashion Institute of Technology that year, but also earned my first certificate in Javascript. Check out my She Codes journey on the homepage. As a proud She Codes alumni my goal is to demolish the gender gap in a male-dominated industry because we code too.
 </p>
 </div>
 <div className='mynkContainer2'>
 <h2 className='navAbouth2'>Education and Certifications</h2>
 <ul className='navAboutList'>
  <li className='navAboutItem'>
<span className='fnt-weight'> 2019 to 2022</span> - Fashion Institute of Technology
<p className='navAboutListItemP'>AAS in Advertsing Marketing Communications <br/> National Socirty of Leadership and Success (NSLS) Member</p>
  </li>
  <li className='navAboutItem'>
<span className='fnt-weight'> 2021 to 2022</span> - She Codes Workshops
<p className='navAboutListItemP'>Advanced React Development <br/> Certificate ID: d612b3f586475714368519fef0c7cb09 </p>
  </li>
  <li className='navAboutItem'>
<span className='fnt-weight'> 2021</span> - National Society of Leadership and Success
<p className='navAboutListItemP'>Foundations of Leadership Certificate </p>
  </li>
 </ul>
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
    <Link target='_blank' className='menu-email colorLinks' to={`mailto:iverymikaila@gmail.com`}>iverymikaila@gmail.com</Link>
  </p>
    </div>
<ul className='sideBar-items'>
  <li className='sideBar-item aboutSectionLink' onClick={showAbout}>
    <span className='fnt-weight'>01</span> about
  </li>
  <li className='sideBar-item colorLinks'>
    <a className='colorLinks' href={resume} download={'IveryMikaila_Resume'}>
    <span className='fnt-weight'>02</span> resume
    </a>
  </li>
{SidebarData.map((item,index) =>{
  return(
       <li  onClick={showSidebar} key={index} className={item.cName}>
      <Link className='colorLinks' target='_blank' to={item.path} >
      <div> <span className='fnt-weight'>{item.number}</span> {item.title}</div>
      </Link>
    </li>
  )
})}
</ul>
    </div>
    <div className='footnote'>
      Copyright @2023 Mynk Codes too. All rights reserved.<br/>
      <div>Font made from <Link className='colorLinks' target='_blank' to="http://www.onlinewebfonts.com">oNline Web Fonts</Link>is licensed by CC BY 3.0</div>
    </div>
</nav>
{/* About Section in Sidebar */}
<div className={about ? 'aboutSection active' : 'aboutSection'}>
<svg className='about-back' onClick={showAbout} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
 <h1 className='aboutHeadline'>
 Solution-driven individual with the priority of delivering exceptional web expereinces. Technically proficient with more than 1 year of frontend development experience. Skilled in using web technologies such as HTML5, CSS3, Javascript, React Js, and more.
 </h1>
 <p className='aboutP'>
 I'm a frontend developer based in Brooklyn, New York with certification in advanced React Development. My name is Mikaila Ivery but I go by 'Mynk Codes too' because I believe women experience unwarranted bias in the tech industry. 
 </p>
 <p className='aboutP'>
 It all started during my last semester in college. I attended a free SheCodes introduction course back in 2021. The rest is history. Not only did I graduate with my associate's degree from the Fashion Institute of Technology that year, but also earned my first certificate in Javascript. Check out my She Codes journey on the homepage. As a proud She Codes alumni my goal is to demolish the gender gap in a male-dominated industry because we code too.
 </p>
 <h2 className='abouth2'>Education and Certifications</h2>
 <ul className='aboutList'>
  <li className='aboutItem'>
<span className='fnt-weight'> 2019 to 2022</span> - Fashion Institute of Technology
<p className='aboutListItemP'>AAS in Advertsing Marketing Communications <br/> National Socirty of Leadership and Success (NSLS) Member</p>
  </li>
  <li className='aboutItem'>
<span className='fnt-weight'> 2021 to 2022</span> - She Codes Workshops
<p className='aboutListItemP'>Advanced React Development <br/> Certificate ID: d612b3f586475714368519fef0c7cb09 </p>
  </li>
  <li className='aboutItem'>
<span className='fnt-weight'> 2021</span> - National Society of Leadership and Success
<p className='aboutListItemP'>Foundations of Leadership Certificate </p>
  </li>
 </ul>
</div>
  </>
  )
}

export default Navbar;