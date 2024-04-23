"use client"
import Link from "next/link"
import Image from "next/image"
import { Fragment, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import logo from "../images/miw-logo.webp"
import Button, { HeaderButton } from "./base/button"
import { usePathname } from "next/navigation"

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
    name: "Classes",
    href: "/classes",
  },
  {
    name: "Café",
    href: "/cafe",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [] = useState(false)
  const pathname = usePathname()
 
  return (
    
    <div className={"relative z-30 h-[90px] bg-background"}>
      <Popover className="fixed w-full bg-background">
        {({ open }) => (
          <div className="flex w-full justify-between px-4  py-4 sm:space-x-4 sm:px-6 lg:px-8 2xl:px-28">
            <div className={"w-40"}>
              <Link href={"/"}>
                <p>
                  <Image src={logo} alt="Logo" width={130} height={80} />
                </p>
              </Link>
            </div>

            <div className={"my-auto"}>
              {/* Mobile menu */}
              <div className="grid place-items-center justify-center lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="mr-24 inline-flex  items-center justify-center rounded-md bg-background p-2 text-gray-400 hover:bg-background hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:mr-0">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>

                {/* Mobile menu panel */}
                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition "
                  >
                    <div className="mt-16 mx-6 w-2/3 bg-[#27272A] ring-1 ring-black ring-opacity-5 sm:w-1/3">
                      <div className="px-5 pb-6 pt-5">
                        <div className="flex items-start justify-between">
                          <div className="-mr-2">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-6">
                          <nav className="grid gap-y-8">
                            {navigationItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-4 flex items-start justify-start rounded-md p-3 px-6"
                              >
                                <span className=" font-helvetica text-[14px] font-normal text-textColor">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>

                      <div className="space-y-6 px-5 py-2 pb-6">
                        <div className="w-full sm:block">
                          <Link href="/login">
                            <Button color={"primary"}>Login</Button>
                          </Link>
                        </div>
                        <div className="flex items-center justify-start gap-x-2 sm:hidden">
                          <div className="">
                            <div className="flex flex-row space-x-2">
                              <Link
                                href="https://www.facebook.com/madeinworkshop/"
                                target="_blank"
                              >
                                <p className="py-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0.54em"
                                    height="1.2em"
                                    viewBox="0 0 896 1664"
                                  >
                                    <path
                                      fill="#EFEFEF"
                                      d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"
                                    />
                                  </svg>
                                </p>
                              </Link>

                              <Link
                                href="https://www.facebook.com/madeinworkshop/"
                                target="_blank"
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                  </svg>
                                </span>
                              </Link>
                              <Link
                                href="https://www.instagram.com/accounts/login/?next=%2Fmade_in_workshop_za%2F"
                                target="_blank"
                              >
                                <span className="py-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0.88em"
                                    height="1.5em"
                                    viewBox="0 0 740 850"
                                  >
                                    <path
                                      fill="#EFEFEF"
                                      d="M372 182q41 0 77 15t63 42t42 63t15 77t-15 76t-42 63t-63 42t-77 16t-77-16t-62-42t-42-63t-16-76t16-77t42-63t62-42t77-15m0 324q26 0 49-10t41-27t27-41t10-49t-10-50t-27-41t-41-27t-49-10t-49 10t-41 27t-27 41t-10 50t10 49t27 41t41 27t49 10m368-314q9 187 0 374q-2 36-17 68t-39 56t-57 40t-68 17q-47 2-93 3t-94 1t-93-1t-94-3q-36-2-68-17t-56-40t-40-56t-17-68q-8-187 0-374q2-36 17-68t40-57t56-39t68-17q187-9 374 0q36 2 68 17t57 39t39 57t17 68m-70 370q9-183 0-367q-1-22-11-42t-25-36t-36-26t-42-11q-46-2-92-3t-92-1t-92 1t-92 3q-22 1-42 11t-35 26t-26 36t-11 42q-9 184 0 368q1 22 11 42t26 35t35 26t42 11q184 9 368 0q22-1 42-11t36-26t25-36t11-42M569 138q18 0 31 13t13 31t-13 31t-31 13t-31-13t-13-31t13-31t31-13"
                                    />
                                  </svg>
                                </span>
                              </Link>

                              <Link
                                href="https://za.linkedin.com/company/made-in-workshop"
                                target="_blank"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-5"
                                  fill="#EFEFEF"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                          {/*  <div className="hidden md:block">
                            <Link href="/login">
                              <HeaderButton color={"primary"}>
                                Login2
                              </HeaderButton>
                            </Link>
                          </div>  */}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
              
              {/* Desktop menu */}

              <div className="hidden justify-center gap-x-0 space-x-5 py-2 text-base text-primary last:items-center lg:flex lg:items-center  lg:gap-x-0 lg:space-x-4 xl:flex xl:items-center xl:gap-x-1 xl:space-x-8 ">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`link ${pathname === item.href ? "font-bold text-primary lg:text-[15px] xl:text-base" : "text-secondary hover:font-bold hover:text-primary lg:text-[15px] xl:text-base"}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-x-2 sm:gap-x-4 sm:space-x-0">
              <div className="hidden sm:block">
                <div className="flex flex-row space-x-4 lg:space-x-2">
                  <div>
                    <Link
                      href="https://www.facebook.com/madeinworkshop/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-4"
                        fill="#EFEFEF"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.instagram.com/accounts/login/?next=%2Fmade_in_workshop_za%2F"
                      target="_blank"
                    >
                      <span className="py-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.88em"
                          height="1.5em"
                          viewBox="0 0 740 850"
                        >
                          <path
                            fill="#EFEFEF"
                            d="M372 182q41 0 77 15t63 42t42 63t15 77t-15 76t-42 63t-63 42t-77 16t-77-16t-62-42t-42-63t-16-76t16-77t42-63t62-42t77-15m0 324q26 0 49-10t41-27t27-41t10-49t-10-50t-27-41t-41-27t-49-10t-49 10t-41 27t-27 41t-10 50t10 49t27 41t41 27t49 10m368-314q9 187 0 374q-2 36-17 68t-39 56t-57 40t-68 17q-47 2-93 3t-94 1t-93-1t-94-3q-36-2-68-17t-56-40t-40-56t-17-68q-8-187 0-374q2-36 17-68t40-57t56-39t68-17q187-9 374 0q36 2 68 17t57 39t39 57t17 68m-70 370q9-183 0-367q-1-22-11-42t-25-36t-36-26t-42-11q-46-2-92-3t-92-1t-92 1t-92 3q-22 1-42 11t-35 26t-26 36t-11 42q-9 184 0 368q1 22 11 42t26 35t35 26t42 11q184 9 368 0q22-1 42-11t36-26t25-36t11-42M569 138q18 0 31 13t13 31t-13 31t-31 13t-31-13t-13-31t13-31t31-13"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://za.linkedin.com/company/made-in-workshop"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-4"
                        fill="#EFEFEF"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <Link href="/login">
                  <HeaderButton color={"primary"}>Login</HeaderButton>
                </Link>
              </div>

              {/* Shopping Cart  */}
              <div className="">
                <Link href="/cart">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#EFEFEF"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Popover>
    </div>
  )
}

export default Header;
