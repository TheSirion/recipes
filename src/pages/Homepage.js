import React from 'react';
import HomepageCarousel from '../components/HomepageCarousel';
import ThirtyMinMeals from '../components/ThirtyMinMeals';
import Seasonal from '../components/Seasonal';


export default function Homepage() {
    return (
        <div>
            <HomepageCarousel />
            <ThirtyMinMeals />
            <Seasonal />
        </div>
    )
}