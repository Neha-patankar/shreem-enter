import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./SliderImage"; 
import client1 from './assets/Image/Client1.jpg'
import "./Carousel.css";

function UncontrolledExample() {
  return (
    <Carousel className="Carousels">
      <Carousel.Item>
        <div className="cr_textbox">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in ipsum reiciendis sequi! Magni at dolores quis est enim voluptatem nemo corporis? Quae voluptatibus, dolorem culpa praesentium vero placeat aliquam?</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum rerum? Corrupti expedita</p>
        </div>
        <div className="d-flex cr_clientName_Section">
        <div>
        {/* <CarouselImage text="Second slide" imgSrc={image} />{" "} */}
        </div>
        <div>
          <h3>Westover Charles</h3>
          <p>Web Designer</p>
        </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="cr_textbox">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in ipsum reiciendis sequi! Magni at dolores quis est enim voluptatem nemo corporis? Quae voluptatibus, dolorem culpa praesentium vero placeat aliquam?</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum rerum? Corrupti expedita</p>
        </div>
        <div className="d-flex cr_clientName_Section">
        <div>
<img src="" alt="" />
        </div>
        <div>
          <h3>Westover Charles</h3>
          <p>Web Designer</p>
        </div>
        </div>
       
      </Carousel.Item>

      <Carousel.Item>
      <div className="cr_textbox">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in ipsum reiciendis sequi! Magni at dolores quis est enim voluptatem nemo corporis? Quae voluptatibus, dolorem culpa praesentium vero placeat aliquam?</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum rerum? Corrupti expedita</p>
        </div>
        <div className="d-flex cr_clientName_Section">
        <div>
<img src="" alt="" />
        </div>
        <div>
          <h3>Westover Charles</h3>
          <p>Web Designer</p>
        </div>
        </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
