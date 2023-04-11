import "./css/index.css";
import Swindow from "./component/Swindow";
import Loading from "./component/comman/macro/Loading";
import { LoadingProvider } from "./redux/context/LoadingContext";
import '@icon-park/react/styles/index.css';
function App() {
  return (
    <LoadingProvider>
      <Loading />
      <Swindow />
    </LoadingProvider>
  );
}

export default App;
