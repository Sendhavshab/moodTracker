import React from 'react';
import { useSelector } from 'react-redux';
import { happyCountSelector } from './selectors';

interface HappyTrackerProps {
  // define props here
}

const HappyTracker: React.FC<HappyTrackerProps> = () => {

  const happyCount = useSelector(happyCountSelector)
  return (
    <div className="bg-blue-700 p-3 text-white ">
      you were happy {happyCount} times today
    </div>
  );
};

export default HappyTracker;