import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./Components/Header"; ####
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";

import Navbars from "./Components/Navbar";

import ScrollAnimation from "./scroll";


const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
 <Router>
      <ScrollAnimation/>
      {/* <Header /> */}
      <Navbars/>
      <Routes>
      <Route path="/" element={ <Home />  } />
      <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
        
      </Routes>
      </Router>
    
  
  );
};

export default App;
