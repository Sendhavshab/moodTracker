import React from "react";
import { useSelector } from "react-redux";
import { Moments } from "../store";
import { happyMomentsSelector } from "../selecters/mood-selectors";

interface HappyTrackerProps {
  // define props here
}

const HappyTracker: React.FC<HappyTrackerProps> = () => {
  const happyMoments = useSelector(happyMomentsSelector);
  return (
    <div className="bg-blue-700 p-3 text-white ">
      happy :{" "}
      {happyMoments.map((moment: Moments, i: number) => {
        return (
          <div key={i}>
            {" "}
            intensity : {moment.intensity} , at {moment.time}
          </div>
        );
      })}
    </div>
  );
};

export default HappyTracker;
