import "./App.css";

import Box1 from "./components/Box-1/Box1";
import Box2 from "./components/Box-2/Box2";
import Box3 from "./components/Box-3/Box3";
import Box4 from "./components/Box-4/Box4";
import Box5 from "./components/Box-5/Box5";
import Box6 from "./components/Box-6/Box6";
import Box7 from "./components/Box-7/Box7";
import ViewBasedAnimations from "./components/ViewBasedAnimations/ViewBasedAnimations";
import ScrollBasedAnimations from "./components/ScrollBasedAnimations/ScrollBasedAnimations";
function App() {
  return (
    <>
      <div className="App">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
      </div>
      <div>
        <ViewBasedAnimations />
        <ScrollBasedAnimations />
      </div>
    </>
  );
}

export default App;
