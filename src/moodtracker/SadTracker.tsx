import React from "react";
import { useSelector } from "react-redux";
import { Moments } from "../store";
import { sadMomentsSelector } from "../selecters/mood-selectors";

interface SadTrackerProps {
  // define props here
}

const SadTracker: React.FC<SadTrackerProps> = () => {
  const sadMoments = useSelector(sadMomentsSelector);

  return (
    <div className="bg-red-700 p-3 text-white ">
      sad :
      {sadMoments.map((moment: Moments, i: number) => {
        return (
          <div key={i}>
            intensity : {moment.intensity} , at {moment.time}
          </div>
        );
      })}
    </div>
  );
};

export default SadTracker;
