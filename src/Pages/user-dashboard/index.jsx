import React from "react"
import "./user-dashboard.scss"
import Details from "../../components/Details"
import Footer from "../../components/Footer"
import User from "../../components/user-dashboard-header"


function UserDashboard() {
    return (
        <div className="dashboard">
            <Navigation />
            <User />
            <AuthNav />

            <div className="information">
                <h1 className="information-header">Account Information</h1>
                <div className="image-input">
                    <label className="camera"><img src="https://img.icons8.com/ios-glyphs/32/ffffff/camera.png" alt="" />
                    <input type="file" getUserMedia="image/*capture=camera" className="input-file"/>
                    </label>
                </div>

                <form className="user-form">
                    <input className="form-control input-text" type="text" placeholder="First Name" />
                    <input className="form-control input-text" type="text" placeholder="Last Name" />
                    <input className="form-control input-text" type="text" placeholder="Company Name" />
                    <input className="form-control input-text" type="email" placeholder="Email" />
                    <input className="form-control input-text" type="text" placeholder="Delivery Address" />
                    <button className="form-control button-text" type="button">Update</button>
                </form>
                <Details 
                    summary="Mobile Phone Settings"
                    text="Settings all the way"
                />
                <Details 
                    summary="Social Networks"
                    text="Settings all the way"
                />
                <Details 
                    summary="Notification"
                    text="Settings all the way"
                />
                <Details 
                    summary="Change Password"
                    text="Settings all the way"
                />
            </div>
            <Footer />
        </div>
    )
}

export default UserDashboard