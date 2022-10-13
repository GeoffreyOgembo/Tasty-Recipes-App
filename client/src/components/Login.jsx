import React from "react";



function Login() {
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
            </div>
            </div>
        </div>

    </div>
  )
}

export default Login