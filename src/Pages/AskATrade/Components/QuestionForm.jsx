import { FaQuestionCircle } from "react-icons/fa";
import questionImage from "../../../files/question.png";

const QuestionForm = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 md:flex md:space-x-6 w-full ">
          {/* Illustration Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={questionImage}
              alt="Ask a Trade"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            {/* Title and Description */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Ask a Trade
              </h1>
              <p className="text-gray-600 mt-2">
                Got a question that only a tradesperson can answer? We have
                thousands of trades ready to answer any question you may have.
              </p>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-2">
              {/* Title Input */}
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter a title for your question..."
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Trade Selection Dropdown */}
              <div className=" md:max-w-48 w-full">
                <label
                  htmlFor="trade"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select a Trade <span className="text-red-500">*</span>
                </label>
                <select
                  id="trade"
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a category</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Joiner">Joiner</option>
                  <option value="Painter">Painter</option>
                </select>
              </div>
            </div>

            {/* Question Input */}
            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700"
              >
                Ask Your Question <span className="text-red-500">*</span>
              </label>
              <textarea
                id="question"
                rows="4"
                placeholder="Type your question here..."
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                className="flex items-center bg-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
              >
                <FaQuestionCircle className="mr-2 text-lg" />
                Ask Your Question
              </button>
            </div>
          </div>
        </div>
    );
};

export default QuestionForm;