import React from "react";


import "../App.css";
import MyCarousel from "../components/myCarousel/MyCarousel";
import About from "../About";
import Faq from "../Components copy/Faq";
import Whychooseus from "../Whychooseus";
import CustomerReview from "../Components copy/CustomerReview";

export const Home = () => {
  return (
    <>
      <MyCarousel />
      <About />
      <Whychooseus/>
      <Faq />
      <CustomerReview/>
  </>
  );
};
