// components/Navbar.tsx
"use client"
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from "../images/miw-logo.webp";
import Button from './base/button';
import Link from 'next/link';

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Machines",
    href: "/machines",
  },
  {
    name: "Pricing",
    href: "/memberships",
  },
  {
    name: "Workshops",
    href: "/workshops",
  },
  {
    name: "FAQ",
    href: "/",
  },
  {
    name: "Café",
    href: "/Café",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

interface NavbarProps {
  // Add any additional props you may need
}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Popover>
            {({ open }) => (
              <>
               <Popover.Button onClick={() => setOpen(!open)}>
  {open ? (
    <XIcon className="h-6 w-6 text-white" />
  ) : (
    <MenuIcon className="h-6 w-6 text-white" />
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
                    className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                    <div className="rounded-lg shadow-md w-3/5 bg-[#27272A] pb-8 pt-2 overflow-hidden mt-20 ml-2">
                      <div className="px-5 pt-4 flex flex-col items-start justify-between z-20">
                        <div className="flex flex-col text-secondary font-helvetica font-normal z-20 space-y-4 px-4">
                         
                        <nav className="grid gap-y-8">
                            {navigationItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center p-3 -m-4 rounded-md">
                                <span className=" text-base font-normal text-secondary font-helvetica">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </nav>
                          <div className="py-4">
                            <Link href="/">
                            <Button color={'primary'}>Login</Button>
                            </Link> 
                            </div>
                          {/* Add more menu items as needed */}
                        </div>
                        <div>
                          {/* Add shopping cart icon and functionality */}
       
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
        <div className="hidden lg:flex space-x-6 text-secondary">
        <a href="/" className="text-secondary">
                            Home
                          </a>
                          <a href="/" className="">
                            About
                          </a>
                          <a href="/" className="">
                            Machines
                          </a>
                          <a href="/" className="">
                           Pricing
                          </a>
                          <a href="/" className="">
                           Workshops
                          </a>
                          <a href="/" className="">
                           FAQ
                          </a>
                          <a href="/" className="">
                           Café
                          </a>
                          <a href="/" className="">
                           News
                          </a>
                          <a href="/" className="">
                           Contact
                          </a>
          {/* Add more menu items as needed */}
        </div>
        <a href="/">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </a>
        {/* Shopping Cart (visible on lg screens and above) */}
        <div className=" items-center">
          {/* Add shopping cart icon and functionality */}
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FAFAFA" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
