import Services from "./Services";
import ServicesType from "./ServicesType";
import About from "./About";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import MyCarousel from "./components/myCarousel/MyCarousel";
import Footer from "./components/Footer/Footer";
import TermCondition from "./components/termsCondition/TermCondition";
import Team from "./components/team/Team";
import ContactDetail from "./Components copy/ContactDetail";
import CustomerReview from "./Components copy/CustomerReview";
import Faq from "./Components copy/Faq";
import Help from "./Components copy/Help";
import OrderServiceForm from "./Components copy/OrderServiceForm";
import Contact from "./components/whatshop/Whatshap";
import { createContext, useState } from "react";

const states = {
  showprivacy: false,
  showContact: false,
};

export const Mycontext = createContext(null);
function App() {
  const [show, setshow] = useState(states);

  const handlePrivacy = () => {
    setshow((prev) => {
      return { ...prev, showprivacy: true };
    });
  };

  const handleContact = () => {
    console.log("hey ");
    setshow((prev) => {
      return { ...prev, showContact: true };
    });
  };

  return (
    <>
      <Mycontext.Provider value={{ handlePrivacy, handleContact, show }}>
        <div className="bg-white">
          <div className="uparrow">
            <a href="#" id="scroll">
              <i class="fa-solid fa-angle-up"></i>
            </a>
          </div>
          <Na1 />
          <MyCarousel />
          <About></About>
          <ServicesType></ServicesType>
          <Services></Services>
          <Faq />
          <Team />
          <Help />
          <CustomerReview />
          {show.showContact && <ContactDetail />}
          <OrderServiceForm />
          <TermCondition />
          <Footer></Footer>
          <Contact />
        </div>
      </Mycontext.Provider>
    </>
  );
}

export default App;
