// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Na1 from "./components/Nav1/Na1";
// import Footer from "./components/Footer/Footer";
// import { Home } from "./components/Home";
// import AboutUs from "./components/AboutUs";
// import Contacts from "./components/whatshop/Whatshap";
// import { TermsAndCon } from "./components/TermsAndCon";
// import RequestServices from "./components/RequestServices";
// import { Contactss } from "./components/Contact";
// import GoToTop from "./components/goToTop/GoToTop";
// import { ServicesParent } from "./components/Services";
// import { TeamFooter } from "./components/TeamFooter";
// import UserLogin from "./components/UserLogin";
// import { Forgotpassword } from "./components/Forgotpassword";
// import { Signup } from "./components/Signup";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from "react";
// import SummaryApi from "./commen";

// function App() {
//   const fetchUserDetails = async() => {
//     const dataResponse = await fetch(SummaryApi.current_user.url,{
//       method : SummaryApi.current_user.method,
//       credentials : `include`
//     })
//     const dataApi = await dataResponse.json()
//     console.log("data-user", dataResponse)
//   }
//  useEffect(() => {
//   fetchUserDetails()
//  },[])

//   return (
//     <>
//     <ToastContainer />
//     <div style={{backgroundColor:"white"}}>
//         <Na1 />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/services" element={<ServicesParent />} />
//           <Route path="/requestservices" element={<RequestServices />} />
//           <Route path="/contact" element={<Contactss />} />
//           <Route path="/terms-and-conditions" element={<TermsAndCon />} />
//           <Route path="/team" element={<TeamFooter />} />
//           <Route path="/login" element={<UserLogin/>}/>
//           <Route path="/forgot-password" element={<Forgotpassword/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//        </Routes>
//         <Contacts />
//         <GoToTop />
//         <Footer />
//        </div>
//     </>
//   );
// }

// export default App;

// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import "./App.css";
// // import Na1 from "./components/Nav1/Na1";
// // import Footer from "./components/Footer/Footer";
// // import { Home } from "./components/Home";
// // import AboutUs from "./components/AboutUs";
// // import Contacts from "./components/whatshop/Whatshap";
// // import { TermsAndCon } from "./components/TermsAndCon";
// // import RequestServices from "./components/RequestServices";
// // import { Contactss } from "./components/Contact";
// // import GoToTop from "./components/goToTop/GoToTop";
// // import { ServicesParent } from "./components/Services";
// // import { TeamFooter } from "./components/TeamFooter";
// // import UserLogin from "./components/UserLogin";
// // import { Forgotpassword } from "./components/Forgotpassword";
// // import { Signup } from "./components/Signup";
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { useEffect } from "react";

// // // Import or define SummaryApi if it's from another file
// // const SummaryApi = {
// //   current_user: {
// //     url: '/api/current_user',
// //     method: 'GET',
// //   }
// // };

// // function App() {
// //   const fetchUserDetails = async () => {
// //     try {
// //       const dataResponse = await fetch(SummaryApi.current_user.url, {
// //         method: SummaryApi.current_user.method,
// //         credentials: 'include'
// //       });
// //       const dataApi = await dataResponse.json();
// //       console.log("data-user", dataApi);
// //     } catch (error) {
// //       console.error("Error fetching user details:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUserDetails();
// //   }, []); // Added dependency array

// //   return (
// //     <>
// //       <ToastContainer />
// //       <div style={{ backgroundColor: "white" }}>
// //         <BrowserRouter>
// //           <Na1 />
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/about" element={<AboutUs />} />
// //             <Route path="/services" element={<ServicesParent />} />
// //             <Route path="/requestservices" element={<RequestServices />} />
// //             <Route path="/contact" element={<Contactss />} />
// //             <Route path="/terms-and-conditions" element={<TermsAndCon />} />
// //             <Route path="/team" element={<TeamFooter />} />
// //             <Route path="/login" element={<UserLogin />} />
// //             <Route path="/forgot-password" element={<Forgotpassword />} />
// //             <Route path="/signup" element={<Signup />} />
// //           </Routes>
// //           <Contacts />
// //           <GoToTop />
// //           <Footer />
// //         </BrowserRouter>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/whatshop/Whatshap";
import { TermsAndCon } from "./components/TermsAndCon";
import RequestServices from "./components/RequestServices";
import { Contactss } from "./components/Contact";
import GoToTop from "./components/goToTop/GoToTop";
import { ServicesParent } from "./components/Services";
import { TeamFooter } from "./components/TeamFooter";
import UserLogin from "./components/UserLogin";
import { Forgotpassword } from "./components/Forgotpassword";
import { Signup } from "./components/Signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import SummaryApi from "./commen";
import Context from "./context/index.jsx";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice.js";
import { Adminpenal } from "./components/Adminpenal.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import AllService from "./pages/AllService.jsx"; // Fixed import

function App() {
  const dispatch = useDispatch();

  // const fetchUserDetails = async () => {
  //   try {
  //     const dataResponse = await fetch(SummaryApi.current_users.url, {
  //       method: SummaryApi.current_users.method,
  //       credentials: 'include'
  //     });

  //     const dataApi = await dataResponse.json();
  //     if (dataApi.success) {
  //       dispatch(setUserDetails(dataApi.data));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user details:", error);
  //   }
  // };
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(SummaryApi.currentUsers.url, {
        method: SummaryApi.currentUsers.method,
        credentials: 'include',
      });
  
      // Check if response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Ensure `data` has expected structure
      if (data.success) {
        dispatch(setUserDetails(data.data));
      } else {
        console.error("Error: ", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <ToastContainer />
        <div style={{ backgroundColor: "white" }}>
          <Na1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesParent />} />
            <Route path="/requestservices" element={<RequestServices />} />
            <Route path="/contact" element={<Contactss />} />
            <Route path="/terms-and-conditions" element={<TermsAndCon />} />
            <Route path="/team" element={<TeamFooter />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/forgot-password" element={<Forgotpassword />} />
            <Route path="/signup" element={<Signup />} />
            {/* Admin Panel Routes */}
              <Route path="/admin-penal" element={<Adminpenal />}>
              <Route path="all-user" element={<AllUsers />} />
              <Route path="service" element={<AllService />} />
            </Route>
          </Routes>
          <Contacts />
          <GoToTop />
          <Footer />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;

