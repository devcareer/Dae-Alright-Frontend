import React from "react"
import "./order-list.scss"
import RestaurantOrderList from "../restaurant-order-list"

function OrderList(props) {
    console.log(props.summary)
    return (
        <div className="order-list">
            <RestaurantOrderList 
                 restaurantName="Ajengunle Finest Chao"
                 image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png"
                 product="Chicken Tandoori Special 12' Deep Pan"
                 id="23455678"
                 status="Received"
                 price="#400"
                 summary="#100"
                 delivery="45Min - 1hr"
            />
        </div>
    )
}

export default OrderList