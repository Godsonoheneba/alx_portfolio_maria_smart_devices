import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CheckoutSuccess = () => {

  return (
    <section className='checkout-success-section'>
      <div className='container'>
        <div className='checkout-success-container'>
          <h1>Thank You for Your Order!</h1>
          <p className='success-message'>Your order has been placed successfully and will be processed shortly.</p>
          
          <div className='order-summary'>
            <h2>Order Summary</h2>
            <p>Order Number: #123456</p>
          </div>
          
          <div className='additional-actions'>
            <Link to='/' className='btn'>Continue Shopping</Link>
            <Link to='/order-history' className='btn secondary'>View Order History</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
