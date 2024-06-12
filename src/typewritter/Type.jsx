import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

export const Type = () => {
  const [text] = useTypewriter({
    words: ["Meet Our Exclusive Team Members"],
    loop: 1, // Set to `false` or `1` for single loop, or any number for multiple loops
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <h1 className="text-center fw-bold fontSizeteamh">
      {text}
      <Cursor />
    </h1>
  );
};

export default Type;
