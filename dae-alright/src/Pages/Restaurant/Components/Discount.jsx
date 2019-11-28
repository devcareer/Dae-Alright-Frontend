import React from "react";
import offers from "../../../assets/offers.svg";

const Discount = () => {
  return (
    <div>
      <img src={offers} className="discount-image" height="400px" width="301px" alt="offers and discounts" />
      <div className="offers-percentage">
          <p>15% Off</p>
      </div>
      <div className="offers">View Offers</div>
      <p>GOOD LUCK</p>
   
    </div>
  );
};

export default Discount;
