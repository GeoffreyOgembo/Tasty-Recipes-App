import React, { useState } from "react";

function SignUp({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUser_type] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        
        password,
        password_confirmation: passwordConfirmation,
      }),
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
        <h1>Sign Up!</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>

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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        /><br></br>
            <label htmlFor="password">Confirm Password...</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /><br></br>

       {/* <label htmlFor="user_type">User_type</label>
        <input
          type="text"
          id="user-type"
          autoComplete="off"
          value={user_type}
          onChange={(e) => setUser_type(e.target.value)}
        /><br></br> */}

        <div className="form-group">
            <button 
              onClick={submitHandler}
              type="button" 
              className="btn btn-secondary btn-block"
            >
              Sign Up!
            </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;