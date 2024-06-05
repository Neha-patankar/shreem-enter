import React from "react";
import Services from "../Services";
import ServicesType from "../ServicesType";
import About from "../About";
import "../App.css";
import MyCarousel from "../components/myCarousel/MyCarousel";
import Team from "../components/team/Team";
import CustomerReview from "../Components copy/CustomerReview";
import Faq from "../Components copy/Faq";
import Help from "../Components copy/Help";
import Whychooseus from "../Whychooseus";


export const Home = () => {
  return (
    <>
      <MyCarousel />
      <About />
      <ServicesType />
      <Services />
      <Faq />
      <Whychooseus></Whychooseus>
      <Team />
      <Help />
      <CustomerReview />
    </>
  );
};
