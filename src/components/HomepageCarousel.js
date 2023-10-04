import { useEffect, useState, useRef } from 'react'

import ScrollCarousel from 'scroll-carousel-react';
import "../index.css";

import { CachedAPIRequest } from './util/CachedAPIRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <h1 className='text-4xl font-bold text-center py-20 hover:underline decoration-2 decoration-[#f79540] cursor-pointer underline-offset-8'>Popular Dishes
                <FontAwesomeIcon icon={faArrowRight} className="pl-4" />
            </h1>

            {apiData ? (
                <ScrollCarousel
                    autoplay
                    autoplaySpeed={4}
                    speed={8}
                    onReady={() => console.log('I am ready')}
                >
                    {apiData.map((meal) => (
                        <div key={meal.id} className='relative cursor-pointer mb-10 border-2 border-[#f79540] rounded h-[22rem] w-72 overflow-hidden !important' onClick={meal.src}>
                            <img src={meal.thumbnail_url} alt='recipe' className='h-72 w-100 rounded' />
                            <h2 className='text-md m-1'>{meal.name}</h2>
                            {/* <a className='m-1 absolute bottom-0 left-0 hover:underline decoration-2 decoration-[#f79540] cursor-pointer underline-offset-8 object-right-bottom' href={meal.src}>See Recipe</a> */}
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
