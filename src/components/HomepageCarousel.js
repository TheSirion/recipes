import React, { useState, useEffect } from "react";
import ScrollCarousel from 'scroll-carousel-react';
import "../index.css";

// function getPopularDishes() {
//     fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=04e92dacf91c47bf9f6fb150b4da316c`
//     )
//         .then(response => response.json())
//         .then(data => {
//             setPopularDishes(data)
//         })
//         .catch(() => {
//             console.log("error")
//         })
// }


// export default function HomepageCarousel({ meal }) {
//     const [imageUrl, setImageUrl] = useState("");

//     useEffect(() => {
//         fetch(
//             `https://api.spoonacular.com/recipes/${meal.id}/complexSearch?sort=popularity&sortDirection=desc/information/&apiKey=04e92dacf91c47bf9f6fb150b4da316c`
//         )
//             .then(response => response.json())
//             .then(data => {
//                 setImageUrl(data.image)
//             })
//             .catch(() => {
//                 console.log("error")
//             })
//     }, [meal.id])

//     return (
//         <>
//             <h1 className='text-4xl text-center py-20'>Popular Dishes</h1>
//             <ScrollCarousel
//                 autoplay
//                 autoplaySpeed={2}
//                 speed={2}
//                 onReady={() => console.log('I am ready')}
//             >
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((meal) => (
//                     <div key={meal} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-60 w-96'>
//                         {meal}
//                         <img src={imageUrl} alt='recipe' />
//                         <h2>{meal.title}</h2>
//                         <a href={meal.sourceUrl}>See Recipe</a>
//                         <p></p>
//                     </div>
//                 ))}
//             </ScrollCarousel>
//         </>
//     );
// }