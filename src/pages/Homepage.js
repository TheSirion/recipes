import React from 'react';
import HomepageCarousel from '../components/HomepageCarousel';
// import ThirtyMinMeals from '../components/ThirtyMinMeals';
import Seasonal from '../components/Seasonal';
// import DietFriendly from '../components/DietFriendly';
import Footer from '../components/Footer';
import DietAndQuickCategorySection from '../components/DietAndQuickCategorySection';

export default function Homepage() {

    const dietFriendlyApiUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=dietary';
    const thirtyMinMealsApiUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';


    return (
        <div>
            <HomepageCarousel />
            <DietAndQuickCategorySection title="Thirty Minute Meals" apiUrl={thirtyMinMealsApiUrl} />
            <Seasonal />
            <DietAndQuickCategorySection title="Diet Friendly" apiUrl={dietFriendlyApiUrl} />
            <Footer />
        </div>
    )
}