// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { FaEyeSlash, FaEye } from 'react-icons/fa';
// import './Login.css'; // Import the custom CSS file
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     confirmPassword: ""
//   });
//   const [message, setMessage] = useState("");

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit =async (e) => {
//     e.preventDefault();

//     if (data.password !== data.confirmPassword) {
//       setMessage("Passwords do not match!");
    
//     const dataResponse = await fetch(SummaryApi.signUp.url,{
//       method : SummaryApi.signUp.method,
//       headers : {
//           "content-type":"application/json"
//         },
//         body : JSON.stringify(data)
//     })
//     const data = await dataResponse.json()
//     console.log("data", data);
//   } else {
//     // Here you can handle the form submission, e.g., send the data to a server
//     setMessage("Sign Up successful!");
//     console.log("data signup", data);
//   }

    
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <section id="signup">
//       <Container className="my-5 bg-light py-5">
//         <Row className="justify-content-md-center">
//           <Col md={6} lg={4}>
//             <h2 className="text-center mb-4">Sign Up</h2>
//             {message && <div className={`alert ${data.password === data.confirmPassword ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Enter name"
//                   name="name"
//                   value={data.name} 
//                   onChange={handleOnChange}
//                 />
//               </Form.Group>

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

//               <Form.Group controlId="formBasicConfirmPassword">
//                 <Form.Label>Confirm Password</Form.Label>
//                 <div className="password-wrapper d-flex align-items-center">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm Password"
//                     name="confirmPassword"
//                     value={data.confirmPassword}
//                     onChange={handleOnChange}
//                   />
//                   <Button 
//                     variant="link" 
//                     onClick={toggleConfirmPasswordVisibility} 
//                     aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                     className="password-toggle"
//                   >
//                     {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//                   </Button>
//                 </div>
//               </Form.Group>
//               <br/>

//               <Button variant="primary" type="submit" className="w-100 login-btnn">
//                 Sign Up
//               </Button>
//             </Form>
//             <br />
//             <p>Already have an account? <Link to="/login">Login</Link></p>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import './Login.css'; // Import the custom CSS file
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../commen/index';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });
  const navigate = useNavigate()
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8085/api/signup", {
        method: SummaryApi.signUp.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if(result.success){
       toast.success(result.message)
       navigate("/login")
      }
      if(result.error){
        toast.error(result.message)
      }
      // toast(result.message)
      // console.log("result", result);

      if (response.ok) {
        setMessage("Sign Up successful!");
      } else {
        setMessage(result.message || "Sign Up failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred during Sign Up!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section id="signup">
      <Container className="my-5 bg-light py-5">
        <Row className="justify-content-md-center">
          <Col md={6} lg={4}>
            <h2 className="text-center mb-4">Sign Up</h2>
            {message && (
              <div className={`alert ${data.password === data.confirmPassword ? 'alert-success' : 'alert-danger'}`}>
                {message}
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                />
              </Form.Group>

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

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="password-wrapper d-flex align-items-center">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                  />
                  <Button
                    variant="link"
                    onClick={toggleConfirmPasswordVisibility}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    className="password-toggle"
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </div>
              </Form.Group>
              <br />

              <Button variant="primary" type="submit" className="w-100 login-btnn">
                Sign Up
              </Button>
            </Form>
            <br />
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
