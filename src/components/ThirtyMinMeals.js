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
                setMealData(result.results);
                console.log('Loaded meal data from API!');
            })
            .catch((error) => {
                console.error(error);
            });

        // Empty array = run once, componentDidMount()
    }, [])

    return (
        <div className='h-[60rem] px-40'>
            <h1 className='text-4xl font-bold text-center py-20'>Under 30 Minute Meals</h1>

            {mealData.map((meal) => (
                    <div key={meal.id} className='card-content'>
                        <img src={meal.thumbnail_url} alt='recipe' className="h-auto w-[771px] float-right" />
                        <h2 className='text-lg m-1'>{meal.name}</h2>
                        <a href={meal.src}>See Recipe</a>
                    </div>
            ))}

        </div>
    );
}