import React, { useState } from 'react';
import './style.css';
import ShopCart from '../../components/shops/ShopCart';
import Catg from '../../components/shops/Catg';

const Category = ({ addToCart, shopItems }) => {


  return (
    <section className='shop background'>
      <div className='container'>
      {/* <Catg /> */}

      <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
            
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Category;