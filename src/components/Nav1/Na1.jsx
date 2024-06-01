import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import image from "../../images/logo.png";
import "./Nav1.css";

function Na1() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="nav1 bg-nav mb-3 position-fixed top-0 w-100 z-3  nav-shadow"
        >
          <Container className="Container fluid ">
            <a className="navbar-brand" href="#">
              <img
                src={image}
                alt="Logo"
                style={{ width: "clamp(4rem, 8vw, 5rem)", marginRight: "10px" }}
              />
            </a>
            <Navbar.Brand href="#">Shreem Enterprises</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="list justify-content-end flex-grow-1 pe-3  gap-5 ">
                  <Nav.Link className="nav-item blackl" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="#about">
                    About
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="#services">
                    Services
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="#orderServices">
                    Request a Services
                  </Nav.Link>
                  <Nav.Link className="nav-item blackl" href="#contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Na1;
