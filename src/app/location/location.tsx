import Image from "next/image";
import interior from "../assets/locationInterior.png";

function Location() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <Image
          src={interior.src}
          alt="Amber & Aroma Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-white font-serif text-6xl sm:text-7xl tracking-wide">
            Amber & Aroma
          </h1>
          <p className="text-gray-200 text-xl sm:text-2xl italic mt-4">
            Coffee & Tea
          </p>
          <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-2xl">
            Visit us for a luxurious artisanal experience in West Haven. Your
            one-stop destination for premium coffee and tea.
          </p>
        </div>
      </div>

      {/* Address and Contact Section */}
      <div className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-900 sm:text-4xl">
            Visit Us
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mt-4">
            We can’t wait to welcome you to Amber & Aroma.
          </p>

          {/* Address */}
          <div className="mt-8 text-center space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Our Location
            </h3>
            <p className="text-gray-700 text-lg">
              123 Luxury Lane West Haven, UT 84401
            </p>
            <p className="text-gray-600 italic">
              Free parking available on-site
            </p>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            <p className="text-gray-700 text-lg">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-gray-700 text-lg">
              Email:{" "}
              <a
                href="mailto:hello@amberandaroma.com"
                className="text-blue-500 hover:underline"
              >
                hello@amberandaroma.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
