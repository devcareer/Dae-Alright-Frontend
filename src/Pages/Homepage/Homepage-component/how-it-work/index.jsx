import React from "react"
import "./how-it-work.scss"

function Procedure() {
    return (
       <div>
           <div className="container-fluid blank">
               
           </div>
           <div className="container procedure">
               <div className="row">
                   <div className="col-md-4">
                   <h4 className="procedure-header">How it works</h4>
                   <img alt="" className="procedure-image1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571818153/my%20project/pcb9b24aumpbtl5dlj9m.png" />
                        <br /><br />
                        <p className="procedure-paragraph"><strong>Select your food</strong></p>
                        <p className="procedure-paragraph1">Browse resturants that <br />deliver near you</p> 
                   </div>

                   <div className="col-md-4">
                   <img alt="" className="procedure-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571818153/my%20project/erk3qjxzbdmxulvvhahx.png" />
                        <br /><br />
                        <p className="procedure-paragraph"><strong>Receive it at your doorstep</strong></p>
                        <p className="procedure-paragraph1">Your order will be delivered to you in<br /> no time</p> 
                   </div>

                   <div className="col-md-4">
                   <img alt="" className="procedure-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571818153/my%20project/putabtdgxrvhsj5u6kqu.png" />
                        <br /><br />
                        <p className="procedure-paragraph"><strong>Enjoy your order</strong></p>
                        <p className="procedure-paragraph1">Enjoy your food items</p> 
                   </div>
               </div>
           </div>

        </div>
    )
}


export default Procedure