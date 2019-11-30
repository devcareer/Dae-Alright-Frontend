import React from "react";
import StarRatingComponent from "react-star-rating-component";

class RestaurantStar extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starColor="#D6DB46"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          emptyStarColor={"grey"}
        />
      </div>
    );
  }
}
export default RestaurantStar;
