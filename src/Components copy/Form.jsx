import axios from "axios";
import React, { useState } from "react";
import "./ReqService.css";

const Form = () => {

  const initialState = {
    username: "",
    contact: "",
    email: "",
    service: "Graphic Design",
    message: ""
  }

  const [contact, setContact] = useState({
    username: "",
    contact: "",
    email: "",
    service: "Graphic Design", // set default selected value for dropdown
    message: "",
  });

  // To submit data from frontend to backend
  let submit = async (e) => {
    e.preventDefault();
    try {
      alert("Data is submitted");
      const res = await axios.post("http://localhost:8002/user", { ...contact });
      console.log(res)
      setContact(initialState)
      message: ""
    } catch (err) {
      console.log(err);
    }
  };

  // Handle input change
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };


  return (

      <div className="wrapper">
        {/* starting of form */}
        <form action="" onSubmit={submit}>
          <div className="d-flex gap-3">
            {/* Name input box */}
            <div className="input-box mt-5">
              <label htmlFor="" className="contact-form-label">
                User Name *
              </label>
              <br />
              <input
                type="text"
                name="username"
                id=""
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                placeholder="Username"
                className="contact-form-input"
              />
              <i className="fa-solid fa-user"></i>
            </div>
            {/* Contact input box */}
            <div className="input-box mt-5">
              <label htmlFor="" className="contact-form-label">
                Contact Number *
              </label>
              <br />
              <input
                type="number"
                name="contact"
                id=""
                autoComplete="off"
                value={contact.contact}
                onChange={handleInput}
                placeholder="Contact Number"
                required
                className="contact-form-input"
              />
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>

          {/* Email input box */}
          <div className="input-box">
            <label htmlFor="" className="contact-form-label">
              Your E-Mail *
            </label>
            <br />
            <input
              type="email"
              name="email"
              id=""
              autoComplete="off"
              value={contact.email}
              onChange={handleInput}
              placeholder="Email"
              required
              className="contact-form-input"
            />
            <i className="fa-solid fa-envelope"></i>
          </div>

          {/* Dropdown */}
          <div>
            <label htmlFor="dropdown" className="contact-form-label">
              Service interested in
            </label>
            <br />
            <select
              name="service"
              className="contact-form-dropdown"
              id="dropdown"
              value={contact.service}
              onChange={handleInput}
            >
              <option value="Graphic Design">Graphic Design</option>
              <option value="Web Design">Web Design</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Print Design">Print Design</option>
              <option value="Social Media Design">Social Media Design</option>
              <option value="Packaging Design">Packaging Design</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Textbox */}
          <div className="input-box">
            <label htmlFor="" className="contact-form-label">
              Type Your Message
            </label>
            <br />
            <textarea
              name="message"
              id=""
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
              cols={30}
              rows={5}
              className="contact-form-dropdown"
              placeholder="Enter your message"
            ></textarea>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>

          {/* Buttons */}
          <div>
            <button type="submit" className="send-me-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
  );
};

export default Form;
