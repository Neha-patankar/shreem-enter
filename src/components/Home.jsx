import React from "react";

import About from "../About";
import "../App.css";
import MyCarousel from "../components/myCarousel/MyCarousel";


import Faq from "../Components copy/Faq";
import Whychooseus from "../Whychooseus";

export const Home = () => {
  return (
    <>
      <MyCarousel />
      <About />
      <Faq />
      <Whychooseus></Whychooseus>
      
      
    </>
  );
};
