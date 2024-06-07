import React, { useState } from 'react';
import { sadAction } from './action';
import { useDispatch } from 'react-redux';

interface sadIncrementerProps {
  // define props here
}

const SadIncrementer: React.FC<sadIncrementerProps> = () => {
  
  const [quantity, setQuantity] = useState(0); 
  const despatch = useDispatch();
  return (
    <div>
      {" "}
      <h1>Are you sad ?</h1>
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
          despatch(sadAction(quantity, new Date().toLocaleString()));
        }}
        className="bg-red-500 m-3 hover:bg-red-700  text-white font-bold py-2 px-4 rounded"
      >
        Yes
      </button>
    </div>
  );
};

export default SadIncrementer;