import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-100 text-5xl font-bold'>Title</h1>
            <ul className='flex justify-self-center'>
                <li className='p-4'>Dinners</li>
                <li className='p-4'>Meals</li>
                <li className='p-4'>Cuisines</li>
                <li className='p-4'>Meal Prep</li>
            </ul>
        </div>
    )
}


export default Navbar;