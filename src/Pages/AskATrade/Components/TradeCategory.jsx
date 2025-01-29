import React from 'react';

const TradeCategory = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 w-full">
          <p className="text-gray-400 text-nowrap">Trade Categories</p>
          <div className="mt-5 space-y-2">
            <p className="bg-gray-100 px-6 py-3 rounded-md hover:cursor-pointer hover:shadow-md">
              Electrician
            </p>
            <p className="bg-gray-100 px-6 py-3 rounded-md hover:cursor-pointer hover:shadow-md">
              Plumber
            </p>
            <p className="bg-gray-100 px-6 py-3 rounded-md hover:cursor-pointer hover:shadow-md">
              Joiner
            </p>
            <p className="bg-gray-100 px-6 py-3 rounded-md hover:cursor-pointer hover:shadow-md">
              Painter
            </p>
          </div>
        </div>
    );
};

export default TradeCategory;