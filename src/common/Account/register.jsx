import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation for password match, etc.
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
    // Handle the registration logic here
    console.log(fullName, mobile, email, password);

    // If registration is successful, show a success toast
    toast.success("Registration successful!", {
      position: "top-center",
      autoClose: 5000,
    });
  };

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='login-container'>
            <h1>Create Your Account</h1>
            <form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  type='text'
                  id='fullName'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required />
              </div>
              <div className='input-group'>
                <label htmlFor='mobile'>Mobile</label>
                <input
                  type='tel'
                  id='mobile'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required />
              </div>
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
              <div className='input-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required />
              </div>
              <button type='submit' className='btn'>Register</button>
              <br />
              <br />
              <div className='login-links'>
                <Link to='/login'>Already have an account? Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;