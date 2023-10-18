import React from 'react';
import HomepageCarousel from '../components/HomepageCarousel';
import ThirtyMinMeals from '../components/ThirtyMinMeals';
import Seasonal from '../components/Seasonal';
import DietFriendly from '../components/DietFriendly';
import Footer from '../components/Footer';

export default function Homepage() {
    return (
        <div>
            <HomepageCarousel />
            <ThirtyMinMeals />
            <Seasonal />
            <DietFriendly />
            <Footer />
        </div>
    )
}