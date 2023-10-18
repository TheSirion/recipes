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
