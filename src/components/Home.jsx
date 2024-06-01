import React from "react";
import Services from "../Services";
import ServicesType from "../ServicesType";
import About from "../About";
import "../App.css";
import MyCarousel from "../components/myCarousel/MyCarousel";
import TermCondition from "../components/termsCondition/TermCondition";
import Team from "../components/team/Team";
import ContactDetail from "../Components copy/ContactDetail";
import CustomerReview from "../Components copy/CustomerReview";
import Faq from "../Components copy/Faq";
import Help from "../Components copy/Help";
import OrderServiceForm from "../Components copy/OrderServiceForm";


export const Home = () => {
  return (
    <>
      <MyCarousel />
      <About />
      <ServicesType />
      <Services />
      <Faq />
      <Team />
      <Help />
      <CustomerReview />
     
     
    </>
  );
};
