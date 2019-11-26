import React from "react"
import "./Order-text.scss"
import Button from "../../../../components/Button"

function Order() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 order">
                    
                    <div>
                         <h1 className="order-header">“Dae Alright” food for all<br /> individuals</h1>
                    <p className="order-paragraph">Order lunch, fuel for meetings or late-night deliveries
                    to the<br /> office, at home or anywhere. Your favorite 
                    restaurants coming<br /> to your door step.
                    </p>
                    <Button text="Get Started" className="order-button"/>
                    </div>
                    <img className="order-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573721067/woh12ts1uqmugkyw8tjc.png" width="200" height="350" alt="" />
                </div>
                
            </div>
            
        </div>
    )
}
export default Order