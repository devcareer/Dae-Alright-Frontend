import React from 'react'
import './Restaurant-Info-Page.style.scss'
import Footer from '../../components/Footer/index'

function RestaurantInfo() {
    return (
        <body className='restaurant-page'>
            <header className='restaurant-page-header'></header>
            <main className='restaurant-page-main'>
                <div className='left-main-section'></div>
                <div className='middle-main-section'>
                    <div className='middle-main-section-titles'>
                        <div className='main-section-titles menu'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/ayirh2x9edkkqqhy7gjb.png'/> Menu </p>
                        </div>
                        <div className='main-section-titles reviews'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501477/qp96zwcecs2lfdu36ee8.png'/> Reviews (1) </p>
                        </div>
                        <div className='main-section-titles restaurant-info'>
                            <p><img  alt='menu icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501477/xuqj0atynsjwzla4ubhk.png'/> Restaurant Info </p>
                        </div>
                    </div>
                    <div className='middle-main-section-bodies'>
                        <div className='main-address-details'>
                            <h2>Overview Ajegunle Finest Chao</h2>
                            <p>
                                Base prepared fresg daily. Extra toppings are availbale in chose extra.
                                Choose ur sauce: Go for BBQ sauce or piri piri suace with your pizza base for no extra cost. Choose you cut: triangular, square, finges.
                            </p>
                        </div>
                        <div className='main-information-details'>
                            <div className='contact-details'>
                                <h2>Contact Details</h2>
                                <p>
                                    <img  alt='location icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/qkfwznycw2rapvpzysur.png'/>
                                    <span>Pizza Express Restaurants, Boundary, Ajegunle.</span>
                                </p>
                                <p>
                                    <img  alt='phone icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/qkfwznycw2rapvpzysur.png'/>
                                    <span>07037822540</span>
                                </p>
                                <p>
                                    <img  alt='world wide web icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/qkfwznycw2rapvpzysur.png'/>
                                    <span><a href='www.ajegunlefinestfood.co'>http://www.ajegunlefinestfood.co</a></span>
                                </p>
                                <p>
                                    <img  alt='email icon' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577444808/qkfwznycw2rapvpzysur.png'/>
                                    <span><a href='www.gmail.com'>Send Enquiry by Email</a></span>
                                </p>
                            </div>
                            <div className='opening-hours'>
                                <h2>Opening Hours</h2>
                                <div className="days-and-hour">
                                    <select name="browsers" size="1" class="row2item1">
                                        <option>Monday  11am to 11pm</option>
                                        <option value="chrome">Google Chrome</option>
                                        <option value="safari">Safari</option>
                                        <option value="explorer">Internet Explorer</option>
                                        <option value="firefox">Firefox</option>
                                        <option value="opera">Opera</option>
                                        <option value="brave">Brave </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='main-scan-code'>
                            <img alt='scan code' src='https://res.cloudinary.com/dtbjhs8a6/image/upload/v1577501585/dylau8bpz2nqnqoizwj2.png' />
                        </div>
                    </div>
                </div>
                <div className='right-main-section'></div>
            </main>
            <footer className='restaurant-page-footer'></footer>
        </body>
    )
}

export default RestaurantInfo