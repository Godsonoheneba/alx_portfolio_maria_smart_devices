import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Checkout = () => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [billingLocation, setBillingLocation] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleCreditCardChange = (event) => {
    const { name, value } = event.target;
    setCreditCardInfo({ ...creditCardInfo, [name]: value });
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setBillingLocation({ ...billingLocation, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(creditCardInfo, billingLocation);
  };

  return (
    <section className='payment-method-section'>
      <div className='container'>
        <div className='payment-method-container'>
          <h1>Payment Method</h1>
          <form onSubmit={handleSubmit}>
            {/* Credit Card Information */}
            <div className='credit-card-info'>
              <h2>Credit Card Information</h2>
              <div className='input-group'>
                <label htmlFor='cardNumber'>Card Number</label>
                <input
                  type='text'
                  id='cardNumber'
                  name='cardNumber'
                  value={creditCardInfo.cardNumber}
                  onChange={handleCreditCardChange}
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='cardName'>Cardholder Name</label>
                <input
                  type='text'
                  id='cardName'
                  name='cardName'
                  value={creditCardInfo.cardName}
                  onChange={handleCreditCardChange}
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='expiry'>Expiry Date</label>
                <input
                  type='text'
                  id='expiry'
                  name='expiry'
                  placeholder='MM/YY'
                  value={creditCardInfo.expiry}
                  onChange={handleCreditCardChange}
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='cvv'>CVV</label>
                <input
                  type='text'
                  id='cvv'
                  name='cvv'
                  value={creditCardInfo.cvv}
                  onChange={handleCreditCardChange}
                  required
                />
                </div>
            </div>

                    {/* Billing Location Information */}
        <div className='billing-location'>
          <h2>Billing Location</h2>
          <div className='input-group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={billingLocation.address}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              value={billingLocation.city}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='state'>State/Province</label>
            <input
              type='text'
              id='state'
              name='state'
              value={billingLocation.state}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='zipCode'>Zip/Postal Code</label>
            <input
              type='text'
              id='zipCode'
              name='zipCode'
              value={billingLocation.zipCode}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              name='country'
              value={billingLocation.country}
              onChange={handleLocationChange}
              required
            />
          </div>
        </div>

        <Link to='/checkout-success' className='btn'>
        <button type='submit' className='btn'>Continue Shopping</button>
        </Link>

       
      </form>
    </div>
  </div>
</section>
);
};
             


export default Checkout;
