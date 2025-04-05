import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import HealthArea from "./pages/health";
import GovernanceArea from "./pages/internetGovernance";
import AgricultureArea from "./pages/agriculture";
import GenderArea from "./pages/gender";
import ResearchArea from "./pages/research";
import WaterArea from "./pages/water";
import EducationArea from "./pages/education";
import DemocracyArea from "./pages/democracy";
import ConnectivityArea from "./pages/connectivity"
import EntrepreneurshipArea from "./pages/entrepreneurship";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/internet-governance" element={<GovernanceArea/>}/>
          <Route path="/internet-resources" element={<WaterArea/>}/>
          <Route path="/internet-agriculture" element={<AgricultureArea/>}/>
          <Route path="/internet-gender-equality" element={<GenderArea/>}/>
          <Route path="/internet-connectivity-research" element={<ResearchArea/>}/>
          <Route path="/internet-health" element={<HealthArea/>}/>
          <Route path="/internet-education" element={<EducationArea/>}/>
          <Route path="/internet-democracy" element={<DemocracyArea/>}/>
          <Route path="/internet-digitalization" element={<ConnectivityArea/>}/>
          <Route path="/internet-business" element={<EntrepreneurshipArea/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
