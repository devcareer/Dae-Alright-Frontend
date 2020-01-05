import React from 'react';

import  Navigation from '../../components/Navigation/index'
import Subscription from '../Homepage/Homepage-component/subscription/index'
import SearchBar from '../../components/SearchBar/index'
import Footer from '../../components/Footer/index'
import Cartitem from '../../components/cart-item/caritem'
import './cart.scss';

const Cart = () => (
    <div className='cart'>
      <div className='center'>
        <Navigation />
      </div>
      <div className='fix'>
       <div className='txt'>
        <h3>
          Shopping Cart <span>(1 item(s))</span>
        </h3>
        <p className='ptxt'>Continue Shopping</p>
      </div>
        <span className=''></span>
      </div>
      <div  className='item'>
        <Cartitem />
      </div>
      <div className='sub'>
      <Subscription />
      </div>
      <div className="get-mobile-searchbar ad">
                <h1 className="get-mobile-search-header">Order Now!</h1>
                <SearchBar whitebackground/>
            </div>
            <Footer />
    </div>
)
 
export default Cart
