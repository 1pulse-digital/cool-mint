// components/Navbar.tsx
"use client"
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from "../images/miw-logo.webp";

interface NavbarProps {
  // Add any additional props you may need
}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
       

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button>
                  {open ? (
                    <XIcon className="h-6 w-6 text-white" onClick={() => setOpen(false)} />
                  ) : (
                    <MenuIcon className="h-6 w-6 text-white" onClick={() => setOpen(true)} />
                  )}
                </Popover.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                    <div className="rounded-lg shadow-md w-3/5 bg-white ring-1 ring-black ring-opacity-5 overflow-hidden mt-20">
                      <div className="px-5 pt-4 flex flex-col items-start justify-between">
                        <div className="flex flex-col">
                          <a href="/" className="text-gray-800">
                            Home
                          </a>
                          <a href="/" className="text-gray-800">
                            Home
                          </a>
                          <a href="/" className="text-gray-800">
                            Home
                          </a>
                          <a href="/" className="text-gray-800">
                            Home
                          </a>

                          

                          {/* Add more menu items as needed */}
                        </div>
                        <div>
                          {/* Add shopping cart icon and functionality */}
                          <span><svg xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FAFAFA" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</span>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          {/* Add more menu items as needed */}
        </div>
        <a href="/">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </a>
        {/* Shopping Cart (visible on lg screens and above) */}
        <div className=" items-center">
          {/* Add shopping cart icon and functionality */}
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FAFAFA" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
