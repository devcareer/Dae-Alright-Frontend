import React from "react";

import FormInput from "../../../components/FormInput/index";
// import InputRange from 'react-input-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./searchfilter.scss";

class Searchfilter extends React.Component{
  constructor(){
    super();

    this.state = {}
    
  }
  // handleChange = (e) => {
  //   const {value} = e.target;
  //   console.log(value, 'is targeted');
  //   }
    render(){
      return(
        
        <div className="filter">
        {/* <InputRange draggableTrack maxValue={100} minValue={1} value={this.state.value2} style={{background: 'green'}}/> */}
    <h3 className="search">Search Filters</h3>
    {/* change to class, add onsubmit */}
    <form className="search-form">
      {/* add onchange event */}
      <FormInput
        placeholder={"Search your favourite food..."}
        className="input"
      />
      <br />
      <input type="radio" name="food" className="food-item" /> Local Assorted{" "}
      <br />
      <input type="radio" name="food" className="food-item" /> Wanke Oyinbo{" "}
      <br />
      <input type="radio" name="food" className="food-item" /> Oyinbo Fufu{" "}
      <br />
      <input type="radio" name="food" className="food-item" /> Chicken Pie{" "}
      <br />
      <input type="radio" name="food" className="food-item" /> Garri Combo{" "}
      <br />
      <input type="radio" name="food" className="food-item" /> Beef <br />
      <hr />
      <section className="delivery">
        <h3 className="deliveryText">food for</h3>
        <input
          type="radio"
          name="deliveryMethod"
          className="deliveryMethod"
        />{" "}
        Delivery
        <input
          type="radio"
          name="deliveryMethod"
          className="deliveryMethod"
        />{" "}
        Pickup <br />
      </section>
      <hr />
      <section className="tags">
        <h5 className="tag"> tags</h5>
        <section className="tagged">
          <button className="taggedFood">
            apple <span className="cancel">x</span>
          </button>
          <button className="taggedFood">
            Beef <span className="cancel">x</span>
          </button>
          <button className="taggedFood">
            Beans <span className="cancel">x</span>
          </button>
          <button className="taggedFood">
            Plaintain <span className="cancel">x</span>
          </button>
          <button className="taggedFood">
            Soup <span className="cancel">x</span>
          </button>
        </section>
      </section>
      <hr />
      <section className="min-order">
        <h3 className="minOrder">
          minimum order amount
        </h3>
        <div class="range-group">
          <input
            class="range-input"
            value='1'
            min='1'
            max="10"
            step="1"
            type="range"
           onChange={() => this.handlechange}
          />
          <input
            class="range-input"
            // value=""
            min="1"
            max="10"
            step="1"
            type="range"
          />
        </div>
        <div class="number-group">
          <input
            class="number-input"
            type="number"
            value='1'
            min="1"
            max="10"
          />

          <input
            class="number-input"
            type="number"
            value="10"
            min="0"
            max="10"
          />
        </div>
      </section>
      <hr/>
      <section className="rating">
        <h3 className="rate">rating</h3>
        <section className="ratingSection">
        <input type="radio" name="star" className='rateCheck'/> 
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <br/>
        <input type="radio" name="star" className='rateCheck'/> 
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <br/>
        <input type="radio" name="star" className='rateCheck'/>
         <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <br/>
        <input type="radio" name="star" className='rateCheck'/> 
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <br/>
        <input type="radio" name="star" className='rateCheck'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        <FontAwesomeIcon icon={faStar} color ="#D6DB46"  className='star'/>
        </section>
      </section>
      <hr />
      <input type="button"  className='searchBtn' value="Search"/>
    </form>
  </div>
    )
  }

}
export default Searchfilter;
