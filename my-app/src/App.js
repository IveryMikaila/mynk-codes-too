import React from "react";
import { Routes,Route, useLocation } from "react-router-dom";
import { AnimatePresence} from 'framer-motion'

//Componenets 
import ScrollToTop from './components/pages/ScrollToTop';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home';
import ProjectOne from './components/pages/projects/ProjectOne';
import ProjectTwo from './components/pages/projects/ProjectTwo';
import ProjectThree from './components/pages/projects/ProjectThree';
import ProjectFour from './components/pages/projects/ProjectFour';


function App() {
const location = useLocation();

  return (
<div div className="App">
<ScrollToTop />
<Navbar />
<AnimatePresence initial={false} mode="wait">
<Routes location={location} key={location.pathname}>
  <Route path="/" element={<Home/>} />
  <Route path="/work/candyl" element={<ProjectOne />} />
  <Route path="/work/job-list" element={<ProjectTwo />} />
  <Route path="/work/weather-app" element={<ProjectThree />} />
  <Route path="/work/boyblondey" element={<ProjectFour />} />
  <Route path="https://www.shecodes.io/graduates/28712-mikaila-ivery" />
</Routes>
</AnimatePresence>
</div>
  );
}

export default App;
