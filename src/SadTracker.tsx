import React from 'react';
import { useSelector } from 'react-redux';
import { sadCountSelector } from './selectors';

interface SadTrackerProps {
  // define props here
}

const SadTracker: React.FC<SadTrackerProps> = () => {

  const sadCount = useSelector(sadCountSelector)

  return (
    <div className="bg-red-700 p-3 text-white ">
      you were sad {sadCount} times today
    </div>
  );
};

export default SadTracker;