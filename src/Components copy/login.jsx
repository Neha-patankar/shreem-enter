import React, { useState } from 'react'

export const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    fetch("http://localhost:8081/userData", {
      method :"POST",
      crossDomain : true,
      headers : {
      "Content-Type" : "application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin" : "*" ,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status == "ok");
      alert("login successful");
      window.localStorage.setItem("token", data.data);
      window.localStorage.setItem("loggedIn", true);

      window.location.href = "./sign.in";
    })
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
     <h3>Sign In</h3>
     <div className='mb-3'>
      <label>Email address</label>
     </div>
    </form>
    </div>
  )
}
export default login;