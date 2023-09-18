import React, { useState, useEffect } from "react";
import ScrollCarousel from 'scroll-carousel-react';
import "../index.css";

// Figured we'd make separate keys since we only get 500 calls a month
const ERICS_KEY = '29d1f15257mshe5f020a98cb379ap156e12jsn8b89eb930d0a'

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': ERICS_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

export default function HomepageCarousel() {

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
        <>
            <h1 className='text-4xl font-bold text-center py-20'>Popular Dishes</h1>

            {/*
             Technicially wont load until mealData has data.. 
             we should intialize mealData with preset loading images
            */}
            {mealData.length > 0 && (

                <ScrollCarousel
                    autoplay
                    autoplaySpeed={2}
                    speed={2}
                    onReady={() => console.log('I am ready')}
                >
                    {mealData.map((meal) => (
                        <div key={meal.id} className='relative border-2 border-[#f79540] rounded h-[26rem] w-72 overflow-hidden !important'>
                            <img src={meal.thumbnail_url} alt='recipe' className='h-72 w-100 rounded' />
                            <h2 className='text-lg m-1'>{meal.name}</h2>
                            <button className='absolute bottom-0 left-0 border-2 border-[#f79540] rounded-full hover:bg-[#f79540] p-2 m-1 object-right-bottom'>See Recipe</button>
                        </div>
                    ))}

                </ScrollCarousel >
            )}
        </>
    );
}
