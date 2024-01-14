import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import {  Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log(email, password, rememberMe);

        // If login is successful, show a success toast
        toast.success("Login successful!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
  };

  return (
    <><section className='cart-items'>
          <div className='container d_flex'>
              <div className='login-container'>
                  <h1>Sign Into Your Account</h1>
                  <form onSubmit={handleSubmit}>
                      <div className='input-group'>
                          <label htmlFor='email'>Email</label>
                          <input
                              type='email'
                              id='email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required />
                      </div>
                      <div className='input-group'>
                          <label htmlFor='password'>Password</label>
                          <input
                              type='password'
                              id='password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required />
                      </div>
                      <div className='input-remember'>
                          <input
                              type='checkbox'
                              id='rememberMe'
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)} />
                          <label htmlFor='rememberMe'>Remember me</label>
                      </div>
                      <div className='forgot-signup-links'>
                      <Link to='/register'>Dont have an account, Sign Up</Link>
                      </div>
                      <button type='submit' className='btn'>Sign In</button>
                  </form>
              </div>
          </div>
      </section>
      <ToastContainer />
      </>
  );
};

export default Login;