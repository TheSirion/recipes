export default function Footer() {
    return (
        <div className="flex items-end w-full bg-white">

            <footer className="w-full text-gray-700 bg-gray-300 body-font">
                <div
                    className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <h2 className="text-2xl">Spice & Nice</h2>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Everything Delish!</p>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Dinners</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">5-Ingredient Meals</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">30-Minute Meals</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Healthy</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Main Course</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Soups</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Meals</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Breakfast</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Side Dishes</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Appetizers</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Salads</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Snacks</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Drinks</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Cuisines
                            </h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Mexican</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Italian</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Chinese</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Southern</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Indian</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Greek</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Account</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Profile</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Favorites</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Sign Out</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-gray-700 capitalize xl:text-center">Made with ❤️ by Alexis Benavidez</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}