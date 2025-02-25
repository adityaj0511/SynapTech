import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";

import Navbars from "./Components/Navbar";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import ScrollAnimation from "./scroll";


const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
 <Router>
      <ScrollAnimation/>
      {/* <Header /> */}
      <Navbars/>
      <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" /> } />
      <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}/>
        
      </Routes>
      </Router>
    
  
  );
};

export default App;
