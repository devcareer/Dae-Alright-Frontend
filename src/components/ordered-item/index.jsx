import React from 'react';

import Button from '../Button/index';

import './order.scss'

const Order = () => (
    <div className="item-ordered">
      <div className="detail">
        <div className="header-block">
          <span className="box"></span>
          <span className="res">
            <section>
              <h4 className="food">
                Chicken Tandori special 12' deep
              </h4>
              <h5 className="spice">
                Cheese, tomatoe, Italian spice
              </h5>
              <h6 className="id">ID 112345566</h6>
            </section>
          </span>
        </div>
        <div className="header-block">
            <span>&lt;</span>
            <span>1</span> 
            <span>&gt;</span>
          </div>
          <div className="header-block">
            <span>#400</span>
          </div>
          <div className="header-block">
            <span>#100</span>
            <span>Delivery Time: 45min-1hr</span>
          </div>
      </div>
    <div className="total">
      <span className="breakdown">
        <p>Subtotal: #400</p>
        <p>Shipping: #100</p>
      </span>
      <span class='T'>Total: #500</span>      
      <Button  className='button-sm b' text='Buy'/>
      
    </div>
    
    </div>
)

export default Order;