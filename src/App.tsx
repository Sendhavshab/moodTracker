import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyIncrementer from "./HappyIncrementer";
import SadIncrementer from "./SadIncrementer";
import ClearButton from "./ClearButton";

  
const App = ( ) => {


  return (
    <div className="bg-slate-400 p-3 space-y-5 font-bold">
      <HappyTracker />
      <SadTracker />
      <HappyIncrementer />
      <SadIncrementer />
    <ClearButton>clear</ClearButton>
    </div>
  );
};

export default App;