import backgroundImage2 from '../assets/backgroundImage2.webp';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center h-[50rem]'
      style={{ backgroundImage: `url(${backgroundImage2})` }}>
      <Navbar />
      <h1 className='text-6xl text-right leading-relaxed pt-40 pr-20 font-bold'>
        Your One Stop Shop
        <br />
        For All Things Delish
      </h1>
    </div>
  );
};

export default Hero;
