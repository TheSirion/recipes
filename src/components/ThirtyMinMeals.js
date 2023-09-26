import React, { useState, useEffect } from "react";

const ERICS_KEY = '29d1f15257mshe5f020a98cb379ap156e12jsn8b89eb930d0a'

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': ERICS_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

export default function ThirtyMinMeals() {

    const [mealData, setMealData] = useState([])


    useEffect(() => {
        fetch(url, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                const slicedData = result.results.splice(0, 5); // We are using splice to modify the original array
                setMealData(slicedData);
                console.log('Loaded meal data from API!');
            })
            .catch((error) => {
                console.error(error);
            });

        // Empty array = run once, componentDidMount()
    }, []);


    return (
        <div className="h-[60rem] px-40 relative">
            <h1 className="text-4xl font-bold text-center py-20">Under 30 Minute Meals</h1>

            {mealData.map((meal, index) => (
                <div key={meal.id} className={`card-content mb-6 ${index === 0 ? 'float-right' : ''}`}>
                    <div className={`relative ${index === 0 ? 'float-right' : 'flex'}`}>
                        <img
                            src={meal.thumbnail_url}
                            alt="recipe"
                            className={`h-auto ${index === 0 ? 'w-[650px]' : 'w-40'}`}
                        />
                        <div className={`ml-4 ${index === 0 ? 'mt-[image_height] ml-0' : ''}`}>
                            <h2 className="text-lg">{meal.name}</h2>
                            <a href={meal.src}>See Recipe</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}