import React, { useContext } from "react";
import { AuthContext } from "../../../../../Authentication/AuthProvider";

const ProfileCompletion = ({ progress }) => {
  const radius = 60; 
  const stroke = 4; 
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const {user} = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center space-y-2 relative">
      {/* Circular Progress Container */}
      <div className="relative w-52 h-52  flex items-center justify-center">
        <svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className="absolute w-full h-full"
        >
          {/* Background Circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Circle */}
          <circle
            stroke="#ef44e4"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>
        {/* Profile Image */}
        <div className="absolute w-40 h-40 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user?.profileImage.url}
            alt="Profile"
          />
        </div>
      </div>
      {/* Progress Text */}
      <p className="text-xl font-semibold">{progress}%</p>
      <p className="text-gray-500 text-sm">PROFILE COMPLETE</p>
    </div>
  );
};

export default ProfileCompletion;
