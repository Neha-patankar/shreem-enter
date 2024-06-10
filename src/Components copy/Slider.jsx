import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import img1 from "./assets/Image/img_01.png";
import { Quote } from "lucide-react";

function UncontrolledExample() {
  const clients = [
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in ipsum reiciendis sequi! Magni at dolores quis est enim voluptatem nemo corporis? Quae voluptatibus, dolorem culpa praesentium vero placeat aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum rerum? Corrupti expedita.",
      name: "Westover Charles",
      position: "Web Designer",
      imgSrc: img1,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in ipsum reiciendis sequi! Magni at dolores quis est enim voluptatem nemo corporis? Quae voluptatibus, dolorem culpa praesentium vero placeat aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum rerum? Corrupti expedita.",
      name: "John Doe",
      position: "Graphic Designer",
      imgSrc: img1,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in ipsum reiciendis sequi! Magni at dolores quis est enim voluptatem nemo corporis? Quae voluptatibus, dolorem culpa praesentium vero placeat aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum rerum? Corrupti expedita.",
      name: "Jane Smith",
      position: "UI/UX Designer",
      imgSrc: img1,
    },
  ];

  return (
    <Carousel className="Carousels" interval={3000} touch>
      {clients.map((client, index) => (
        <Carousel.Item key={index}>
          <div className="cr_textbox">
          <Quote className="quotes"/>
            <p>{client.text}</p>
          </div>
          <div className="d-flex cr_clientName_Section">
            <div>
              <img src={client.imgSrc} alt={client.name} />
            </div>
            <div>
              <h5>{client.name}</h5>
              <p style={{color:"orangered",fontWeight:'600'}}>{client.position}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
