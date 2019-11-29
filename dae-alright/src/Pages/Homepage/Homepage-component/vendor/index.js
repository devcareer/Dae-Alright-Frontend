import React, { Component } from 'react'
import "./vendor.scss"
import DummyList from "../../DummyList"
import Button from "../../../../components/Button"
// import { Link }  from "react-router-dom"


export default class Vendor extends Component {
    constructor() {
        super()
        this.state = {
            vendor: DummyList
        }
    }

    render() {
        const vendorList = this.state.vendor.map(item => (
                <div key={item.id} className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 vendor-list-item">
                                <img className="vendor-image img-responsive" src={item.imageUrl} alt="foodimage" />
                                <h1 className="vendor-text">{item.name}</h1>
                                <p className="vendor-paragraph">{item.address}</p>
                                <div className="vendor-order">
                                    <p className="vendor-order-paragraph"><strong>Min Order:</strong>{item.order}</p>
                                    <p className="vendor-order-paragraph2"><strong>Delivery: </strong>{item.delivery}</p>
                                </div> 
                            </div>
                        </div>
                    </div>     
                </div>
                
                ))
        return (
            <div className="vendor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 vendor">
                            <h1 className="vendor-header">Choose from the most popular</h1>
                            <p className="vendor-header2">Explore restaurants, bars, and cafes by locality</p>
                            <div className="vendor-list">
                                {vendorList}
                            </div>
                            <div className="vendorButton">
                                <Button text="Load More" className="vendor-button"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
