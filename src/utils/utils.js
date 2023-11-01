import { CachedAPIRequest } from './CachedAPIRequest';

export function getRandomElements(inputArray) {
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

const API_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=';

// HomepageCarousel.js
export async function fetchFeaturedRecipes(tag) {
  return CachedAPIRequest(API_URL + tag, `20_random_recipes_${tag}`);
}

// DietAndQuickCategorySection.js
export async function fetchDataByTag(apiUrl, tag) {
  return CachedAPIRequest(apiUrl, tag);
}

