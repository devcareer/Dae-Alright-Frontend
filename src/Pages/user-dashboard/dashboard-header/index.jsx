import React from "react"
import "./dashboard-header.scss"
import AuthNav from "../../../components/Navigation/AuthNav"
import Navigation from "../../../components/Navigation"

const DashboardHeader = () => {
    return (
        <div>
            <Navigation />
                <div className="user-detail">
                    <img className="" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="" />
                    <h2 className="user-name">Richard Williams</h2>
                    <p className="user-plan">Gold Member</p>
                </div>
            <AuthNav />
        </div>
    )
}

export default DashboardHeader
