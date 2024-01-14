import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const history = useHistory(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    history.push(`/order-details/${orderNumber}`); 
  };

  return (
    <section className="track-order-section">
      <div className="container d_flex">
        <div className="track-order-container">
          <h1>Track My Order</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="orderNumber">Order Number</label>
              <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">
              Track Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;
