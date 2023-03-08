import "./scss/css/app.css";
import Swindow from "./component/Swindow";
import Loading from "./component/comman/macro/Loading";
import { LoadingProvider } from "./redux/context/LoadingContext";
function App() {
  return (
    <LoadingProvider>
      <Loading />
      <Swindow />
    </LoadingProvider>
  );
}

export default App;
