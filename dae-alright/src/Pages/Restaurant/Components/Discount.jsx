import React from "react";
import offers from "../../../assets/offers.svg";
import "./Discounts.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Discount = () => {
  return (
    <Container>
      <Row>
        <img
          src={offers}
          className="discount-image"
          height="400px"
          width="301px"
          alt="offers and discounts"
        />
        <div className="discount-wrapper">
          <p className="percent-off">15% Off</p>
          <p
            style={{
              color: "#ED7B43",
              fontWeight: "bold",
              marginTop: "5%",
              lineHeight: "2%",
              fontSize: "12px",
              marginLeft: "2%"
            }}
          >
            DISCOUNT
          </p>
        </div>
        <a className="offers" href="">
          VIEW OFFERS
        </a>
      </Row>
    </Container>
  );
};

export default Discount;
