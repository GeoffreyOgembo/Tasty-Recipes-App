
import React, { useState } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } 
    });
  }

  const submitHandler = () => {
    const userObj = {name, email, password};
    alert(JSON.stringify(userObj));
  }
 

  return (
    <div>
  
      <form className="frm1" onSubmit={handleSubmit}>
        <h1>Karibu Tasty Recipes!</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
           name= "password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="form-group">
            <button 
              onClick={submitHandler}
              type="button" 
              className="btn btn-primary btn-block"
            >
              Log In!
            </button>
        </div>

      </form>
    </div>
   

  );
}

export default Login;

