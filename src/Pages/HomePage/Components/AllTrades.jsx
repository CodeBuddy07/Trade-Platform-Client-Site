import Slider from "react-slick";
import plumber from "./../../../files/plumber.jpg";
import electician from "./../../../files/electician.jpg";
import joiner from "./../../../files/joiner.jpg";

const AllTrades = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay delay
    responsive: [
      {
        breakpoint: 1024, // For devices < 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For devices < 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const trades = [
    {
      title: "Electrician",
      img: electician,
      description:
        "Ensure your home’s electrical systems are safe and efficient with our expert electricians. From installations to repairs, we handle it all with precision and care.",
      count: "28,765 electricians",
      location: "in the UK",
    },
    {
      title: "Plumber",
      img: plumber,
      description:
        "Fix leaks and improve your plumbing with our skilled plumbers. Whether it’s installations or emergency repairs, we’ve got you covered.",
      count: "19,432 plumbers",
      location: "in the UK",
    },
    {
      title: "Joiner",
      img: joiner,
      description:
        "Craft beautiful and functional furniture or repair woodwork with the expertise of our Joiners. From cabinets to custom designs.",
      count: "10,200 Joiners",
      location: "in the UK",
    },
    // Add more trades here as needed...
  ];

  return (
    <div className="flex flex-col items-center justify-center p-5 py-20 text-gray-700 md:px-10 lg:px-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-800">All Trades</h1>
        <hr className="w-16 mx-auto mt-2 border-2 border-green-600" />
      </div>

      {/* Slider Section */}
      <Slider {...settings} className="max-w-7xl w-full">
        {trades.map((trade, index) => (
          <div key={index} className="px-4">
            <div className=" overflow-hidden bg-white border border-gray-300 shadow-md rounded-lg">
              {/* Image Section */}
              <img
                src={trade.img}
                alt="Trade Image"
                className="object-cover w-full h-56 rounded-t-lg"
              />
              {/* Content Section */}
              <div className="p-6 space-y-4">
                <h4 className="text-2xl font-semibold text-green-800">
                  {trade.title}
                </h4>
                <hr className="w-12 border-2 border-green-600" />
                <p className="text-sm">{trade.description}</p>
                <hr />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{trade.count}</p>
                    <p>{trade.location}</p>
                  </div>
                  <button className="px-8 text-nowrap py-2 text-lg text-white transition-shadow bg-gradient-to-r from-green-500 to-green-700 rounded-md shadow-md hover:shadow-lg">
                    Hire Now
                  </button>
                </div>
              </div>
              {/* Button */}
              <div className="p-4 text-center"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllTrades;
