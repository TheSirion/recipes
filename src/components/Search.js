import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  return (
    <div class='relative text-lg bg-transparent mr-10'>
      <div class='flex items-center border-b-2 border-[#2f4c28] py-2'>
        <input
          class='bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none'
          type='text'
          placeholder='Search'
        />
        <button
          type='submit'
          class='absolute right-0 top-0 mt-3 mr-4'>
          <FontAwesomeIcon
            className='pb-2'
            icon={faMagnifyingGlass}
            style={{ color: '#2f4c28' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
