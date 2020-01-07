import React from "react"
import "../restaurant-order-list/restaurant-order-list.scss"

function RestaurantRefundList(props) {
    return (
        <div className="restaurant-refund">
                <div className="order-restaurant">
                    <p className="paragraph-order">Restaurant: <strong>{props.restaurantName}</strong></p>
                    <p className="paragraph-order"><img className="order-restaurant-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578351991/rkxz0f0aqwzh9imsrosw.png" alt="" /><strong>Message Restaurant</strong></p>
                </div>

             <div className="order-list_div">
                <div className="order-list_div_div">
                    <p className="order-list_div_paragraph">Product Name & Details</p>
                    <div className="order-list_product">
                       <img src={props.image} alt="" /> 
                       <div className="product-div">
                           <p className="paragraph-order"><strong>{props.product}</strong></p> 
                            <p className="paragraph-order">ID: {props.id}</p> 
                            <div className="hidden">
                                <p className="paragraph-order">Price: {props.price}</p>
                            </div>
                       </div>   
                    </div>
                    
                </div>
                <div className="mobile-hidden">
                    <p className="order-list_div_paragraph">Status</p>
                    <div className="product-div2">
                         <br />
                         <p className="paragraph-order"><strong>{props.status}</strong></p> 
                    </div>
                   
                </div>
                <div className="mobile-hidden">
                    <p className="order-list_div_paragraph">Price</p>
                    <br />
                    <p className="paragraph-order"><strong>{props.price}</strong></p> 
                </div>
                <div className="mobile-hidden">
                    <p className="order-list_div_paragraph">Date</p>
                    <br />
                    <p className="paragraph-order"><strong>{props.date}</strong></p>     
                </div>
            </div>
            <div className="order-btn-div">
                <button className="order-btn" type="submit">Cancel Refund</button>
                <button className="order-btn" type="submit">Delete</button>
            </div>
         </div>
    )
}

export default RestaurantRefundList