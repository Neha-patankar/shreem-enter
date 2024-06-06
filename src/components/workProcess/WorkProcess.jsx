import React from "react";
import pic from "../../images/pic-2.png";
import consult from "../../images/pic-2.png";
import research  from "../../images/research.png";
import design  from "../../images/design.png";
import rewie   from "../../images/rewie.png";
import delevary  from "../../images/delevary.png";
import "./WorkProcess.css";

function WorkProcess (){
    return(
          <div className="container ">
            <div className="row ">
            <h1 className="text-center mt-4 main-heading">OUR WORK PROCESS</h1>
             <div className="col-md-4  ">
             <div className="text-center workprocess card-work">
                <img src={consult} alt="consults" className="mt-3  imgss "
                  style={{width:"70px", height:"70px"}}></img>
                  <h1 className="sub-heading">Consultation</h1>
                 <p>We start with a detailed consultation to understand your requirements, goals, and vision.</p>
             </div>

             <div className="text-center  workprocess card-work">
               <img src={research} alt="consults" className="mt-3"
                style={{width:"70px", height:"70px"}}></img>
                <h1 className="sub-heading">Research and Planning</h1>
                <p> Our team conducts thorough research and plans the design strategy tailored to your needs.
                </p>
             </div>
             </div>

             <div className="col-md-4 pt-1">
             <div  className="workprocess">
               <img src={pic} alt="picture" 
               style={{width:"350px", height:"400px" }}></img>
             </div>
             </div>

             <div className="col-md-4">
             <div className="text-center workprocess card-work">
               <img src={design} alt="consults" className="mt-3"
                style={{width:"70px", height:"70px"}}></img>
                <h1 className="sub-heading">Design and Development</h1>
               <p> We create initial design concepts and refine them based on your feedback.
               </p>
             </div>

             <div className="text-center workprocess card-work">
               <img src={rewie} alt="consults" className="mt-3"
                 style={{width:"70px", height:"70px"}}></img>
                 <h1 className="sub-heading">Review and Finalization</h1>
                 <p> We review the designs with you, make necessary adjustments, and finalize the design.</p>
             </div>
             </div>
             </div>

             <div className="text-center workprocess mt-1 card-work">
              <img src={delevary} alt="consults" className="mt-3"
                style={{width:"70px", height:"70px"}}></img>
                <h1 className="sub-heading">Delivery and Support</h1>
                <p>Once finalized, we deliver the design files in the required formats and offer ongoing support if needed.
                </p>
                <p className=" pt-1">Ready to elevate your brand with exceptional design? Contact us today to discuss your project and discover how we can help you stand out in a crowded market.</p>
             </div>
          </div>
    );
}
export default WorkProcess;