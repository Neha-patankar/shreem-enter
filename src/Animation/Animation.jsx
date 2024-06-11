import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

export const Animation = () => {

  useEffect(() => {
    AOS.init({duration: "500", delay:1000})
    }, [])
    
 return (
    <div data-aos=" fade-right"></div>
  )
}
