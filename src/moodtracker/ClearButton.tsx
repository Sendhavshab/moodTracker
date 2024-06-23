import React from "react";
import { useDispatch } from "react-redux";
import { deleteAction } from "../actions/momentsAction";

interface ClearButtonProps {
  children: React.ReactNode;
}

const ClearButton: React.FC<ClearButtonProps> = ({ children }) => {
  const despatch = useDispatch();

  const clearAll = () => {
    despatch(deleteAction);
  };

  return (
    <button
      onClick={clearAll}
      id="displayButton"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default ClearButton;
