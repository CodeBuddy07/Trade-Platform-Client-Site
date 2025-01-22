import React from "react";
import step1Image from "../../files/postJob.png";
import step2Image from "../../files/GetQuotes.png";
import step3Image from "../../files/chooseTraders.png";
import step4Image from "../../files/feedback.png";
import {
  FaClipboardList,
  FaUsers,
  FaHandHoldingHeart,
  FaStar,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaClipboardList className="text-white text-2xl" />,
      title: "Tell us about your job",
      description:
        "At this stage, we'll ask you questions about your job such as when and where you want the job doing, what type of tradesperson you need, and a short description of the job.",
      image: step1Image,
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Local trades get in touch",
      description:
        "As soon as we have all the details for your job, we’ll forward it on to relevant trades in your area. Up to 3 trades can then show interest and get in touch with you to give you a quote.",
      image: step2Image,
    },
    {
      icon: <FaHandHoldingHeart className="text-white text-2xl" />,
      title: "Choose your tradesperson",
      description:
        "Once local trades have been in touch, it's up to you to arrange with them to give a quote over the phone or visit your property. You can then choose your preferred tradesperson.",
      image: step3Image,
    },
    {
      icon: <FaStar className="text-white text-2xl" />,
      title: "Leave feedback",
      description:
        "As soon as your job has been completed by the trade, we’d love it if you could leave them a review. This helps other homeowners choose the best trades for them.",
      image: step4Image,
    },
  ];

  return (
    <div className=" py-10 md:py-20">
      <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800">
          How it works
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg">
          Easily find skilled professionals in your area with our fast and free
          online service.
          </p>
          <hr className="w-16 mx-auto mt-2 border-2 border-green-600" />
        </div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>
          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-10 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step Details */}
              <div className="md:w-1/2 text-center md:text-left mt-10  px-4 space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {step.title}
                </h2>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {/* Step Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full max-w-sm rounded-lg "
                />
              </div>
              {/* Step Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-green-400  rounded-full flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="text-center md:-mt-16 px-6 py-6 bg-gray-100 rounded-lg max-w-2xl mx-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Ready to find a <span className="text-green-500">tradesperson</span>{" "}
            near you?
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Get connected with local tradespeople quickly and easily. Start your
            project today!
          </p>
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
