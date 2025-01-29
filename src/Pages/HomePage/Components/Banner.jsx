import { CiSearch } from "react-icons/ci";

const Banner = () => {

  return (
    <header className=" bg-gradient-to-r from-purple-500 to-green-500 text-white">
      {/* Background overlay */}
      <div className=" bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col items-center text-center py-20 px-5 ">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">

          Find Trusted Tradespeople Near You
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Connect with skilled professionals in your area for all your needs.
          Fast, easy, and reliable service.
        </p>
        <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg shadow-md max-w-md mt-10 mx-3">
          {/* Search Icon */}
          <div className="flex items-center text-gray-400 ml-1">
            <CiSearch size={25}></CiSearch>
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter your postcode"
            className="flex-grow px-2 text-gray-700 border-none focus:outline-none"
          />

          {/* Button */}
          <button className="bg-green-500 w-max text-white px-4 py-3 -my-[1px] -mr-[1px] rounded-lg hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Decorative SVG */}
      <div className=" w-full">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 380"
        >
          <path
            fill="#F9FAFB"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,170.7C672,171,768,149,864,133.3C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Banner;
