import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Componenets 
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home';
import ProjectOne from './components/pages/projects/ProjectOne';
import ProjectTwo from './components/pages/projects/ProjectTwo';
import ProjectThree from './components/pages/projects/ProjectThree';
import ProjectFour from './components/pages/projects/ProjectFour';


function App() {
  return (
<div div className="App">
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/work/candyl" element={<ProjectOne />} />
  <Route path="/work/job-list" element={<ProjectTwo />} />
  <Route path="/work/weather-app" element={<ProjectThree />} />
  <Route path="/work/boyblondey" element={<ProjectFour />} />
  <Route path="https://www.shecodes.io/graduates/28712-mikaila-ivery" />
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
