import React from "react"
import "./Homepage.scss"

import Header from "../Homepage/Homepage-component/header"
import Procedure from "./Homepage-component/how-it-work"
import Order from "../Homepage/Homepage-component/order-text"
import Subscription from "./Homepage-component/subscription"
import GetMobile from "./Homepage-component/get-mobile"
import Footer from "../../../src/components/Footer"
import Vendor from "../Homepage/Homepage-component/vendor"


function Homepage() {
    return (
        <div className="homepage">
            <Header />
            <Procedure />
            <Vendor />
            <Order />
            <Subscription />
            <GetMobile />
            <Footer />
        </div>
    )
}

export default Homepage