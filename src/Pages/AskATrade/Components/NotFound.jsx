// NotFound.jsx
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <FaExclamationTriangle className="text-red-500 text-5xl" />
      <p className="text-gray-600 font-bold text-lg">No results found!</p>
      <p className="text-gray-500 text-sm">
        Try searching for something else or adjust your keywords.
      </p>
    </div>
  );
};

export default NotFound;
