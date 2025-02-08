import React from "react";

const CircularProgress = ({ value, total }) => {
  const percentage = (value / total) * 100;
  const circumference = 2 * Math.PI * 70; // radius is 70
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg className="transform -rotate-90 w-48 h-48">
        {/* Background circle */}
        <circle
          cx="96"
          cy="96"
          r="70"
          className="stroke-gray-200"
          strokeWidth="12"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="96"
          cy="96"
          r="70"
          className="stroke-blue-600"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      {/* Target icon in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-full p-4 shadow-md">
          <svg
            className="w-8 h-8 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
