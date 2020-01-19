import React from "react"
import "./statistics.scss"
import Navigation from "../../components/Navigation"
import User from "../../components/user-dashboard-header"
import AuthNav from "../../components/Navigation/AuthNav"
import Footer from "../../components/Footer"

const Statistics = () => {
    return (
        <div className="statistic">
            <Navigation />
            <User />
            <AuthNav />

            <div className="statistic-div">
                <div className="statistic-div-div">
                    <h1 className="statistic-text">Statistics</h1>
                    <select className="select"><option>11th June 2019</option></select> 
                </div>
                
                <img className="statistic-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579421222/startng/qieitd8b4cdpksbap5f2.png" alt="" />
            </div>

            <Footer />
        </div>
    )
}

export default Statistics