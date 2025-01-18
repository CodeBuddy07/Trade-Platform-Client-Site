import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


import slide_image_1 from './../../files/assets/images/img_1.jpg';
import bgImg from './../../files/reviews.jpg';
import { FaStar } from "react-icons/fa";



const ReviewCard = ({ imgSrc, name, review, rating }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
      {/* Image Section */}
      <div className="w-full h-48">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600 text-sm">{review}</p>

        {/* Rating Section */}
        <div className="flex items-center mt-3">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const Testimonials = () => {


  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 3, // Default for desktop
      spacing: 15, // Default spacing
    },
    breakpoints: {
      // Mobile view
      "(max-width: 640px)": {
        slides: {
          perView: 1, // Show 1 slide on mobile
          spacing: 10, // Reduced spacing for mobile
        },
      },
      // Tablet view
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: {
          perView: 2, // Show 2 slides on tablet
          spacing: 12, // Slightly reduced spacing for tablets
        },
      },
      // Desktop view (default)
      "(min-width: 1025px)": {
        slides: {
          perView: 3, // Show 3 slides on desktop
          spacing: 15, // Default spacing for desktop
        },
      },
    },
  });


  return (
    <div className=''>
      <div className=" lg:px-20 py-20 md:p-10 p-2 relative bg-[rgba(12,12,12,0.62)]">

        <h1 className='text-5xl text-center text-white font-bold'>Testimonials</h1>


        <div className="relative py-20 lg">
          <div className="lg:w-[600px] md:w-[400px] w-full lg:h-[700px] md:h-[500px]">
            <img className="w-full h-full object-cover rounded-md" src={bgImg} alt="" />
          </div>
          <div className="absolute  top-1/2 w-3/4 left-[60%] transform -translate-x-1/2 -translate-y-1/2   p-4 rounded">
            <div ref={sliderRef} className="keen-slider rounded-md ">

              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>
              <div className="keen-slider__slide number-slide1 rounded-md">
                <ReviewCard
                  imgSrc={slide_image_1}
                  name="John Doe"
                  review="Great service! Highly recommended."
                  rating={4}
                />
              </div>




            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials;
