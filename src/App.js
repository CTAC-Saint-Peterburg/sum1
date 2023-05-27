import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "./components/Navigation";
import { RoutesHolder } from "./components/RoutesHolder";

function App() {
  console.log(useSelector((state) => state.control.dataJSON));
  return (
    <div>
      <Navigation />
      <RoutesHolder />
    </div>
  );
}

export default App;
