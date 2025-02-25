import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import LFooter from "../Components/LFooter";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/signin"); // Redirect to Signin page if not authenticated
    }
  }, [navigate]);
  
 

  return (
    <div>
      

      <Hero />
      <About />
      <Services />
      <LFooter/>
    </div>
  );
};

export default Home;
