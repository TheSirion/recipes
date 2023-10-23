import { useEffect, useRef, useState } from 'react';

import ScrollCarousel from 'scroll-carousel-react';
import '../index.css';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CachedAPIRequest } from '../utils/CachedAPIRequest';

const API_URL =
  'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=';

/* Random tags I pulled from https://tasty.p.rapidapi.com/tags/list */
const featuredTags = [
  'dole_hearty_meals',
  'mccormick_world_hearty',
  'soul_food',
];

export default function HomepageCarousel() {
  const [apiData, setData] = useState(undefined);
  const loaded = useRef(false);

  /* Each load, randomly pick 1 random tag */
  const randomizeFeaturedTag = () => {
    const tag = Math.floor(Math.random() * featuredTags.length);
    console.log(`Using featured tag "${featuredTags[tag]}"`);

    return featuredTags[tag];
  };

  useEffect(() => {
    /* Band-aid solution. Component was rendering twice..
        couldn't quite figure out why, this solves that. */
    if (loaded.current) return;
    else loaded.current = true;

    // Create CachedAPIRequest - use random tag each visit
    const fetch = async () => {
      const tag = randomizeFeaturedTag();
      const data = await CachedAPIRequest(
        API_URL + tag,
        '20_random_recipes_' + tag
      );
      setData(data);
    };

    fetch();
  }, []);

  return (
    <>
      <div className='flex justify-between py-16 px-28'>
        <h1 className='text-5xl font-bold text-[#292015] underline decoration-6 decoration-[#86905e] cursor-pointer underline-offset-8'>
          Popular Dishes
        </h1>
        <h1 className='text-4xl font-bold text-right text-[#D57D18] cursor-pointer underline-offset-8'>
          See More
          <FontAwesomeIcon
            icon={faArrowRight}
            className='pl-4 text-black'
          />
        </h1>
      </div>

      {apiData ? (
        <ScrollCarousel
          autoplay
          autoplaySpeed={2}
          speed={2}
          onReady={() => console.log('I am ready')}>
          {apiData.map(meal => (
            <div
              key={meal.id}
              className='relative cursor-pointer mb-10 bg-[#292015] rounded h-72 w-72 overflow-hidden !important'>
              <img
                src={meal.thumbnail_url}
                alt='recipe'
                className='h-72 w-100 rounded'
              />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-md text-center m-1'>{meal.name}</h2>
                <a
                  className='m-1 hover:underline decoration-2 decoration-[#D57D18] cursor-pointer underline-offset-8'
                  href={meal.src}>
                  See Recipe
                </a>
              </div>
            </div>
          ))}
        </ScrollCarousel>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
