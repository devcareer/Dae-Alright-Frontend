import React from "react"
import "./order-dashboard.scss"
import DashboardHeader from "../dashboard-header"
import OrderList from "../order-list"
import Footer from "../../../components/Footer"


const DashboardOrder = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="order-section">
                <h2 className="order-head">Orders</h2>
                <div className="order-div">
                    <div className="order-div-div">
                        <input className="order-input" type="text" placeholder="Order id" />
                        <button className="order-button" type="submit">Search</button>
                    </div>
                    <select className="order-select">
                        <option>Select Category</option>
                    </select>
                </div>

                <OrderList />
                

                <div className="buttons-div">
                <button className="buttons" type="submit">View All</button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DashboardOrder