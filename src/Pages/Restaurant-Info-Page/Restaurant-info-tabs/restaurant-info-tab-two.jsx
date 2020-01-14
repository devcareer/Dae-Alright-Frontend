import React from 'react'

import './restaurant-info-tab-two.styles.scss'
import RestaurantStar from '../../Restaurant/Components/RestauRating'
import RestaurantReview from '../components/Restaurant-Reviews'


const RestaurantInfoTabTwo = () => (
    <div className='middle-main-section-bodies-reviews'>
        <div className='restaurant-review-filter'>
            <div className="for-newest-reviews">
                <select name="newest-reviews" size="1" className='newest-reviews' >
                    <option>Newsest Reviews</option>
                </select>
            </div>
        </div>
        
       <RestaurantReview />
       <RestaurantReview />
       <RestaurantReview />

        <div className='second-to-last restaurant-review-card' >
            <div className='for-dots'>
                <p className='dots'>...</p>   
            </div>

            <div className='restaurant-reviewers-section' >
                <p className='restaurant-reviewers-name'>Bosun Jones</p>
                <p className='restaurant-reviewers-topic'>Its always great to get warm food</p>
                <div className='restaurant-reviewers-rating'>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578920234/lg1mb0ivn35oayfvsrm1.png" alt="star"/>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578920234/lg1mb0ivn35oayfvsrm1.png" alt="star"/>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578920234/lg1mb0ivn35oayfvsrm1.png" alt="star"/>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578920234/lg1mb0ivn35oayfvsrm1.png" alt="star"/>
                    <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578920234/lg1mb0ivn35oayfvsrm1.png" alt="star"/>
                </div>
                <p className='restaurant-reviewers-date'>16 DEC 2016</p>
                <p className='restaurant-reviewers-details'>
                    Had the fish platter between 2people for lunch, along with a cocktail and coffee. It was a great place, food was tasty, presentation was lovely. Recommend to anyone. Had a great day in Ajegunle.
                </p>
            </div>
            
        </div>

        <div className='loading-more for-local-assorted-main-button'>
            <button className='local-assorted-main-button'>
                Load More
            </button>
        </div>
    
    </div>
)

export default RestaurantInfoTabTwo 