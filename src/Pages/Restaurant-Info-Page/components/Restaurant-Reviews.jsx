import React from 'react'

import './Restaurant-Reviews.scss'

import RestaurantStar from '../../Restaurant/Components/RestauRating'

const RestaurantReview = () => (
    <div className='restaurant-review-card' >
            <div className='for-dots'>
                <p className='dots'>...</p>   
            </div>

            <div className='restaurant-reviewers-section' >
                <p className='restaurant-reviewers-name'>Bosun Jones</p>
                <p className='restaurant-reviewers-topic'>Its always great to get warm food</p>
                <div className='restaurant-reviewers-rating'>
                    <RestaurantStar />
                </div>
                <p className='restaurant-reviewers-date'>16 DEC 2016</p>
                <p className='restaurant-reviewers-details'>
                    Had the fish platter between 2people for lunch, along with a cocktail and coffee. It was a great place, food was tasty, presentation was lovely. Recommend to anyone. Had a great day in Ajegunle.
                </p>
            </div>
            
        </div>
) 

export default RestaurantReview