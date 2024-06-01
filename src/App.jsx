import Services from "./Services";
import ServicesType from "./ServicesType";
import About from "./About";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import MyCarousel from "./components/myCarousel/MyCarousel";
import Footer from "./components/Footer/Footer";
import TermCondition from "./components/termsCondition/TermCondition";
import Team from "./components/team/Team";
import ContactDetail from "./Components copy/ContactDetail"
import CustomerReview from "./Components copy/CustomerReview"
import Faq from "./Components copy/Faq"
import  Help from "./Components copy/Help"
import OrderServiceForm from "./Components copy/OrderServiceForm"
import Contact from "./components/whatshop/Whatshap";



function App() {
  return (
    <>
      <div className="bg-white">
        <div className="uparrow">
          <a href="#" id="scroll" >
            <i class="fa-solid fa-angle-up"></i>
          </a>
        </div>
        <Na1 />
        <MyCarousel />
        <About></About>
        <ServicesType></ServicesType>
        <Services></Services>
        <Faq/>
        <Team/> 
        <Help/> 
        <CustomerReview/>
        <ContactDetail />
        <OrderServiceForm/>
        
        <TermCondition/>
        <Footer></Footer>
        <Contact/>
      
       
       
       
       
       
       
       
      </div>
    </>
  );
}

export default App;
