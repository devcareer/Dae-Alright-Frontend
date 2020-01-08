
import React from 'react'
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar";
import Navigation from '../../components/Navigation'
import ReviewOrderItem from '../../components/reviewOrderItem/'
import classes from './reviewOrder.module.scss'
import './reviewOrder.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope

} from "@fortawesome/free-solid-svg-icons";

const ReviewOrder = () => (
  <>
    <Navigation />
    <section className={classes.tab}>
      <div className={classes.tabItems}>
        <h4>Review your Order</h4>
        < div className ={classes.spanColor} ></div>
        
      </div>
      <div className={classes.tabItems}>
        <h4>Payment</h4>
        <span ></span>
      </div>
      <div className={classes.tabItems}>
        <h4>Done</h4>
        < span className='span-last'></span>
      </div>
    </section>
    <div className={classes.reviewBody}>
      <h4>1. Select your delivery information:</h4>
      <div className={classes.reviewBox}>
        <p><input type="radio" checked />&nbsp;&nbsp;&nbsp;&nbsp; Bosun Jones <br /></p>
        <p>  <FontAwesomeIcon
          icon={faMapMarkerAlt
          }
          size="md"
          className={classes.iconClass}
        /> No 39 Mba Street Off Achapko Bus-Stop Ajegunle Apapa Lagos
    </p>
        <p>  <FontAwesomeIcon icon={faPhoneAlt
        }
          size="md"
          className={classes.iconClass}/>
          +234 82 666 6666
          </p>

        <p> <FontAwesomeIcon icon={faEnvelope
        }
          size="sm"
          className={classes.iconClass}/>

            Bosunjones@gmail.com</p>
      </div>

        <h4>2. Review Order:</h4>
        <div className={classes.reviewBox}>
          <div className={classes.resturantAboutOrderRow}>
            <p> Restaurant: Ajegunle Finest Chao!</p>
            <p> <FontAwesomeIcon icon={faEnvelope
        }
          size="md"
          style = {{color:"#D6DB46"}}
          className={classes.iconClass}/>
Message Restaurant</p>
          </div>
          <div className={classes.resturantOrderRow}>
            <div className={classes.resturantOrderRowLeft}>
              <p>Product Name &amp; Details</p>
            </div>
            <div className={classes.resturantOrderRowRight}>
              <span>Quality</span>
              </div>
              <div className={classes.resturantOrderRowRight}>
              <span>Price</span>
              </div>
              <div className={classes.resturantOrderRowRight}>
              <span>Delivery Details</span>
              </div>

              
            </div>
            <ReviewOrderItem/>
          </div>

       
        <h4>3. Payment:</h4>
        <div className={classes.reviewBox}>
          <p><input type="radio" /> Pay on Delivery <br /></p>
          <p><input type="radio" checked /> Pay with Cards <img src='https://res.cloudinary.com/bamiogunfemi/image/upload/v1578419498/payment-gateway_lt30oz.png' alt="Payment Gateway" /> <br /></p>

        </div>
        <div className={classes.proceedBox}>
        <p>Your Total : <span className={classes.colorGreen}>#500</span></p>
        <button>Proceed to Payment</button>
       
        </div>

        <div className={classes.orderNow}>
        <center>
          <h2>Order Now!</h2>
          <SearchBar whitebackground />
        </center>
      </div>
      <Footer />
      </div>
  </>

    )
    export default ReviewOrder
