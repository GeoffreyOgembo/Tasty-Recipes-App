import React, { useState } from "react";
import "./../../App.css";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [usertype, setUserType] = useState("");


    const onChangeHandler = (e) => {
        const val = e.target.value;
        switch (e.target.name) {
            case "email":
                setEmail(val);
                break;
            case "password":
                setPassword(val);
                break;
            case "username":
                setUserName(val);
                break;
            case "usertype":
                setUserType(val)
                break;
            default:
                alert("Error");
        }
    };

    const submitHandler = () => {
        const userObj = {email, password, username, usertype};
        alert(JSON.stringify(userObj));
    }


  return (
    <div className="container">
        <div className="row justify-content-center pt-5">
            <div className="card-show-lg p-3 mb-5 bg-white rounded">
            <h3 className="text-center">Log In!</h3>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="email" className="form-label pt-2">
                        Email Address
                    </label>
                    <input
                        autocomplete="off"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChangeHandler}
                        className="form-control"
                        id="email"
                        placeholder="myname@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label pt-2">
                        Password
                    </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChangeHandler}
                            className="form-control"
                            id="password"
                            placeholder="...."
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label pt-2">
                        Username
                    </label>
                    <input
                        autocomplete="off"
                        type="username"
                        name="username"
                        value={username}
                        onChange={onChangeHandler}
                        className="form-control"
                        id="username"
                        placeholder="Xavier"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="region">User Type</label>
                    <select 
                        className="form-control" 
                        id="region"
                        name="region"
                        onChange={onChangeHandler}
                    >
                        <option value="">Select Your User Type</option>
                        <option value="nairobi">Admin</option>
                        <option value="central">Member</option>
                    </select>
                </div>
                <div className="form-group">
                    <button 
                        onClick={submitHandler}
                        type="button" 
                        className="btn btn-primary btn-block"
                    >
                        Log In
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
