// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import image from "../../images/logo.png";
// import "./Nav1.css";
// import { FaUserLarge } from "react-icons/fa6";

// function Na1() {
//   return (
//     <>
//       {["md"].map((expand) => (
//         <Navbar
//           key={expand}
//           expand={expand}
//           className="nav1 bg-nav  position-sticky top-0 w-100 z-3  nav-shadow"
//         >
//           <Container className="Container fluid fontSize ">
//             <a className="navbar-brand" href="#">
//               <img
//                 src={image}
//                 alt="Logo"
//                 style={{ width: "clamp(4rem, 8vw, 5rem)", marginRight: "10px" }}
//               />
//             </a>
//             <Navbar.Brand href="#" className="fontSize">Shreem Enterprises</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title
//                   id={`offcanvasNavbarLabel-expand-${expand}`}
//                 ></Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="list justify-content-end flex-grow-1 pe-3  gap-5 ">
//                   <Nav.Link className="nav-item blackl" href="/">
//                     Home
//                   </Nav.Link>
//                   <Nav.Link className="nav-item blackl" href="/about">
//                     About
//                   </Nav.Link>
//                   <Nav.Link className="nav-item blackl" href="/services">
//                     Services
//                   </Nav.Link>
//                   <Nav.Link className="nav-item blackl" href="/requestservices">
//                     Request a Services
//                   </Nav.Link>
//                   <Nav.Link className="nav-item blackl" href="/contact">
//                     Contact
//                   </Nav.Link>
//                   <Nav.Link className="nav-item blackl  " href="/contact">
//                   <FaUserLarge />
//                 </Nav.Link>
              
//                  <button><Nav.Link className="px-3 login-btn" href="/login">Login</Nav.Link></button>
                
//                 </Nav>

//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
           
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default Na1;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import image from "../../images/logo.png";
import "./Nav1.css";
import { FaUserLarge } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { logout } from "../../redux/actions"; // Assuming you have a logout action defined

function Nav1() {
  const [showAdminOptions, setShowAdminOptions] = useState(false);
  const user = useSelector((state) => state?.user?.user); // Assuming your user state is stored in 'user'
  const dispatch = useDispatch();
  console.log("user header", user);

  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        dispatch(logout()); // Update the Redux state
      } else if (data.error) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred during logout.");
    }
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="nav1 bg-nav position-sticky top-0 w-100 z-3 nav-shadow"
        >
          <Container className="Container fluid fontSize">
            <a className="navbar-brand" href="#">
              <img
                src={image}
                alt="Logo"
                style={{ width: "clamp(4rem, 8vw, 5rem)", marginRight: "10px" }}
              />
            </a>
            <Navbar.Brand href="#" className="fontSize">
              Shreem Enterprises
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="list justify-content-end flex-grow-1 pe-3 gap-5">
                  <Nav.Link className="nav-item blackl" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="/about">
                    About
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="/requestservices">
                    Request a Service
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="/contact">
                    Contact
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="/admin-penal">
                    <FaUserLarge />
                  </Nav.Link>
                  {user?.isAdmin && ( // Show Admin Panel link only for admin users
                    <div
                      className="nav-item dropdown"
                      onMouseEnter={() => setShowAdminOptions(true)}
                      onMouseLeave={() => setShowAdminOptions(false)}
                    >
                      <Nav.Link className="blackl" href="/admin-penal">
                        Admin Panel
                      </Nav.Link>
                      {showAdminOptions && (
                        <div className="dropdown-menu">
                          <Nav.Link className="dropdown-item" href="/admin">
                            Dashboard
                          </Nav.Link>
                          <Nav.Link className="dropdown-item" href="/admin/users">
                            Manage Users
                          </Nav.Link>
                          <Nav.Link className="dropdown-item" href="/admin/settings">
                            Settings
                          </Nav.Link>
                        </div>
                      )}
                    </div>
                  )}
                  <div>
                    {user?._id ? (
                      <button onClick={handleLogout} className="px-3 login-btn">
                        Logout
                      </button>
                    ) : (
                      <Nav.Link className="px-3 login-btn" href="/login">
                        Login
                      </Nav.Link>
                    )}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nav1;




