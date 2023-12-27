import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="field-container">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div>
        <button className="button">Login</button>
      </div>
      <p className="field-container">
        Do not have an account ? <a>Register Here</a>
      </p>
    </div>
  );
};

export default Login;
