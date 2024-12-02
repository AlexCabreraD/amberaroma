"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center bg-transparent w-full top-0 left-0 z-10 py-6">
      <div className="flex flex-row justify-evenly w-full max-w-6xl px-4">
        {/* Menu */}
        <Link
          className={`text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] ${
            pathname === "/" ? "after:w-full" : "after:w-0"
          } after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
          href="/"
        >
          Home
        </Link>
        {/* Menu */}
        <Link
          className={`text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] ${
            pathname === "/menu" ? "after:w-full" : "after:w-0"
          } after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
          href="/menu"
        >
          Menu
        </Link>
        {/* Location */}
        <Link
          className={`text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] ${
            pathname === "/location" ? "after:w-full" : "after:w-0"
          } after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
          href="/location"
        >
          Location
        </Link>
        {/* About Us */}
        <Link
          className={`text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] ${
            pathname === "/about-us" ? "after:w-full" : "after:w-0"
          } after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
          href="/about-us"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
