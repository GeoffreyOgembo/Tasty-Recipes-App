import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
function Login({onLogin}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // const [user, setUser] = useState({
    
  //   email: "",
  //   password: "",
  // })
  const handleInput = (e) => {
    const {id, value} =e.target;
    if(id === "email"){
      setEmail(value);
    }
    if(id === "password"){
      setPassword(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/loginner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
         })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    
      navigate("/recipes")
      } )
  }
  return (
  <div>
      <form className="frm1" onSubmit={handleSubmit}>
        <h1>Tasty Recipe Login</h1>
        {/* <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={user.name}
          name="name"
          onChange={(e) => setUser({
      ...user,
      [e.target.name]: e.target.value
    })}/> */}
      <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          name="email"
          onChange={(e) => handleInput(e)}/>
<label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          autoComplete="off"
          value={password}
          name="password"
          onChange={(e) => handleInput(e)}/>
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
