import { useEffect, useState, useRef } from 'react'

import ScrollCarousel from 'scroll-carousel-react';
import "../index.css";

import { CachedAPIRequest } from './util/CachedAPIRequest'

const API_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=';

/* Random tags I pulled from https://tasty.p.rapidapi.com/tags/list */
const featuredTags = [
    'dole_hearty_meals',
    'mccormick_world_hearty',
    'soul_food',
]

/* Each load, randomly pick 1 random tag */
const randomFeaturedTag = () => {
    const tag = Math.floor(Math.random() * featuredTags.length)
    console.log(`Using featured tag "${featuredTags[tag]}"`)

    return featuredTags[tag]
}

export default function HomepageCarousel() {

    const [apiData, setData] = useState(undefined)
    const loaded = useRef(false)

    useEffect(() => {
        /* Band-aid solution. Component was rendering twice..
        couldn't quite figure out why, this solves that. */
        if (loaded.current) return
        else loaded.current = true

        // Create CachedAPIRequest - use random tag each visit
        const fetch = async () => {
            const tag = randomFeaturedTag()
            const data = await CachedAPIRequest(API_URL + tag, '20_random_recipes_' + tag)
            setData(data)
        }
        
        fetch();
    }, [])

    return (
        <>
            <h1 className='text-4xl font-bold text-center py-20'>Popular Dishes</h1>

            {apiData ? (
                <ScrollCarousel
                    autoplay
                    autoplaySpeed={2}
                    speed={2}
                    onReady={() => console.log('I am ready')}
                >
                    {apiData.map((meal) => (
                        <div key={meal.id} className='relative border-2 border-[#f79540] rounded h-[26rem] w-72 overflow-hidden !important'>
                            <img src={meal.thumbnail_url} alt='recipe' className='h-72 w-100 rounded' />
                            <h2 className='text-lg m-1'>{meal.name}</h2>
                            <button className='absolute bottom-0 left-0 border-2 border-[#f79540] rounded-full hover:bg-[#f79540] p-2 m-1 object-right-bottom'>See Recipe</button>
                        </div>
                    ))}

                </ScrollCarousel >
            ) : (
                /* TODO 
                    Technicially wont load until mealData has data.. 
                    we should intialize mealData with preset loading images
                */

                < p > Loading...</p >
            )
            }
        </>
    );
}
