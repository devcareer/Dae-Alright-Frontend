import React from 'react'

import './restaurant-info-tab-one.styles.scss'

import Button from'../../../components/Button/index'


const RestaurantInfoTabOne = () => (
    <div className='middle-main-section-bodies'>
        <div className='tab-one-title'>
            <p className='find-assorted-food'>Find Food</p>
            <div><img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578886160/vzqt40cltledqojyqouj.png" alt="search-assorted-food" className='search-assorted-food' /></div>
        </div>

        <p className='menu-description'>please note that you can individually add item to cart of you can just add all item too cart below</p>

        <h2 className='menu-title'>Local Assorted </h2>

        <div className='local-assorted-card'>
            <div className='local-assorted-description'>
                <div className='for-local-assorted-picture'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="local-assorted-picture" className='local-assorted-picture' />
                </div>
                <div className='for-local-assorted-description'>
                    <h3 className='local-assorted-description-one'>Chicken Tandoree Special 12" Dee Pan</h3>
                    <p className='local-assorted-description-two' >Cheese, Tomatoes and Italians herbs</p>
                </div>
            </div>
            <div className='for-local-assorted-price'>
                <h3 className='local-assorted-price' >#400</h3>
                <Button className='local-assoted-button' text='Add to Cart' />
            </div>
        </div>
        <div className='local-assorted-card'>
            <div className='local-assorted-description'>
                <div className='for-local-assorted-picture'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="local-assorted-picture" className='local-assorted-picture' />
                </div>
                <div className='for-local-assorted-description'>
                    <h3 className='local-assorted-description-one'>Chicken Tandoree Special 12" Dee Pan</h3>
                    <p className='local-assorted-description-two' >Cheese, Tomatoes and Italians herbs</p>
                </div>
            </div>
            <div className='for-local-assorted-price'>
                <h3 className='local-assorted-price' >#400</h3>
                <Button className='local-assoted-button' text='Add to Cart' />
            </div>
        </div>
        <div className='local-assorted-card'>
            <div className='local-assorted-description'>
                <div className='for-local-assorted-picture'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="local-assorted-picture" className='local-assorted-picture' />
                </div>
                <div className='for-local-assorted-description'>
                    <h3 className='local-assorted-description-one'>Chicken Tandoree Special 12" Dee Pan</h3>
                    <p className='local-assorted-description-two' >Cheese, Tomatoes and Italians herbs</p>
                </div>
            </div>
            <div className='for-local-assorted-price'>
                <h3 className='local-assorted-price' >#400</h3>
                <Button className='local-assoted-button' text='Add to Cart' />
            </div>
        </div>
        <div className='local-assorted-card'>
            <div className='local-assorted-description'>
                <div className='for-local-assorted-picture'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="local-assorted-picture" className='local-assorted-picture' />
                </div>
                <div className='for-local-assorted-description'>
                    <h3 className='local-assorted-description-one'>Chicken Tandoree Special 12" Dee Pan</h3>
                    <p className='local-assorted-description-two' >Cheese, Tomatoes and Italians herbs</p>
                </div>
            </div>
            <div className='for-local-assorted-price'>
                <h3 className='local-assorted-price' >#400</h3>
                <Button className='local-assoted-button' text='Add to Cart' />
            </div>
        </div>
        <div className='local-assorted-card'>
            <div className='local-assorted-description'>
                <div className='for-local-assorted-picture'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="local-assorted-picture" className='local-assorted-picture' />
                </div>
                <div className='for-local-assorted-description'>
                    <h3 className='local-assorted-description-one'>Chicken Tandoree Special 12" Dee Pan</h3>
                    <p className='local-assorted-description-two' >Cheese, Tomatoes and Italians herbs</p>
                </div>
            </div>
            <div className='for-local-assorted-price'>
                <h3 className='local-assorted-price' >#400</h3>
                <Button className='local-assoted-button' text='Add to Cart' />
            </div>
        </div>
        <div className='local-assorted-card'>
            <div className='local-assorted-description'>
                <div className='for-local-assorted-picture'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578128272/gffs5uctqukn7l6nj9wd.png" alt="local-assorted-picture" className='local-assorted-picture' />
                </div>
                <div className='for-local-assorted-description'>
                    <h3 className='local-assorted-description-one'>Chicken Tandoree Special 12" Dee Pan</h3>
                    <p className='local-assorted-description-two' >Cheese, Tomatoes and Italians herbs</p>
                </div>
            </div>
            <div className='for-local-assorted-price'>
                <h3 className='local-assorted-price' >#400</h3>
                <Button className='local-assoted-button' text='Add to Cart' />
            </div>
        </div>
        
        <div className='for-local-assorted-main-button'>
            <button className='local-assorted-main-button'>
                Add To Cart
            </button>
        </div>
    </div>
)

export default RestaurantInfoTabOne 