import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Componenets 
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home';
import ProjectOne from './components/pages/ProjectOne';
import ProjectTwo from './components/pages/ProjectTwo';
import ProjectThree from './components/pages/ProjectThree';
import ProjectFour from './components/pages/ProjectFour';
import ProjectFive from './components/pages/ProjectFive';

function App() {
  return (
<>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/work/candyl" element={<ProjectOne />} />
  <Route path="/work/job-list" element={<ProjectTwo />} />
  <Route path="/work/weather-app" element={<ProjectThree />} />
  <Route path="/work/boyblondey" element={<ProjectFour />} />
  <Route path="/work/facechat" element={<ProjectFive />} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
