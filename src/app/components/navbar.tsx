import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-transparent w-full top-0 left-0 z-10 py-6">
      <div className="flex flex-row justify-evenly w-full max-w-6xl px-4">
        {/* Menu */}
        <Link
          className="text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          href="/"
        >
          Home
        </Link>
        {/* Location */}
        <Link
          className="text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          href="#"
        >
          Location
        </Link>
        {/* Contact */}
        <Link
          className="text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          href="#"
        >
          Contact
        </Link>
        {/* About Us */}
        <Link
          className="text-md font-serif text-gray-900 relative after:bg-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          href="#"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
