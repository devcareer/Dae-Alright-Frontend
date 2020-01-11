import React from 'react'

import './restaurant-info-tab-three.styles.scss'


const RestaurantInfoTabThree = () => (
                    <div className='middle-main-section-bodies'>
                        <div className='main-address-details'>
                            <h4>Overview Ajegunle Finest Chao</h4>
                            <p>
                                Base prepared fresg daily. Extra toppings are availbale in chose extra.
                                Choose ur sauce: Go for BBQ sauce or piri piri suace with your pizza base for no extra cost. Choose you cut: triangular, square, finges.
                            </p>
                        </div>
                        <div className='main-information-details'>
                            <div className='contact-details'>
                                <h4>Contact Details</h4>
                                <p>
                                    <img  alt='location icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577543238/gbey52v38yd3sbzpvl80.png'/>
                                    <span>Pizza Express Restaurants, Boundary, Ajegunle.</span>
                                </p>
                                <p>
                                    <img  alt='phone icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/rtuzjpvchrzb2oqsdfce.png'/>
                                    <span>07037822540</span>
                                </p>
                                <p>
                                    <img  alt='world wide web icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/qkfwznycw2rapvpzysur.png'/>
                                    <span><a href='www.ajegunlefinestfood.co'>http://www.ajegunlefinestfood.co</a></span>
                                </p>
                                <p className='email'>
                                    <img  alt='email icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577543298/zdbbs2nom26ggjt0iwji.png'/>
                                    <span><a href='www.gmail.com'>Send Enquiry by Email</a></span>
                                </p>
                            </div>
                            <div className='opening-hours'>
                                <h4>Opening Hours</h4>
                                <div className="days-and-hour-listed">
                                    <select name="browsers" size="1" class="days-and-hour">
                                        <option>Monday  11am to 11pm</option>
                                        <option value="chrome">Tuesday  11am to 11pm</option>
                                        <option value="safari">Wednesday  11am to 11pm</option>
                                        <option value="explorer">Thursday  11am to 11pm</option>
                                        <option value="firefox">Friday  11am to 11pm</option>
                                        <option value="opera">Saturday  11am to 11pm</option>
                                        <option value="brave">Sunday  11am to 11pm </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='main-scan-code'>
                            <img alt='scan code' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501585/dylau8bpz2nqnqoizwj2.png' />
                        </div>
                    </div>
)

export default RestaurantInfoTabThree 