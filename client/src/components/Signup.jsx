import React, { useState } from 'react'


function Signup() {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeHandler = (e) => {
        const val = e.target.value;
        switch (e.target.name) {
            case "email":
                setEmail(val);
                break;
            case "password":
                setPassword(val);
                break;
            case "name":
                setName(val);
                break;
            case "username":
                setUserName(val);
                break;
            default:
                alert("Error");
        }
    };

    const submitHandler = () => {
        const userObj = {name, username, email, password};
        alert(JSON.stringify(userObj));
    }

  return (
    <div className='container'>
        <div className='row justify-content-center pt-5'>
            <div className='col-md-5'>
                <div className="card-shadow-lg p-3 mb-5 bg-white rounded">
                    <h3 className="text-center">Sign UP To Tasty Recipes!</h3>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label pt-2">
                            Name
                        </label>
                        <input
                            autocomplete="off"
                            type=" ame"
                            name="name"
                            value={name}
                            onChange={onChangeHandler}
                            className="form-control"
                            id="name"
                            placeholder="Michael Jordan"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label pt-2">
                            Username (optional)
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
                        <button 
                            onClick={submitHandler}
                            type="button" 
                            className="btn btn-secondary btn-block"
                        >
                                Sign Up!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;