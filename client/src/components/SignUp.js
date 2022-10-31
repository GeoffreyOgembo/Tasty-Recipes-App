import React, { useState } from "react";
import Login from "./Login";
import { useNavigate} from 'react-router-dom';
function SignUp() {
   const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    user_type: ""
  })
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user)
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user
      }),
    }).then((res) => {
     console.log(res.data);
      navigate("/")
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  return (
    <div>
      <form className="frm1" onSubmit={handleSubmit}>
        <h1>Sign Up!</h1>
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
<label htmlFor="password_confirmation"> Confirmation password</label>
        <input
          type="text"
          id="password_confirmation"
          autoComplete="off"
          value={user.password_confirmation}
          name="password_confirmation"
          onChange={(e) => setUser({
      ...user,
      [e.target.name]: e.target.value
    })}/>
<label htmlFor="user_type"> user_type</label>
        <input
          type="text"
          id="user_type"
          autoComplete="off"
          value={user.user_type}
          name="user_type"
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
              Sign Up!
            </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;