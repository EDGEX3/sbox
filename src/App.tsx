import "./css/index.css";
import Swindow from "./component/Swindow";
import Loading from "./component/comman/macro/Loading";
import { LoadingProvider } from "./states/context/LoadingContext";
function App() {
  return (
    <LoadingProvider>
      <Loading />
      <Swindow />
    </LoadingProvider>
  );
}

export default App;
