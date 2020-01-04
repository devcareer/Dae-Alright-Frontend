import React from "react";
import icon from "../../../assets/icon.svg";
import { faConciergeBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantStar from "./RestauRating";
import HeaderWraper from "../../../components/Header/HeaderWraper/index";
import Navigation from "../../../components/Navigation/index";

class Head extends React.Component {
  render() {
    return (
      <div>
        <HeaderWraper
          renderProp={() => (
            <div>
             <div style={{
               marginLeft: "2%"
             }}>
             <Navigation />
             </div>

              <div className="menu-head">
                <img
                  src={icon}
                  alt="restaurant logo"
                  className="restaulogo"
                  height="100"
                  width="100"
                />

                <div className="menu-head-content">
                  <h1 className="restaurant-title">AJEGUNLE FINEST CHAO!</h1>
                  <p className="restau-info">
                    {" "}
                    <FontAwesomeIcon
                      color="#d6db46"
                      icon={faConciergeBell}
                    />{" "}
                    All Local and International Dishes
                  </p>
                  <div className="ratings">
                    <RestaurantStar />
                  </div>

                  <p className="delivery-fee">Delivery fee: #400</p>
                  <p className="order-min-max">
                    Min Order: #500 Max Order: #700
                  </p>

                  <div className="menu-links">
                    <div className="menu-link">
                      <a href="#" className="link">
                        <FontAwesomeIcon icon={faEnvelope} /> Message Restaurant
                      </a>
                    </div>
                    <div className="menu-link__two">
                      <a href="#" className="link">
                        Visit site
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Head;
