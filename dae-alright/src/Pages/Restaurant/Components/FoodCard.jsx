import React from 'react';
import FoodList from './FoodList'
import './FoodCard.scss'



class FoodCard extends React.Component {
    constructor() {
      super()
      this.state = {
        fooditems: FoodList
      }
    }
    render() {
  
      const fudList = this.state.fooditems.map(item => (
          
        <div key={item.key} className="food-card">
          <img src={item.imageUrl} className='image' alt='food' />

          <div className="food-info">
            <h4>{item.name}</h4>
            <p> {item.description} </p>
          </div>

          
          <div className="food--price">
            <p className="food--price__order"> {item.order} </p>
            <button className=" food--price__btn btn-action">Add to Cart</button>
          </div>
        </div>
       
      ))
  
  
      return (
        <div style={{backgroundColor: "#ffffff", height: "1100px", width: "870px"}} >
         <div>{fudList}</div> 
        </div >
      )
    }
  }
  
  export default FoodCard;