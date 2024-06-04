import React from "react";
import "./Whatshap.css";

import Whatsapp from "../../images/whatshap.png";

function Contacts() {
  return (
    <div>
      {" "}
      <a target="_blank" href="https://wa.me/+919340926300">
        <img src={Whatsapp} className="whatsapp-img" alt="" />{" "}
      </a>
    </div>
  );
}

export default Contacts;
