import { useEffect, useState, useRef } from 'react';
import { CachedAPIRequest } from './util/CachedAPIRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

function getRandomElements(inputArray) {
    // Make a copy of the input array to avoid modifying the original array
    const shuffledArray = [...inputArray];

    // Fisher-Yates (Knuth) Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Return the first 5 elements of the shuffled array
    return shuffledArray.slice(0, 5);
}

export default function ThirtyMinMeals() {

    const [apiData, setData] = useState(undefined)
    const loaded = useRef(false)

    useEffect(() => {
        /* Band-aid solution. Component was rendering twice..
        couldn't quite figure out why, this solves that. */
        if (loaded.current) return
        else loaded.current = true

        // Create CachedAPIRequest - use random tag each visit
        const fetch = async () => {
            const data = await CachedAPIRequest(API_URL, 'under_30_minutes')

            // Our API call retrieves 20 random meals under 30 minutes
            // We only want to display 5 of those at a time
            if (data != null) setData(getRandomElements(data))
        }

        fetch();
    }, [])

    return (
        <div className="h-[60rem] px-40 bg-gradient-to-b from-white to-[#14B8A6] relative">
            <h1 className="text-4xl font-bold text-center py-20 hover:underline decoration-2 decoration-[#14B8A6] cursor-pointer underline-offset-8">Under 30 Minute Meals
                <FontAwesomeIcon icon={faArrowRight} className="pl-4" />
            </h1>

            {apiData ? apiData.map((meal, index) => (
                <div key={meal.id} className={`card-content mb-6 ${index === 0 ? 'float-right' : ''}`}>
                    <div className={`relative ${index === 0 ? 'float-right' : 'flex'}`}>
                        <img
                            src={meal.thumbnail_url}
                            alt="recipe"
                            className={`h-auto shadow-2xl ${index === 0 ? 'w-[650px]' : 'w-40'}`}
                        />
                        <div className={`ml-4 ${index === 0 ? 'mt-[image_height] ml-0' : ''}`}>
                            <h2 className="text-lg">{meal.name}</h2>
                            <a className='hover:underline decoration-2 decoration-[#14B8A6] cursor-pointer underline-offset-8' href={meal.src}>See Recipe</a>
                        </div>
                    </div>
                </div>
            )) : (
                /* TODO   */
                < p > Loading...</p >
            )}


        </div>
    );
}