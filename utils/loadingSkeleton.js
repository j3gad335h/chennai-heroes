// LoadingSkeleton.js
import React from "react";

const LoadingSkeleton = ({ count = 1 }) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div key={i} className="shadow-md rounded-lg flex items-center animate-pulse">
        <div className="mr-4 bg-gray-300 rounded-full w-12 h-12"></div>
        <div>
          <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-16 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return <>{skeletons}</>;
};

export default LoadingSkeleton;
