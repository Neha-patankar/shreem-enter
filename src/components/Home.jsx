import React from "react";

import About from "../About";
import "../App.css";
import MyCarousel from "../components/myCarousel/MyCarousel";


import Faq from "../Components copy/Faq";
import Whychooseus from "../Whychooseus";
import CustomerReview from "../Components copy/CustomerReview";

export const Home = () => {
  return (
    <>
      <MyCarousel />
      <About />
      <Faq />
      <CustomerReview/>
      <Whychooseus></Whychooseus>
      
      
    </>
  );
};
