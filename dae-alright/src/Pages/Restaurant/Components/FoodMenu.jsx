import React from 'react'
import {Form} from 'react-bootstrap'
import './FoodMenu.scss'


const FoodMenu = () =>{
    return(
        <div className="food-wrapper">
            <h4 className="food-category">Categories</h4>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Local Assorted" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Wanke Combo" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Chicken Pie" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Local Assorted" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Wanke Combo" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Chicken Pie" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Local Assorted" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Wanke Combo" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Chicken Pie" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Local Assorted" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Wanke Combo" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" /></div>
            <div className="link-border"><Form.Check className="food-cate" type="radio" label="Chicken Pie" /></div>
           
        </div>
    )
}


export default FoodMenu