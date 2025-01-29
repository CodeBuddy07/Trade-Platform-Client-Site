import { LuHandshake } from "react-icons/lu";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import image from "./../../../files/whyUs.jpg";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20 ">
      <div className="text-center space-y-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800">
            Why MyTradePerson is Your Trusted Choice
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg">
            Finding the right tradesperson for your project can be challenging.
            MyTradePerson makes it simple and reliable to connect with trusted
            professionals.
          </p>
          <hr className="w-16 mx-auto mt-2 border-2 border-green-600" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 justify-center mt-12 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="md:w-1/3 w-full">
          <img
            className="rounded-lg shadow-lg object-cover h-full w-full"
            src={image}
            alt="Why Choose Us"
          />
        </div>

        {/* Features Section */}
        <div className="space-y-8 md:w-1/2">
          {/* Feature Card */}
          <div className="flex gap-4 bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 text-green-600">
              <LuHandshake size={40} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">The Experts You Need</h4>
              <p className="text-sm md:text-base mt-2">
                List your job for free and connect with skilled tradespeople who
                are ready to help. You decide who to contact and move forward
                with.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="flex gap-4 bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 text-green-600">
              <FaRegThumbsUp size={40} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                Honest Customer Feedback
              </h4>
              <p className="text-sm md:text-base mt-2">
                Our detailed review system ensures you can read authentic
                feedback from real customers, helping you choose the best
                tradesperson for your needs.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="flex gap-4 bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 text-green-600">
              <BsShieldCheck size={40} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Stay in Control</h4>
              <p className="text-sm md:text-base mt-2">
                Browse profiles, check work history, and review feedback before
                making your decision. Only three tradespeople can reach out, and you decide who completes the work.
              </p>
            </div>
          </div>

          <button className="bg-green-600 px-7 text-white py-2 mt-4 rounded-md hover:bg-green-700 transition">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
