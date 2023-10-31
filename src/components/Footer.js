const Footer = props => {
    const { footerItems } = props;
    const { name, items } = footerItems;

    return (
        <div className="flex items-end w-full bg-white">

            <footer className="w-full text-gray-700 bg-gray-300 body-font">
                <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"></div>
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">{name}</h2>
                    <nav className="mb-10 list-none">
                        {items.map(item => {
                            return (
                                <li key={item} className="mt-3">
                                    <a
                                        href='#'
                                        className="text-gray-500 cursor-pointer hover:text-gray-900">
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </nav>
                </div>
            </footer>

        </div>

    );
};

export default Footer;