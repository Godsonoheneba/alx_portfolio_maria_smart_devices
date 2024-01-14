import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const OrderHistory = () => {
  // Placeholder data, replace with actual data from your backend
  const orders = [
    { id: 1, orderNumber: '123456', date: '2021-09-01', total: 'GHC150.00' },
    { id: 2, orderNumber: '123457', date: '2021-10-15', total: 'GHC200.00' },
  ];

  return (
    <section className='order-history-section'>
      <div className='container'>
        <div className='order-history-container'>
          <h1>Your Order History</h1>
          <ul className='order-list'>
            {orders.map(order => (
              <li key={order.id} className='order-item'>
                <span>Order #{order.orderNumber}</span>
                <span>Date: {order.date}</span>
                <span>Total: {order.total}</span>
                <Link to={`/order/${order.orderNumber}`} className='view-details'>View Details</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
