import React from "react";
import { Form } from "react-bootstrap";
import "./FoodMenu.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodMenu = () => {
  return (
      
           <div className="food-wrapper">
      <h4 className="food-category">Categories</h4>
      <Form.Check className="food-cate" type="radio" label="Local Assorted" />
      <Form.Check className="food-cate" type="radio" label="Wanke Combo" />
      <Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" />
      <Form.Check className="food-cate" type="radio" label="Chicken Pie" />
      <Form.Check className="food-cate" type="radio" label="Local Assorted" />
      <Form.Check className="food-cate" type="radio" label="Wanke Combo" />
      <Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" />
      <Form.Check className="food-cate" type="radio" label="Chicken Pie" />
      <Form.Check className="food-cate" type="radio" label="Local Assorted" />
      <Form.Check className="food-cate" type="radio" label="Wanke Combo" />
      <Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" />
      <Form.Check className="food-cate" type="radio" label="Chicken Pie" />
      <Form.Check className="food-cate" type="radio" label="Local Assorted" />
      <Form.Check className="food-cate" type="radio" label="Wanke Combo" />
      <Form.Check className="food-cate" type="radio" label="Oyinbo Fufu" />
      <Form.Check className="food-cate" type="radio" label="Chicken Pie" />
    </div>
   
   
  );
};

export default FoodMenu;
