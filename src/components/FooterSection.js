import Footer from './Footer';

export default function FooterSection() {
    const dinnersMenu = {
        name: 'Dinners',
        items: [
            '5 Ingredient Dinners',
            '30-Minute Meals',
            'Healthy',
            'Main Course',
            'Soups',
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
        ],
    };

    const accountItems = {
        name: 'Account',
        items: ['Profile', 'Favorites', 'Sign Out'],
    };

    return (
        <div className="flex items-end w-full bg-white">

            <div className="w-full text-gray-700 bg-gray-300 body-font">
                <div
                    className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <h2 className="text-2xl">Spice & Nice</h2>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Everything Delish!</p>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <Footer footerItems={dinnersMenu} />
                        <Footer footerItems={mealsMenu} />
                        <Footer footerItems={cuisinesMenu} />
                        <Footer footerItems={accountItems} />
                    </div>
                </div>
                <div className="bg-gray-300">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-gray-700 capitalize xl:text-center">Made with ❤️ by Alexis Benavidez</p>
                    </div>
                </div>
            </div>

        </div>
    );
}



