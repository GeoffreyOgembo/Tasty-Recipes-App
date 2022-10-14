
import React, { useState } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } 
    });
  }


 

  return (
    <div>
  
      <form className="frm1" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
           name= "password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
   

  );
}

export default Login;

