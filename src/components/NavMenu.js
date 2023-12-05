import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const NavMenu = props => {
  const { menuItems } = props;
  const { name, items } = menuItems;
  return (
    <>
      <Menu
        as='div'
        className='relative inline-block text-left p-6'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center px-3 py-2 text-lg hover:underline decoration-2 decoration-[#D57D18] underline-offset-8'>
            {name}
            <ChevronDownIcon
              className='mt-1 h-5 w-5 text-black'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          // as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              {items.map(item => {
                return (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <a
                        href='#'
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}>
                        {item}
                      </a>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavMenu;
