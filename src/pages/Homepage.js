import React from 'react';
import heroPic from '../assets/hero-pic.avif';
import HomepageCarousel from '../components/HomepageCarousel';
import ThirtyMinMeals from '../components/ThirtyMinMeals';


export default function Homepage() {
    return (
        <div>
            <img src={heroPic} alt="Food"></img>
            <HomepageCarousel />
            <ThirtyMinMeals />
        </div>
    )
}