import React from "react";
import FoodList from "./FoodList";
import "./FoodCard.scss";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import DashMenu from "./DashMenu";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FoodCard extends React.Component {
  constructor() {
    super();
    this.state = {
      fooditems: FoodList
    };
  }
  render() {
    const fudList = this.state.fooditems.map(item => (
      <Container>
        <div key={item.key} className="food-card">
          <img src={item.imageUrl} className="image" alt="food" />

          <div className="food-info">
            <h5 className="food-name">{item.name}</h5>
            <p className="food-desc"> {item.description} </p>
          </div>

          <div className="food--price">
            <p className="food--price__order"> {item.order} </p>
            <button className=" food--price__btn btn-action">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    ));

    return (
      <div className="food-card-wrapper">
        <DashMenu />
        <div className="test">
          <FontAwesomeIcon
            className="search-icon"
            icon={faSearch}
            color="rgba(0, 0, 0, 0.2)"
          />
          <input
            type="text"
            className="search"
            placeholder="Find Food "
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </div>

        <p
          style={{
            fontStyle: "italic",
            color: "rgba(0, 0, 0, 0.4)",
            marginLeft: "3%",
            padding: "2%",
            fontSize: "12px"
          }}
        >
          Please note that you can individually add item to cart or you can just
          add all item to cart below
        </p>
        <h5
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginLeft: "5%",
            color: "#D6DB46"
          }}
        >
          Local Assorted
        </h5>
        <div>{fudList}</div>
        <a  className="master-button" href="">Add to cart</a>
      </div>
    );
  }
}

export default FoodCard;
