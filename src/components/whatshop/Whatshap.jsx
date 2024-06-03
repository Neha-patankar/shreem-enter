import React from "react";
import "./Whatshap.css"

import  Whatsapp from "../../images/whatshap.png";



function Contacts() {
  return (
<a target='_blank' href="https://wa.me/+919340926300"><div> <img src={Whatsapp} className='whatsapp-img' alt="" /> </div></a>
  )
}

export default Contacts;