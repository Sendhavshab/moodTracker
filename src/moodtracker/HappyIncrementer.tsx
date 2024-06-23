import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { happyAction } from "../actions/momentsAction";

interface HappyIncrementerProps {
  // define props here
}

const HappyIncrementer: React.FC<HappyIncrementerProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const despatch = useDispatch();
  return (
    <div>
      <h1>Are you happy ?</h1>
      <input
        type="number"
        className="p-2 rounded-2xl font-bold "
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
        value={quantity}
      />
      <button
        onClick={() => {
          despatch(happyAction(quantity, new Date().toLocaleString()));
        }}
        className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Yes
      </button>
    </div>
  );
};

export default HappyIncrementer;
