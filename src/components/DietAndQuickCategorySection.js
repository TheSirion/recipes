import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
// import { CachedAPIRequest } from '../utils/CachedAPIRequest';
// import { getRandomElements } from '../utils/utils';
import { fetchDataByTag } from '../utils/utils';


export default function DietAndQuickCategorySection({ apiUrl, title, tag }) {
  const [apiData, setData] = useState(undefined);
  const loaded = useRef(false);

  useEffect(() => {
    /* Band-aid solution. Component was rendering twice..
    couldn't quite figure out why, this solves that. */
    if (loaded.current) return;
    else loaded.current = true;

    // Create CachedAPIRequest - use the provided API URL with the specified tag
    const fetchData = async () => {
      const data = await fetchDataByTag(apiUrl, tag);

      // Customize the data processing as needed
      if (data != null) setData(data.slice(0, 6)); 
    };

    fetchData();
  }, [apiUrl, tag]);

  return (
    <div className='h-[75rem] relative bg-slate-100'>
      <div className='flex justify-between py-24 px-28'>
        <h1 className='text-5xl font-bold text-[#292015] underline decoration-6 decoration-[#86905e] cursor-pointer underline-offset-8'>
          {title}
        </h1>
        <h1 className='text-4xl font-bold text-right text-[#D57D18] cursor-pointer underline-offset-8'>
          See More
          <FontAwesomeIcon
            icon={faArrowRight}
            className='pl-4 text-black'
          />
        </h1>
      </div>

      <div className='grid grid-cols-3 gap-8'>
        {apiData ? (
          apiData.map(meal => (
            <div
              key={meal.id}
              className='card-content p-8 rounded-lg'>
              <div className='text-left mx-20'>
                <div className='relative'>
                  <img
                    src={meal.thumbnail_url}
                    alt='recipe'
                    className='shadow-2xl rounded-md h-72 w-100 object-cover'
                  />
                </div>
                <div className='mt-4'>
                  <h2 className='text-lg'>{meal.name}</h2>
                  <a
                    className='hover:underline decoration-2 decoration-[#D57D18] cursor-pointer underline-offset-8'
                    href={meal.src}>
                    See Recipe
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* TODO   */
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}