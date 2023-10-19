import NavMenu from './NavMenu';
import Search from './Search';

export default function Navbar() {
  const dinnersMenu = {
    name: 'Dinners',
    items: [
      '5 Ingredient Dinners',
      '30-Minute Meals',
      'Healthy',
      'Main Course',
      'Soups',
      'View All',
    ],
  };

  const mealsMenu = {
    name: 'Meals',
    items: [
      'Breakfast',
      'Side Dishes',
      'Appetizers',
      'Salads',
      'Snacks',
      'Drinks',
      'View All',
    ],
  };

  const cuisinesMenu = {
    name: 'Cuisines',
    items: [
      'Mexican',
      'Italian',
      'Chinese',
      'Southern',
      'Indian',
      'Greek',
      'View All',
    ],
  };

  const mealPrepMenu = {
    name: 'Meal Prep',
    items: ['Meal Prep Day', 'Meal Prep Week', 'Templates'],
  };

  return (
    <>
      <div class='absolute inset-0'>
        <div class='absolute inset-x-0 bottom-0 h-20'></div>
      </div>
      <div className='flex justify-evenly bg-white bg-opacity-50 items-center h-28 mx-auto px-12'>
        <h1 className='w-100 text-5xl text-[#2f4c28] font-bold p-12'>
          Spice & Nice
        </h1>
        <div className='flex justify-center'>
          <NavMenu menuItems={dinnersMenu} />
          <NavMenu menuItems={mealsMenu} />
          <NavMenu menuItems={cuisinesMenu} />
          <NavMenu menuItems={mealPrepMenu} />
        </div>
        <Search />
      </div>
    </>
  );
}
