import React from "react";
import offers from "../../../assets/offers.svg";
import "./Discounts.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import goodfood from "../../../assets/goodfood.svg";

const Discount = () => {
  return (
    <Container>
      <Row>
        <div className="discount-wrapper">
          <img
            src={offers}
            className="discount-image"
            height="400px"
            width="100%"
            alt="offers and discounts"
          />
          <div className="discount">
            <img
              src={goodfood}
              className="good-food"
              height="80px"
              alt="good-food"
            />
            <p className="percent-off">15% Off</p>
            <p
              style={{
                color: "#ED7B43",
                fontWeight: "bold",
                marginTop: "5%",
                lineHeight: "2%",
                fontSize: "14px",
                marginLeft: "2%"
              }}
            >
              DISCOUNT
            </p>
          </div>
          <div className="offers">
            <a className="offers-link" href="">
              VIEW OFFERS
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Discount;
