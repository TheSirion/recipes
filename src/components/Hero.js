import backgroundImage2 from '../assets/backgroundImage2.webp';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center h-[43rem]'
      style={{ backgroundImage: `url(${backgroundImage2})` }}>
      <Navbar />
    </div>
  );
};

export default Hero;
