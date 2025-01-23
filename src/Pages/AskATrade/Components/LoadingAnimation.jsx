import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
