
const QuestionCard = ({title, category, description, author, answerCount, date,}) => {
  return (
    <div className=" lg:p-7 p-4 border rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">
        {category} -{" "}
        <span className="text-green-500"> {answerCount} Answers</span>
      </p>
      <p className="text-sm text-gray-800 mt-3">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-500 italic text-sm">
          Asked By: <span>{author}</span> on <span>{date}</span>
        </p>
        <button className="mt-2 text-green-500 hover:underline">
          View answers
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
