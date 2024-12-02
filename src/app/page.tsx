import hero from "@/app/assets/landingHero2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center tracking-widest text-white relative overflow-hidden justify-center md:justify-start"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Section */}
      <div className="flex flex-col justify-between z-10 h-1/2 max-w-4xl px-4 text-center sm:px-8 md:mt-[32px]">
        {/* Hero Title */}
        <div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-2">
            Amber & Aroma
          </h1>
          <p className="text-lg sm:text-2xl font-mono">Coffee & Tea</p>
        </div>

        {/* Hero Description */}
        <div>
          <p className="text-base sm:text-lg italic font-serif leading-relaxed">
            Exceptional coffee, artisanal matcha, premium teas, and freshly
            baked pastries crafted in-house.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-6 sm:gap-12 font-mono">
            <Link
              className="text-xl relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              href="/menu"
            >
              Menu
            </Link>
            <Link
              className="text-xl relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              href="/location"
            >
              Location
            </Link>
            <Link
              className="text-xl relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              href="#"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>
  );
}
