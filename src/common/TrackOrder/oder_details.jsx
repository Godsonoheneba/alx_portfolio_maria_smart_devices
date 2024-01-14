import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const OrderDetails = () => {
  // Retrieve the order number from the URL parameters
  const { orderNumber } = useParams();
  return (
    <section className='order-details-section'>
    <div className='container d_flex'>
    <div className='order-details-container'>
    <h1>Order Details</h1>
    <p className='order-number'>Order Number: {orderNumber}</p>

    </div>
    </div>
    </section>
    );
    };
    
    export default OrderDetails;