import React from "react";
import { Navigate } from "react-router-dom";
import AuthStyle from "../helper/AuthStyle";
export default function Login() {
  const [navigate, setNavigate] = React.useState(false);
  return (
    <>
      <AuthStyle />
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y ">
          <img src="/farm-bg.jpg" className="login-bg" alt='' />
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center mb-4">
                  <img src="/abhita-logo.png" width={150} alt="" />
                </div>
                <h4 className="mb-4 text-center">Welcome to Login!</h4>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    {/* <a href="/auth/forgot-password">
                      <small>Forgot Password?</small>
                    </a> */}
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3 pt-2">
                    <button
                      className="btn btn-primary d-grid w-100"
                      onClick={() => setNavigate(true)}
                    >
                      Sign in
                    </button>
                </div>
                <div style={{ float: 'right' }}> <a href='/register'>Sign Up</a></div>
                {navigate && <Navigate to="/app/dashboard" replace={true} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}