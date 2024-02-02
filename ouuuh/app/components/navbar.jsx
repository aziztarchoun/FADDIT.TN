'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className=" text-gray-700 grid grid-cols-12 shadow-sm fixed top-0 left-0 right-0 bg-white">
      <div className="hidden main-container md:flex items-center justify-between p-4 col-span-12 ">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row font-semibold p-4 md:p-0 mt-4 md:space-x-4 lg:space-x-8 md:mt-0">
            <li>
              <Link
                href="/"
                className={`${
                  activePath === '/home' || activePath === '/'
                    ? 'text-primary'
                    : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  activePath === '/about' ? 'text-primary' : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;