import { useState } from "react";
import QuestionForm from "./Components/QuestionForm";
import TradeCategory from "./Components/TradeCategory";
import QuestionCard from "./Components/QuestionCard";
import LoadingAnimation from "./Components/LoadingAnimation";
import NotFound from "./Components/NotFound";
import image from "../../files/askQuestionPostJob.png";

const AskATrade = () => {
  const allQuestions = [
    {
      id: 1,
      title: "Wooden saddle point",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Joiner",
    },
    {
      id: 2,
      title: "Cost of replacing lath ceiling and basic cornice",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Plasterer",
    },
    {
      id: 3,
      title: "Surveyor or plumber task?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Plumber",
    },
    {
      id: 4,
      title: "Indicative loft conversion prices",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Loft Conversion Specialist",
    },
    {
      id: 5,
      title: "Conservatory base",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Window Specialist",
    },
    {
      id: 6,
      title: "New Lintel Required",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Bricklayer",
    },
    {
      id: 7,
      title: "Remove Wooden Saddles",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Joiner",
    },
    {
      id: 8,
      title: "Price to fit/change new electrical fittings",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Electrician",
    },
    {
      id: 9,
      title: "Walls load capacity",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Engineer",
    },
    {
      id: 10,
      title: "How much to hang an internal door",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem neque magni amet ut voluptas libero, dignissimos repellat voluptates. Molestiae eveniet magni neque id provident nam nemo voluptate rerum amet.",
      category: "Joiner",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(allQuestions);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setNoResults(false);

    setTimeout(() => {
      const filteredResults = allQuestions.filter((question) =>
        question.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredResults);
      setLoading(false);

      if (filteredResults.length === 0) {
        setNoResults(true);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 lg:gap-10 gap-5 p-5">
        <div className=" md:col-span-3">
          <QuestionForm />

          <div className="container mx-auto pt-10">
            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex items-center space-x-3 mb-5"
            >
              <input
                type="text"
                placeholder="Search our questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border shadow-lg border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition"
              >
                Search
              </button>
            </form>

            {/* Loading State */}
            {loading && <LoadingAnimation />}

            {/* No Results State */}
            {noResults && !loading && <NotFound />}

            {/* Results */}
            {!loading && results.length > 0 && (
              <div className="space-y-4">
                {results.map((question) => (
                  <QuestionCard
                    key={question.id}
                    title={question.title}
                    category={question.category}
                    description={question.description}
                    author="John Doe"
                    answerCount={2}
                    date="12th August 2021"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="space-y-5">
          <TradeCategory />
          <div style={{backgroundImage: `url(${image})`}} className=" rounded-lg shadow-lg p-5 w-full h-96 bg-cover bg-center bg-no-repeat">
            <h1 className="text-xl font-semibold">Find Tradespeople, compare up to 3 quotes!</h1>
            <p className="text-lg font-light mt-3">It's FREE and there are no obligations</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition mt-5">
              Post a Job
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full bg-white p-5 flex flex-col md:flex-row justify-center gap-10 items-center">
            <h1 className="lg:text-2xl md:text-lg text-center">Ready to get a price for your home improvement project?</h1>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition ">
                Get Started
            </button>
      </div>
    </div>
  );
};

export default AskATrade;
