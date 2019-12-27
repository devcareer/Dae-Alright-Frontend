import React from "react"
import "./subscription.scss"
import FormInput from "../../../../components/FormInput"
import Button from "../../../../components/Button/index"

function Subscription() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 subscription">
                    <h1 className="subscription-header">Subscribe to our news letter</h1>
                    <p className="subscription-paragraph">Don't miss out on our great offers & Receive deals from all our
                        <br />top restaurants via e-mail.</p>
                    <div className="subscription-input">
                        <FormInput 
                            placeholder="Name" 
                            type="text"
                            className="input px-4"
                           
                        />
                        <FormInput 
                            placeholder="Email" 
                            type="email" 
                            
                        />
                        <Button text="Subscribe" className="subscription-button"/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}


export default Subscription