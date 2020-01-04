import React from "react";
import FoodCard from "./FoodCard";
import FoodMenu from "./FoodMenu";
import Discount from './Discount';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MenuWrapper = () => {
  return (
      <div >
 <Container>
      <Row>
      <Col lg={4}><FoodMenu /></Col>
      <Col lg={4}><FoodCard /></Col>
      <Col  lg={4}><Discount/></Col> 
      </Row>
    </Container>

      </div>
   
  );
};
export default MenuWrapper;