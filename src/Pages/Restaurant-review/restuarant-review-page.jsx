import React from 'react';

import './restaurant-review-page.style.scss';

import Header from '../Restaurant/Components/Header';
import Footer from '../../components/Footer';
import { ReactComponent as Offers} from '../../assets/offers.svg';
import FoodMenu from '../Restaurant/Components/FoodMenu';
import CommentWrapper from './components/comment-wrapper/comment wrapper';
import SelectedSection from './components/selected-section/selected-section';

const RestaurantReviewPage = () => (
    <div className="review-page">
        <Header />
        <div className="review-body">
            <FoodMenu />
            <div className="comment-section">
                <SelectedSection />
                <CommentWrapper />
            </div>
            <Offers />
        </div>
        <Footer />
    </div>
)

export default RestaurantReviewPage;
