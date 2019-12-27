import React from "react";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar";
import classes from "./payment.module.scss";

const PaymentPage = props => {
  return (
    <div className={classes.paymentPageContainer}>
      <Navigation />
      <section className={classes.tab}>
        <div className={classes.tabItems}>
          <h4>Review your Order</h4>
          <span></span>
        </div>
        <div className={classes.tabItems}>
          <h4>Payment</h4>
          <span></span>
        </div>
        <div className={classes.tabItems}>
          <h4>Done</h4>
          <span></span>
        </div>
      </section>
      <div className={classes.paymentDetails}>
        <h3>Payment Details</h3>
        <p>
          i.e The brief illustration above easily helps the user to identify the
          needed information on the card
        </p>
      </div>
      <div className={classes.cardIllustration}>
        <img
          src="https://res.cloudinary.com/john-pels/image/upload/v1577410445/Credit_Card_Illustration.png"
          alt="card"
        />
      </div>
      <section className={classes.paymentForm}>
        <h5>Enter your credit card details for payments</h5>
        <form action="">
          <input type="text" placeholder="Card Holder Name" />
          <input type="text" placeholder="Card Number" />
          <div className={classes.inputGroup}>
            <input
              type="text"
              placeholder="Expiry Date"
              className={classes.inputLeft}
            />
            <input type="text" placeholder="CVV" />
          </div>
          <div className={classes.checkBox}>
            <input type="checkbox" name="" id="" />
            <span>Save this card for future payments?</span>
          </div>
          <button>Pay</button>
        </form>
      </section>
      <h2>Order Now!</h2>
      <SearchBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default PaymentPage;
