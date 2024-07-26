// // import React, { useState } from 'react';
// // import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // import { FaEyeSlash, FaEye } from 'react-icons/fa';
// // import './Login.css'; // Import the custom CSS file
// // import { Link } from 'react-router-dom';

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);

// //   const [data, setData] = useState({
// //     email: "",
// //     password: ""
// //   });
// //   const [message, setMessage] = useState("");

// //   const handleOnChange = (e) => {
// //     const { name, value } = e.target;
// //     setData((prev) => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can handle the form submission, e.g., send the data to a server
// //     setMessage("Login successful!");
// //     console.log("data login", data);
// //   };

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   return (
// //     <section id="login">
// //       <Container className="my-5 bg-light py-5">
// //         <Row className="justify-content-md-center">
// //           <Col md={6} lg={4}>
// //             <h2 className="text-center mb-4">Login</h2>
// //             {message && <div className="alert alert-success">{message}</div>}
// //             <Form onSubmit={handleSubmit}>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Label>Email address :</Form.Label>
// //                 <Form.Control 
// //                   type="email" 
// //                   placeholder="Enter email"
// //                   name="email"
// //                   value={data.email} 
// //                   onChange={handleOnChange}/>
// //               </Form.Group>

// //               <Form.Group controlId="formBasicPassword">
// //                 <Form.Label>Password :</Form.Label>
// //                 <div className="password-wrapper d-flex align-items-center">
// //                   <Form.Control
// //                     type={showPassword ? "text" : "password"}
// //                     placeholder="Enter Password"
// //                     name="password"
// //                     value={data.password}
// //                     onChange={handleOnChange}/>

// //                   <Button 
// //                     variant="link" 
// //                     onClick={togglePasswordVisibility} 
// //                     aria-label={showPassword ? "Hide password" : "Show password"}
// //                     className="password-toggle">
// //                     {showPassword ? <FaEye /> : <FaEyeSlash />}
// //                   </Button>
// //                 </div>
// //               </Form.Group><br></br>

// //               <div className="text-left mb-3">
// //                 <Link to="/forgot-password">Forgot password?</Link>
// //               </div>
              
// //               <Button variant="primary" type="submit" className="w-100 login-btnn">
// //                 Login
// //               </Button>
// //             </Form>
// //             <br />
// //             <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default Login;

// import React, { useContext, useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { FaEyeSlash, FaEye } from 'react-icons/fa';
// import './Login.css'; // Import the custom CSS file
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import SummaryApi from '../commen';
// import Context from '../context';
// import Context from '../context';

// const Login = () => {
  
//   const [showPassword, setShowPassword] = useState(false);

//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate()
//   const {fetchUserDetails} = useContext(Context)
  
  
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const  dataResponse = await fetch(SummaryApi.signIn.url,{
//       method: SummaryApi.signIn.method,
//       credentials : "include",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     const dataApi = await dataResponse.json()
//     if(dataApi.success){
//       toast.success(dataApi.message)
//       navigate ("/")
//       fetchUserDetails()
     
//     }
//     if(dataApi.error){
//       toast.error(dataApi.message) 
//     }


//     // Here you can handle the form submission, e.g., send the data to a server
    
//     console.log("data login", data);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <section id="login">
//       <Container className="my-5 bg-light py-5">
//         <Row className="justify-content-md-center">
//           <Col md={6} lg={4}>
//             <h2 className="text-center mb-4">Login</h2>
//             {message && <div className="alert alert-success">{message}</div>}
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control 
//                   type="email" 
//                   placeholder="Enter email"
//                   name="email"
//                   value={data.email} 
//                   onChange={handleOnChange}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <div className="password-wrapper d-flex align-items-center">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter Password"
//                     name="password"
//                     value={data.password}
//                     onChange={handleOnChange}
//                   />
//                   <Button 
//                     variant="link" 
//                     onClick={togglePasswordVisibility} 
//                     aria-label={showPassword ? "Hide password" : "Show password"}
//                     className="password-toggle"
//                   >
//                     {showPassword ? <FaEye /> : <FaEyeSlash />}
//                   </Button>
//                 </div>
//               </Form.Group>
//               <br/>

//               <div className="mb-3">
//                 <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
//               </div>
              
//               <Button variant="primary" type="submit" className="w-100 login-btnn">
//                 Login
//               </Button>
//             </Form>
//             <br />
//             <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import './Login.css'; // Import the custom CSS file
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../commen';
import Context from '../context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/");
        fetchUserDetails();
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }

    console.log("data login", data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section id="login">
      <Container className="my-5 bg-light py-5">
        <Row className="justify-content-md-center">
          <Col md={6} lg={4}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="password-wrapper d-flex align-items-center">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                  />
                  <Button
                    variant="link"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="password-toggle"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </div>
              </Form.Group>
              <br />

              <div className="mb-3">
                <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
              </div>

              <Button variant="primary" type="submit" className="w-100 login-btnn">
                Login
              </Button>
            </Form>
            <br />
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;


