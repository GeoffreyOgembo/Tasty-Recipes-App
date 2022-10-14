import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         user})
    }).then((res) => {
      console.log(res.data);
      navigate("/recipes")
      } )
  }
  return (
  <div>
      <form className="frm1" onSubmit={handleSubmit}>
        <h1>Tasty Recipe Login</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={user.name}
          name="name"
          onChange={(e) => setUser({
      ...user,
      [e.target.name]: e.target.value
    })}/>
      <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={user.email}
          name="email"
          onChange={(e) => setUser({
      ...user,
      [e.target.name]: e.target.value
    })}/>
<label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          autoComplete="off"
          value={user.password}
          name="password"
          onChange={(e) => setUser({
      ...user,
      [e.target.name]: e.target.value
    })}/>
        <div className="form-group">
            <button
              onClick={handleSubmit}
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