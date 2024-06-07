import React from 'react';
import { useSelector } from 'react-redux';
import { happyMomentsSelector } from './selectors';
import { Moments } from './store';

interface HappyTrackerProps {
  // define props here
}

const HappyTracker: React.FC<HappyTrackerProps> = () => {

  const happyMoments = useSelector(happyMomentsSelector)
  return (
    <div className="bg-blue-700 p-3 text-white ">
      happTime : {happyMoments.map((moment : Moments , i : number) =>{
        return(
        <div key={i}> intensity : {moment.intentsity} , at {moment.time}</div>
        );
      })}
    </div>
  );
};

export default HappyTracker;