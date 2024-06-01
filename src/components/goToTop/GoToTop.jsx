import React from "react";
import "./GoToTop.css";

function GoToTop() {
  return (
    <>
      <div className="thetop"></div>
      <div className="backtotop">
        <a href="#" id="scroll">
          <i class="fa-regular fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default GoToTop;
