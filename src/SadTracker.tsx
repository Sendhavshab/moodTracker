import React from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors";
import { Moments } from "./store";

interface SadTrackerProps {
  // define props here
}

const SadTracker: React.FC<SadTrackerProps> = () => {
  const sadMoments = useSelector(sadMomentsSelector);

  return (
    <div className="bg-red-700 p-3 text-white ">
      happTime :
      {sadMoments.map((moment: Moments, i: number) => {
        return (
          <div key={i}>
            intensity : {moment.intentsity} , at {moment.time}
          </div>
        );
      })}
    </div>
  );
};

export default SadTracker;
