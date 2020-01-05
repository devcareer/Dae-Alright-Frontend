import React from 'react';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './cartitem.scss';

const Cartitem = ( ) => (
    <div className="cartitem">
        <p className='q'>
            <span>Resturant: Ajegunle Chou</span>
            <button className='button'>
                <FontAwesomeIcon icon={faEnvelope} className='m' />
                Message Resturant</button>
        </p>
        <div className="item-details">
        <div className="header-block">
            <span>Product name & Description</span>
          </div>
          {/* <div className="header-block">
            <span>Description</span>
          </div> */}
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Delivery Details</span>
          </div>
        </div>
    </div>
)

export default Cartitem