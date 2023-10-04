import { useState, useEffect, useRef } from 'react';

// Figured we'd make separate keys since we only get 500 calls a month
const ERICS_KEY = '29d1f15257mshe5f020a98cb379ap156e12jsn8b89eb930d0a'
const ALEXIS_KEY = 'bace081172mshf5e944d279a7e3fp1290cbjsn98df5b42dc94'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': ALEXIS_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

export const CachedAPIRequest = async (url, cacheName) => {
    try {
        // Check if data is available in the cache
        const cachedData = localStorage.getItem(cacheName);

        if (cachedData) {
            console.log('Loaded meal data from COOKIE!');
            return JSON.parse(cachedData)
        } else {
            // If not available in the cache, make the API request
            let response = null

            await fetch(url, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    const jsonData = result.results;

                    // Serialize and Save the API data to the cache
                    localStorage.setItem(cacheName, JSON.stringify(jsonData));

                    console.log('Loaded meal data from API!');

                    response = jsonData
                })
                .catch((error) => {
                    console.error(error);
                });

            return response
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return null
};