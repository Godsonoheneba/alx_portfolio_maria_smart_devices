import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const OrderDetails = () => {
  const { orderNumber } = useParams(); // Assuming order number is passed via URL

  // Placeholder data - replace this with data fetched from your backend
  const orderDetails = {
    items: [
      { id: 1, name: 'Product 1', quantity: 2, price: '$50.00' },
      { id: 2, name: 'Product 2', quantity: 1, price: '$100.00' },
      // More items...
    ],
    total: '$200.00',
    shippingAddress: '123 Main St, Anytown, AT 12345',
    orderStatus: 'Shipped'
  };

  return (
    <section className='order-details-section'>
      <div className='container'>
        <div className='order-details-container'>
          <h1>Order Details</h1>
          <p>Order Number: {orderNumber}</p>
          <h2>Items Purchased</h2>
          <ul className='items-list'>
            {orderDetails.items.map(item => (
              <li key={item.id} className='item'>
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <p className='total'>Total: {orderDetails.total}</p>
          <p className='shipping-address'>Shipping Address: {orderDetails.shippingAddress}</p>
          <p className='order-status'>Order Status: {orderDetails.orderStatus}</p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
