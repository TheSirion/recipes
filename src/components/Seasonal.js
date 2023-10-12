import Soup from '../assets/soupszn.jpeg';

export default function Seasonal() {
    return (
        <div className="bg-cover bg-center h-[40rem] relative" style={{ backgroundImage: `url(${Soup})` }}>
            <div className='bg-white w-96 h-56 p-10 shadow-2xl mx-32 flex flex-col absolute left-0 top-1/2 transform -translate-y-1/2'>
                <h2 className='text-4xl font-bold underline decoration-6 decoration-[#86905e]'>Soup Szn</h2>
                <p className='pt-3'>When the cold weather comes, bring out all the soups! From classic chicken noodle to fall pumpkin soup, there's a recipe for any mood.</p>
            </div>
        </div>
    );
}