import { useEffect, useState, useRef } from 'react';
import { CachedAPIRequest } from './util/CachedAPIRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=dietary';

function getRandomElements(inputArray) {
    // Make a copy of the input array to avoid modifying the original array
    const shuffledArray = [...inputArray];

    // Fisher-Yates (Knuth) Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Return the first 5 elements of the shuffled array
    return shuffledArray.slice(0, 6);
}

export default function DietFriendly() {

    const [apiData, setData] = useState(undefined)
    const loaded = useRef(false)

    useEffect(() => {
        /* Band-aid solution. Component was rendering twice..
        couldn't quite figure out why, this solves that. */
        if (loaded.current) return
        else loaded.current = true

        // Create CachedAPIRequest - use random tag each visit
        const fetch = async () => {
            const data = await CachedAPIRequest(API_URL, 'dietary')

            // Our API call retrieves 20 random meals under 30 minutes
            // We only want to display 5 of those at a time
            if (data != null) setData(getRandomElements(data))
        }

        fetch();
    }, [])


    return (
        <div className="h-[75rem] relative bg-slate-100">
            <div className='flex justify-between py-24 px-28'>
                <h1 className='text-5xl font-bold text-[#292015] underline decoration-6 decoration-[#86905e] cursor-pointer underline-offset-8'>
                    Diet Friendly
                </h1>
                <h1 className='text-4xl font-bold text-right text-[#D57D18] cursor-pointer underline-offset-8'>
                    See More
                    <FontAwesomeIcon icon={faArrowRight} className="pl-4 text-black" />
                </h1>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {apiData ? apiData.map((meal) => (
                    <div key={meal.id} className='card-content p-8 rounded-lg'>
                        <div className='text-left mx-20'>
                            <div className='relative'>
                                <img
                                    src={meal.thumbnail_url}
                                    alt="recipe"
                                    className='shadow-2xl rounded-md h-72 w-100 object-cover'
                                />
                            </div>
                            <div className='mt-4'>
                                <h2 className="text-lg">{meal.name}</h2>
                                <a className='hover:underline decoration-2 decoration-[#D57D18] cursor-pointer underline-offset-8' href={meal.src}>See Recipe</a>
                            </div>
                        </div>
                    </div>
                )) : (
                    /* TODO   */
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}