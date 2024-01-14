import React, { useState } from 'react';
import './style.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the submission of the contact form
    console.log(name, email, subject, message);
    // Show a success message or handle the data as required
  };

  return (
    <section className='contact-us-section'>
      <div className='container'>
        <div className='contact-form-container'>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                id='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type='submit' className='btn'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;