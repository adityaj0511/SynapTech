import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import LFooter from "../Components/LFooter";


const Home = () => {
  
  
 

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
