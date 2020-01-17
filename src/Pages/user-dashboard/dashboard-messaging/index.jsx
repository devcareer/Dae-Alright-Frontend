import React from 'react';
import Footer from '../../../components/Footer'
import DashboardHeader from '../dashboard-header'
import './dashboard-messaging.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faChevronLeft,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'


const UserDashboardMessaging = () => (
  <div className="">
    <DashboardHeader />
    <div className="message-container">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="icon-class-message"
      /> <span>Messaging</span>
      <div className="message-container-box">
        <div className="sender-detail">
          <FontAwesomeIcon
            icon={faUserCircle}
            size='xs'
            className="icon-class-circle"
          />
          <div>Richard Williams</div>
        </div>
        <div className="text-box">
          <FontAwesomeIcon
            icon={faUserCircle}
            size='xs'
            className="icon-class-circle"
          />
          <div className="message-box">
            <span className="message">Hello</span>
            <span className='time'>
              10:15 on October 21, 2019</span>

          </div>
        </div>
        <div className="receive text-box">

          <div className="message-box">
            <span className="message">Hi Bosun Jones how may we help you with our bespoke service</span>
            <span className='time'>
              20:49 on Apr 18, 2019
</span>

          </div>
          <FontAwesomeIcon
            icon={faUserCircle}
            size='xs'
            className="icon-class-circle"
          />
        </div>
        <div className="text-box">
          <FontAwesomeIcon
            icon={faUserCircle}
            size='xs'
            className="icon-class-circle"
          />
          <div className="message-box">
            <span className="message">I’ve issued a refund since last week and you guys haven’t credited me please what’s wrong
</span>
            <span className='time'>
              10:15 on October 21, 2019</span>

          </div>
        </div>
        <div className="receive text-box">

          <div className="message-box">
            <span className="message">Please so for the incovenience we’ll credit you asap thank you

</span>
            <span className='time'>
              20:49 on Apr 18, 2019
</span>

          </div>
          <FontAwesomeIcon
            icon={faUserCircle}
            size='xs'
            className="icon-class-circle"
          />
        </div>
        <div className="input-container">
          <label htmlFor="file-input">
            <FontAwesomeIcon
              icon={faPlusCircle}
              size='xs'
              className="icon-class-select"
            />
          </label>

          <input id="file-input" type="file" style={{ display: 'none' }} />
          <input type="text" name="" placeholder='Message' id="" />
          <button>Send</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default UserDashboardMessaging;

