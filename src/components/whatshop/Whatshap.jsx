import React from "react";

import "./Whatshap.css";
import Whatsapp from "../../images/whatshap.png";
import ContactDetail from "../../Components copy/ContactDetail";

function Contacts() {
  return (
    <a target="_blank" href="https://wa.me/+919340926300">
      <div>
        {" "}
        <img src={Whatsapp} className="whatsapp-img" alt="" /> <ContactDetail />
      </div>
    </a>
  );
}

export default Contacts;
