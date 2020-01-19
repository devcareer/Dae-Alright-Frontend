import React from "react"
import DashboardHeader from "../dashboard-header"
import Footer from "../../../components/Footer"
import "./dashboard-refund.scss"
import RestaurantRefundList from "../Restaurant-refund-list"


const OrderRefund = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="refund-section">
                <div className="refund-div">
                    <div className="refund-div-div">
                        <h2 className="refund-head">Refunds</h2>
                    </div>
                    <select className="refund-select">
                        <option>Select Category</option>
                    </select>
                </div>
           
               <RestaurantRefundList 
                     restaurantName="Ajengunle Finest Chao"
                     image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png"
                     product="Chicken Tandoori Special 12' Deep Pan"
                     id="23455678"
                     status="Pending"
                     price="#400"
                     date="20th May 2019"
               
               />

                <Footer />
            </div>
        </div>
    )
}

export default OrderRefund