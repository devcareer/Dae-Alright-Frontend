import React from "react"
import "./restaurant-order-list.scss"

function RestaurantOrderList(props) {
    return (
        <div>
                <div className="order-restaurant">
                    <p className="paragraph-order">Restaurant: <strong>{props.restaurantName}</strong></p>
                    <p className="paragraph-order"><img src="" alt="" /><strong>Message Restaurant</strong></p>
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
                                <p className="paragraph-order">Delivery fee: {props.summary}</p>
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
                    <p className="order-list_div_paragraph">Summary</p>
                    <br />
                    <p className="paragraph-order"><strong>{props.summary}</strong></p> 
                    <p className="paragraph-order">Delivery Time:<strong>{props.delivery}</strong></p>
                    
                </div>
            </div>
         </div>
    )
}

export default RestaurantOrderList