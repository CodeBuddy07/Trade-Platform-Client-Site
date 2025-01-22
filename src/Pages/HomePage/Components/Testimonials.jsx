import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    title: "Web Developer",
    testimonial:
      "This platform has truly transformed the way I work. The opportunities are endless!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Graphic Designer",
    testimonial:
      "I’ve found amazing clients here and grown my business exponentially!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Tom Hardy",
    title: "Photographer",
    testimonial:
      "The leads I receive are perfect for my niche. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Emma Watson",
    title: "Interior Designer",
    testimonial:
      "A fantastic platform that bridges the gap between professionals and clients.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-gray-100 py-20 px-5">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <hr className="w-20 border-2 border-green-500 mx-auto mt-2" />
      </div>

      {/* Blur Effects */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

      {/* Slider */}
      <Slider {...settings} className="max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-5 transition-transform transform hover:scale-105"
          >
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
              <FaQuoteLeft className="text-green-500 text-3xl" />
              <p className="text-gray-600">{testimonial.testimonial}</p>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
